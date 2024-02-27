import { Header } from "./Header";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';

export function Product() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [FormData, setFormData] = useState({
    name: "",
    price: "",
    weight: "",
    color: ""
  });

  const [searchTerm, setSearchTerm] = useState("");
  const change = useNavigate();
  const editFormRef = useRef(null);

  useEffect(() => {
    if (!localStorage.getItem('user-name')) {
      change('/login');
    }
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3030/product',{
        method:'GET'
      });
      if (!response.ok) {
        throw new Error('Failed to fetch product data');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  async function removeItem(id) {
    try {
      const response = await fetch(`http://localhost:3030/product/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete product!');
      }
      
      const updatedProducts = products.filter(product => product.id !== id);
      setProducts(updatedProducts);
    } catch (error) {
      console.error(error);
    }
  }

  function editItem(item) {
    setEditProduct(item);
    setFormData({
      name: item.name,
      price: item.price,
      color: item.color,
      weight: item.weight
    });

    if (editFormRef.current) {
      editFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  function inputchange(event) {
    const { name, value } = event.target;
    setFormData({
      ...FormData,
      [name]: value,
    });
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    const updateProduct = products.map(product =>
      product.id === editProduct.id ? { ...product, ...FormData } : product
    );
    setProducts(updateProduct);

    // API code to update the product
    try {
      const response = await fetch(`http://localhost:3030/product/${editProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(FormData),
      });
      if (!response.ok) {
        throw new Error('Failed to update product');
      }
      //console.log(`Product with ID ${editProduct.id} updated successfully.`);
      setEditProduct(null);
    } catch (error) {
      console.error(`Error updating product with ID ${editProduct.id}:`, error);
    }
  }

  // Function to search products 
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.price.toString().includes(searchTerm) ||
    product.weight.toString().includes(searchTerm) ||
    product.color.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.by.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  return (
    <div className='container-fluid'>
      <Header />
      <div className="d-flex justify-content-between">
        <h2 className="text-secondary">This is the product page</h2>
        <div className="search">
          <input
            type="search"
            placeholder="Search by name, price, color, or weight"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{width:"300px"}}
          />
          <button style={{ background: 'rgb(70, 86, 300)', marginRight: '30px' }}>Search</button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Sno</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Color</th>
              <th>Weight</th>
              <th>Action-del</th>
              <th>Action-edit</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.name} <span style={{color:"gray", marginLeft:"30px"}}>by - {product.by}</span></td> 
                <td>{product.price}</td>
                <td>{product.color}</td>
                <td>{product.weight}</td>
                <td><button className="btn btn-danger" onClick={() => removeItem(product.id)}>del</button></td>
                <td><button className="btn btn-warning" onClick={() => editItem(product)}>Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        editProduct && (
          <div>
            <h3 className="text-center">Edit Product</h3>
            <div className="addproduct" ref={editFormRef}>
              <form style={{ width: "550px" }}>
                <div className="mb-3">
                  <label>ProductName</label>
                  <input type="text" className="form-control" name="name" value={FormData.name} onChange={inputchange} />
                </div>
                <div className="mb-3">
                  <label>Price</label>
                  <input type="text" className="form-control" name="price" value={FormData.price} onChange={inputchange} />
                </div>
                <div className="mb-3">
                  <label>Weight</label>
                  <input type="text" className="form-control" name="weight" value={FormData.weight} onChange={inputchange} />
                </div>
                <div className="mb-3">
                  <label>Color</label>
                  <input type="text" className="form-control" name="color" value={FormData.color} onChange={inputchange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Update</button>
              </form>
            </div>
          </div>
        )
      }
    </div>
  );
}
