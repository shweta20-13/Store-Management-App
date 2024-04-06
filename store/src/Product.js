// import { Header } from "./Header";
// import React, { useEffect, useState, useRef } from "react";
// //import { useNavigate } from 'react-router-dom';
// import data1 from '../src/product.json';

// export function Product() {
//   const [products, setProducts] = useState([]);
//   const [editProduct, setEditProduct] = useState(null);
//   const [FormData, setFormData] = useState({
//     name: "",
//     price: "",
//     weight: "",
//     color: ""
//   });

//   const [searchTerm, setSearchTerm] = useState("");
//   //const change = useNavigate();
//   const editFormRef = useRef(null);

//   useEffect(() => {
//     // if (!localStorage.getItem('user-name')) {
//     //   change('/login');
//     // }
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       // const response = await fetch('http://localhost:3030/product', {
//       //   method: 'GET'
//       // });
//       // if (!response.ok) {
//       //   throw new Error('Failed to fetch product data');
//       // }
//       // const data = await response.json();
//       const data=data1.find((item)=>{
//         return item;
//       })
//       setProducts(data);
//     } catch (error) {
//       console.error('Error fetching product data:', error);
//     }
//   };

//   async function removeItem(id) {
//     try {
//       const response = await fetch(`http://localhost:3030/product/${id}`, {
//         method: 'DELETE',
//       });

//       if (!response.ok) {
//         throw new Error('Failed to delete product!');
//       }

//       const updatedProducts = products.filter(product => product.id !== id);
//       setProducts(updatedProducts);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   function editItem(item) {
//     setEditProduct(item);
//     setFormData({
//       name: item.name,
//       price: item.price,
//       color: item.color,
//       weight: item.weight
//     });

//     if (editFormRef.current) {
//       editFormRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }

//   function inputchange(event) {
//     const { name, value } = event.target;
//     setFormData({
//       ...FormData,
//       [name]: value,
//     });
//   }

//   const handlesubmit = async (e) => {
//     e.preventDefault();
//     const updateProduct = products.map(product =>
//       product.id === editProduct.id ? { ...product, ...FormData } : product
//     );
//     setProducts(updateProduct);

//     // API code to update the product
//     try {
//       const response = await fetch(`http://localhost:3030/product/${editProduct.id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(FormData),
//       });
//       if (!response.ok) {
//         throw new Error('Failed to update product');
//       }

//       setEditProduct(null);
//     } catch (error) {
//       console.error(`Error updating product with ID ${editProduct.id}:`, error);
//     }
//   }

//   // Function to search products 
//   const filteredProducts = products.filter(product =>
//     (product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
//     (product.price && product.price.toString().includes(searchTerm.toLowerCase())) ||
//     (product.weight && product.weight.toString().includes(searchTerm.toLowerCase())) ||
//     (product.color && product.color.toLowerCase().includes(searchTerm.toLowerCase())) ||
//     (product.by && product.by.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
//   );

//   return (
//     <div className='container-fluid'>
//       <Header />
//       <div className="d-flex justify-content-between">
//         <h2 className="text-secondary">This is the product page</h2>
//         <div className="search" style={{ display: "inline-flex", borderRadius: "10px" ,padding:"20PX" }}>
//           <input
//             className="input"
//             type="search"
//             placeholder="Search by name, price, color, or weight"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             style={{ width: "300px", borderTopLeftRadius: "9px", borderBottomLeftRadius: "9px" }}
//           />
//           <button className="search" style={{ background: 'rgb(70, 86, 300)',color:"yellow", marginLeft: "-1px", borderTopRightRadius: "9px", borderBottomRightRadius: "9px" }}>Search</button>
//         </div>

//       </div>

//       <div className="table-responsive">
//         <table className="table table-bordered table-striped">
//           <thead>
//             <tr>
//               <th>Sno</th>
//               <th>Product Name</th>
//               <th>Price</th>
//               <th>Color</th>
//               <th>Weight</th>
//               <th>Action-del</th>
//               <th>Action-edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredProducts.map((product, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{product.name}</td>
//                 <td>{product.price}</td>
//                 <td>{product.color}</td>
//                 <td>{product.weight}</td>
//                 <td><button className="btn btn-danger" onClick={() => removeItem(product.id)}>del</button></td>
//                 <td><button className="btn btn-warning" onClick={() => editItem(product)}>Edit</button></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {
//         editProduct && (
//           <div className="xyz" style={{ position: "absolute", top: "190px", left: "420px" }}>
//             <div className="bg-light" ref={editFormRef}>
//               <h3 className="text-center mt-2,">Edit Product</h3>
//               <form style={{ width: "550px", marginBottom: "50px" }}>
//                 <div className="inner-content" style={{ width: "450px", marginLeft: "50px", marginRight: "50px" }}>
//                   <div className="mb-3">
//                     <label>ProductName</label>
//                     <input type="text" className="form-control" name="name" value={FormData.name} onChange={inputchange} />
//                   </div>
//                   <div className="mb-3">
//                     <label>Price</label>
//                     <input type="text" className="form-control" name="price" value={FormData.price} onChange={inputchange} />
//                   </div>
//                   <div className="mb-3">
//                     <label>Weight</label>
//                     <input type="text" className="form-control" name="weight" value={FormData.weight} onChange={inputchange} />
//                   </div>
//                   <div className="mb-3">
//                     <label>Color</label>
//                     <input type="text" className="form-control" name="color" value={FormData.color} onChange={inputchange} />
//                   </div>
//                   <div className="d-flex justify-content-center">
//                     <button type="submit" className="btn btn-primary" onClick={handlesubmit} style={{ marginBottom: "30px" }}>Update</button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )
//       }
//     </div>
//   );
// }

// export default Product;

import './App.css';
import React, { useEffect, useState, useRef } from "react";
import { Header } from "./Header";
import data1 from '../src/product.json';

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
  const editFormRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = data1; // Change this line to use your JSON data
      setProducts(data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  async function removeItem(id) {
    try {
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

    // Update the JSON data with the new edited product
    try {
      // This is where you would update your JSON data
      // For this example, I'm just logging the updated product
      console.log("Updated Product:", updateProduct.find(item => item.id === editProduct.id));

      setEditProduct(null);
    } catch (error) {
      console.error(`Error updating product with ID ${editProduct.id}:`, error);
    }
  }

  const filteredProducts = products.filter(product =>
    (product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (product.price && product.price.toString().includes(searchTerm.toLowerCase())) ||
    (product.weight && product.weight.toString().includes(searchTerm.toLowerCase())) ||
    (product.color && product.color.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (product.by && product.by.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
  );

  return (
    <div className='container-fluid'>
      <Header />
      <div className="d-flex justify-content-between">
        <h2 className="text-secondary">This is the product page</h2>
        <div className="search" style={{ display: "inline-flex", borderRadius: "10px" ,padding:"20PX" }}>
          <input
            className="input"
            type="search"
            placeholder="Search by name, price, color, or weight"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "300px", borderTopLeftRadius: "9px", borderBottomLeftRadius: "9px" }}
          />
          <button className="search" style={{ background: 'rgb(70, 86, 300)',color:"yellow", marginLeft: "-1px", borderTopRightRadius: "9px", borderBottomRightRadius: "9px" }}>Search</button>
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
                <td>{product.name}</td>
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
          <div className="xyz" style={{ position: "absolute", top: "190px", left: "420px" }}>
            <div className="bg-light" ref={editFormRef}>
              <h3 className="text-center mt-2,">Edit Product</h3>
              <form style={{ width: "550px", marginBottom: "50px" }}>
                <div className="inner-content" style={{ width: "450px", marginLeft: "50px", marginRight: "50px" }}>
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
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary" onClick={handlesubmit} style={{ marginBottom: "30px" }}>Update</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Product;


