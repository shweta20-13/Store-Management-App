import './App.css';
import React, { useState,useEffect } from 'react';
import { Header } from './Header';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('user-id')){
      navigate('/');
    }
  });
  
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3030/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Registration Failed');
      }

      const data = await response.json();
      console.log('Registration Successful:', data.token);
      localStorage.setItem('user-name', data.name);
      localStorage.setItem('user-id',data.id);
      navigate('/');
    } catch (error) {
      console.error('Registration Error:', error);
    }
  };

  return (
    <div className='container-fluid'>
      <Header />
      <div className='register'>
        <form style={{ width: '500px' }} onSubmit={handleSubmit}>
          <h1 className='text-center'>Register</h1>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='form-control'
              placeholder='Enter Your Name'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={handleEmail}
              className='form-control'
              placeholder='Enter Your Email'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={handlePassword}
              className='form-control'
              placeholder='Enter Your Password'
            />
            <div id='emailHelp' className='form-text'>
              Password should be alpha-numeric
            </div>
          </div>
          <div>
            <label class="container">
              <input type="checkbox" checked="checked" />
              <div class="checkmark" style={{
                width: "35px",
                height: "39px",
                top: "1px",
                left: "-11px"
              }}></div>
            </label>
          </div>
          <div className='d-flex justify-content-center'>
            <button type='submit' className='btn btn-primary'>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

