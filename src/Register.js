// import './App.css';
// import {useState} from 'react'
// import { Header } from './Header';
// import {useNavigate} from 'react-router-dom';

// function Register() {
// const [name, setName] = useState();
// const [email, setEmail] = useState();
// const [mobile, setMobile] = useState();
// const [password, setPassword] = useState();
// const [repassword, setRepassword] = useState();
// const [submited, setSubmitted] = useState(true);
// const navigate=useNavigate();
//     // Handling the name change
//     const handleName = (e) => {
//       setName(e.target.value);
//       setSubmitted(false);
//   };
//   const handleEmail =(e)=>{
//     setEmail(e.target.value);
//     setSubmitted(false)
//   }

//   const handleMobile =(e)=>{
//     setMobile(e.target.value);
//     setSubmitted(false)
//   }
//   const handlePassword=(e)=>{
//     setPassword(e.target.value);
//     setSubmitted(false)
//   }
//   const handleRepassword=(e)=>{
//     setRepassword(e.target.value);
//     setSubmitted(false)
//   }

//   const getdata=(e)=>{
//     e.preventDefault();
//     const data={name:name,email:email,password:password,mobile:mobile,submited:submited};
//     if(data.name && data.email && data.password){
//       localStorage.setItem('user-name',data.name);
//       navigate('/');
//     }
//     console.log(data);
//   }

//   return (
//     <div className='container-fluid'>
//         <Header />
//     <div className='register'>
//       <form style={{width:'500px'}}>
//       <h1 className='text-center'>Sign In</h1>
//       <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
//           <input type="text" onChange={handleName} value={name} className="form-control" placeholder="Enter Your Name" />

//       </div>

//         <div className="mb-3 ">
//           <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//           <input type="email" onChange={handleEmail} value={email} className="form-control" placeholder="Enter Your Email" />
          
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">Mobile Number</label>
//           <input type="text" onChange={handleMobile} value={mobile} className="form-control" placeholder="Enter Your Mobile No" />

//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//           <input type="password" onChange={handlePassword} value={password} className="form-control" placeholder="Enter Your Password" />
//           <div id="emailHelp" className="form-text">Password sholud be in alpha-numeric</div>

//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">Re-enter-Password</label>
//           <input type="password" onChange={handleRepassword} value={repassword} className="form-control" placeholder="Enter Your Password" />
//           <div id="emailHelp" className="form-text">Password sholud be in alpha-numeric</div>

//         </div>

//         <div className='d-flex justify-content-center'>
//         <button type="submit" className="btn btn-primary" onClick={getdata}>Register</button>
//         </div>
//       </form>
//     </div>
//     </div>
//   );
// }

// export default Register;

import './App.css';
import { useState } from 'react';
import { Header } from './Header';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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

      // Assuming the API returns a message or success status
      const data = await response.json();
      console.log('Registration Successful:', data);

      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      console.error('Registration Error:', error);
      // Handle registration error, show message to user, etc.
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
              onChange={handleName}
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

