import './App.css';
import { useState,useEffect } from 'react';
import { Header } from './Header';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    // if(localStorage.getItem('user-id')){
    //   navigate('/');
    // }
  });

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://jsonserver-iota.vercel.app/user');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const data = await response.json();

      const user = data.find((user) => user.email === email);

      if (!user) {
        throw new Error('User not found');
      }

      if (user.password !== password) {
        alert(`invalid userid and password !`)
        throw new Error('Incorrect password');
      }

      localStorage.setItem('user-name', user.name);
      localStorage.setItem('user-id',user.id);
      localStorage.setItem('user-role',user.role);
      navigate('/'); 
    } catch (error) {
      console.error('Login Error:', error);

    }
  };

  return (
    <div className='container-fluid'>
      <Header />
      <div className='login'>
        <form style={{ width: '500px' }} onSubmit={handleSubmit}>
          <h1 className='text-center'>Login</h1>
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
          <div className='d-flex justify-content-center'>
            <button type='submit' className='btn btn-primary'>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
