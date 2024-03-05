import React,{useEffect} from "react";
import {useNavigate} from 'react-router-dom';
export default function ProtuctedRoute(props){
    const {Component} =props;
    const navigate=useNavigate();
    useEffect(()=>{
      if(!localStorage.getItem('user-id')){
        navigate('/login');
      }
      
    });

    return (
        <>
        <Component />
        </>
    )
}
