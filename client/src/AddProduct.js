import { Header } from "./Header";
import React,{useEffect,useState} from "react";
import {useNavigate} from 'react-router-dom';
import './App.css';
export function AddProduct(){
    const [name,setName]=useState();
    const [price,setPrice]=useState();
    const [weight,setWeight]=useState();
    const [color,setColor]=useState();

    const change=useNavigate();

    useEffect(()=>{
      // if(!localStorage.getItem('user-name')){
      //   change('/login');
      // }
    },[]);

    async function handleSubmit(e){
        e.preventDefault();
        try {
            const response = await fetch('https://jsonserver-iota.vercel.app/product', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: name,
                price: price,
                color: color,
                weight:weight,
                by:localStorage.getItem('user-name').split(' ')[0],
              }),
            });
      
            if (!response.ok) {
              throw new Error('Add product Failed');
            }
      
            await response.json();
            change('/product'); 
          } catch (error) {
            console.error('Registration Error:', error);
          }
    }

    return (
        <div className='container-fluid'>
        <Header />
        <h2 className="text-center text-secondary">Add your Product</h2>
        <div className="loader ml-5"></div>
        <div className="addproduct">
        <form style={{width:"550px"}} onSubmit={handleSubmit}>
        <div className="mb-3">
        <label className='form-label'>Product Name</label>
        <input type="text" className='form-control' value={name} onChange={(e)=>{setName(e.target.value)}} />
        </div>
        <div className="mb-3">
        <label className='form-label'>Product Price</label>
        <input type="number" className='form-control' value={price} onChange={(e)=>{setPrice(e.target.value)}} />
        </div>
        <div className="mb-3">
        <label className='form-label'>Product color</label>
        <input type="text" className='form-control' value={color} onChange={(e)=>{setColor(e.target.value)}} />
        </div>
        <div className="mb-3">
        <label className='form-label'>Product weight</label>
        <input type="text" className='form-control' value={weight} onChange={(e)=>{setWeight(e.target.value)}} />
        </div>
        <div className="d-flex justify-content-center">
        <button type='submit' className='btn btn-primary'>
              Add
        </button>
        </div>
        </form>
        </div>
        </div>
    )
}