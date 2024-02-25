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
        <div content='content'>
        <h2>welcome, to <span style={{color:"blue",}}> {name} </span> page !</h2>
        </div>
        </div>
    )
}