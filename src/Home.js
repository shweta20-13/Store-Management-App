import { Header } from './Header';
import React, { useState, useEffect } from 'react';

export function Home(props) {
  const [name, setName] = useState('');

  useEffect(() => {
    if (localStorage.getItem('user-name')) {
      setName(localStorage.getItem('user-name'));
    } else {
      setName(props.name);
    }
  }, [props.name]);

  return (
    <div className='container-fluid' style={{ backgroundImage: `url(https://www.questionpro.com/blog/wp-content/uploads/2023/03/product-management-lifecycle.jpg)`, backgroundSize: 'cover', width: '100vw', height: '100vh' }}>
      <Header />
      <h2 className=''>Welcome to <span style={{ color: "blue" }}>{name}</span> page!</h2>
      {/* <div className='content'>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img style={{width:"700px",height:"300px"}} src="https://jelvix.com/wp-content/uploads/2021/01/product-management.png" className="d-block w-100" alt="First slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className='text-warning'>First slide label</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img style={{width:"700px",height:"300px"}} src="https://www.questionpro.com/blog/wp-content/uploads/2023/03/product-management-lifecycle.jpg" className="d-block w-100" alt="Second slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className='text-success'>Second slide label</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img style={{width:"700px",height:"300px"}} src="https://www.questionpro.com/blog/wp-content/uploads/2023/02/product-management.jpg" className="d-block w-100" alt="Third slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5 className='text-danger'>Third slide label</h5>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div> */}
    </div>
  );
}
