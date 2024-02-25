import { Header } from "./Header";
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export function About() {
  const change = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('user-name')) {
      change('/login');
    }
  });
//   
  return (
    <div className='container-fluid' style={{ backgroundImage: `url(https://lh3.googleusercontent.com/g1gnd4hQOq-ivzhvQeZmj0jy6zOCTGqTAj_NL9Mt46Yts-ddflzpau4RcRA15CGAwfwoOwmAWu4mRRnwN-uySclSM3hGApEptk8nUACiad6wSsLRgQ)`, backgroundSize: 'cover', width: '100vw', height: '100vh' }} >
      <Header />
      <h2 className="text-light">About Product Management Software</h2>
      <p style={{color:'white'}}>
        Our Product Management Software is designed to streamline the process of managing your products. Whether you're a small business or a large enterprise, our software provides the tools you need to organize, track, and analyze your product inventory efficiently.
      </p>
      <p style={{color:'white'}}>
        With our user-friendly interface, you can easily add new products, update existing ones, and remove items when needed. Keep track of product details such as names, prices, colors, weights, and more, all in one centralized location.
      </p>
      <p style={{color:'white'}}>
        Say goodbye to manual spreadsheets and disorganized records. Our software helps you maintain accurate inventory counts, track sales trends, and make informed decisions to optimize your product offerings.
      </p>
      <p style={{color:'white'}}>
        Whether you're in the retail, manufacturing, or e-commerce industry, our Product Management Software is tailored to meet your needs and enhance your business operations.
      </p>
    </div>
  );
}

     