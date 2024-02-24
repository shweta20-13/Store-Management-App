import { Header } from "./Header";
import React,{useEffect} from "react";
import {useNavigate} from 'react-router-dom'

export function About(){
    const change=useNavigate();
    useEffect(()=>{
      if(!localStorage.getItem('user-name')){
        change('/login');
      }
    },[])
    return (
        <div className='container-fluid'>
        <Header />
        <h2>this is about page !</h2>
        </div>
    )
}
     