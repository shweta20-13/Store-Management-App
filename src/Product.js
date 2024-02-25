// import { Header } from "./Header";
// import React,{useEffect,useState} from "react";
// import {useNavigate} from 'react-router-dom'
// export function Product(){
//   const [name,setName]=useState();
//   const [price,setPrice]=useState();
//   const [color,setColor]=useState();
//   const [weight,setWeight]=useState();
//   var info=[];
//   const setdata= async ()=>{
//     try {
//       const response = await fetch('http://localhost:3030/product');
//       if (!response.ok) {
//         throw new Error('Failed to fetch user data');
//       }

//       const data = await response.json();
//       for(var i=0;i<data.length;i++){
//         info.push(data[i]);
//       }
//       console.log("info data",info)
//     } catch (error) {
//       console.error('Login Error:', error);

//     }

//   }
//    const change=useNavigate();
//     useEffect(()=>{
//       if(!localStorage.getItem('user-name')){
//         change('/login');
//       }
//       setdata();
//     },[])

//     return (
//         <div className='container-fluid'>
//         <Header />
//         <h2 className="text-center">this is product page !</h2>
//         <div>
//           <table style={{border:"1px solid black"}}>
//             <thead>
//               <th>
//                 <td>productName</td>
//                 <td>Price</td>
//                 <td>Color</td>
//                 <td>weight</td>
//               </th>
//             </thead>
//             <tbody>
//               {
//                 info.map((data)=>{
//             <tr>
//                 <td>productName:{data.name}</td>
//                 <td>Price</td>
//                 <td>Color</td>
//                 <td>weight</td>
//              </tr>
//                 })
//               }
             
//             </tbody>
//           </table>
//         </div>
//         </div>
//     )
// }

import { Header } from "./Header";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export function Product() {
  const [products, setProducts] = useState([]);
  const change = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('user-name')) {
      change('/login');
    }
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3030/product');
      if (!response.ok) {
        throw new Error('Failed to fetch product data');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  }

  return (
    <div className='container-fluid'>
      <Header />
      <h2 className="text-center">This is the product page!</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Color</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.color}</td>
                <td>{product.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
