import {Header} from './Header'
import React,{useState,useEffect} from 'react'
export function Home(props){
const [name,setName]=useState('');

useEffect(()=>{
    if(localStorage.getItem('user-name')){
        setName(localStorage.getItem('user-name'));
    }
    else{
        setName(props.name);
    }
     
},[])

    return (
        <div className='container-fluid'>
        <Header />
        <h2>welcome, to {name} page !</h2>
        </div>
    )
}