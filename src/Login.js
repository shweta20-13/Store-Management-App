// import './App.css';
// import {useState} from 'react';
// import {Header} from './Header';
// import {useNavigate} from 'react-router-dom';
// function Login() {
// const [name,setName]=useState();
// const [email, setEmail] = useState();
// const [password, setPassword] = useState();
// const [submited, setSubmitted] = useState(true);
// const navigate=useNavigate();

//   const handleEmail =(e)=>{
//     setEmail(e.target.value);
//     setSubmitted(false);
//   }

//   const handleName=(e)=>{
//     setName(e.target.value);
//     setSubmitted(false);
//   }
 
//   const handlePassword=(e)=>{
//     setPassword(e.target.value);
//     setSubmitted(false);
//   }
  

//   const getdata=(e)=>{
//     e.preventDefault();
//     const data={name:name,email:email,password:password,submited:submited};


//     if(data.name && data.email && data.password){
//       localStorage.setItem('user-name',data.name);
//       navigate('/');
//     }
//     console.log(data);
//   }

//   return (
//    <div className='container-fluid'>
//     <Header />
//     <div className='register'>
//       <form style={{width:'500px'}}>
//       <h1 className='text-center'>Sign Up</h1>
//       <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
//           <input type="text" onChange={handleName} value={name} className="form-control"  placeholder="Enter Your Name" />
          
//         </div>
//         <div className="mb-3 ">
//           <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//           <input type="email" onChange={handleEmail} value={email} className="form-control"  placeholder="Enter Your Email" />
//         </div>
        
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//           <input type="password" onChange={handlePassword} value={password} className="form-control"  placeholder="Enter Your Password" />
//           <div id="emailHelp" className="form-text">Password sholud be in alpha-numeric</div>
//         </div>
        
//         <div className='d-flex justify-content-center'>
//         <button type="submit" className="btn btn-primary" onClick={getdata}>Login</button>
//         </div>
//       </form>
//     </div>
//    </div>
//   );
// }
// export default Login;



// import './App.css';
// import { useState } from 'react';
// import { Header } from './Header';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:3030/user', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: email,
//           password: password,
//         }),
//       });
//       console.log(response)
//       if (!response.ok) {
//         throw new Error('Login Failed');
//       }

//       const data = await response.json();

//      console.log(data)
//       localStorage.setItem('user-name', data.token);
//       navigate('/'); // Redirect to home page after successful login
//     } catch (error) {
//       console.error('Login Error:', error);
//       // Handle login error, show message to user, etc.
//     }
//   };

//   return (
//     <div className='container-fluid'>
//       <Header />
//       <div className='login'>
//         <form style={{ width: '500px' }} onSubmit={handleSubmit}>
//           <h1 className='text-center'>Login</h1>
//           <div className='mb-3'>
//             <label htmlFor='email' className='form-label'>
//               Email address
//             </label>
//             <input
//               type='email'
//               id='email'
//               value={email}
//               onChange={handleEmail}
//               className='form-control'
//               placeholder='Enter Your Email'
//             />
//           </div>
//           <div className='mb-3'>
//             <label htmlFor='password' className='form-label'>
//               Password
//             </label>
//             <input
//               type='password'
//               id='password'
//               value={password}
//               onChange={handlePassword}
//               className='form-control'
//               placeholder='Enter Your Password'
//             />
//             <div id='emailHelp' className='form-text'>
//               Password should be alpha-numeric
//             </div>
//           </div>
//           <div className='d-flex justify-content-center'>
//             <button type='submit' className='btn btn-primary'>
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


import './App.css';
import { useState } from 'react';
import { Header } from './Header';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3030/user');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const data = await response.json();

      // Check if the provided email exists in the data
      const user = data.find((user) => user.email === email);

      if (!user) {
        throw new Error('User not found');
      }

      // Check if the provided password matches the user's password
      if (user.password !== password) {
        alert(`invalid userid and password !`)
        throw new Error('Incorrect password');
      }

      // If email and password are correct, set user-name in localStorage
      localStorage.setItem('user-name', user.name);
      navigate('/'); // Redirect to home page after successful login
    } catch (error) {
      console.error('Login Error:', error);
      // Handle login error, show message to user, etc.
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
