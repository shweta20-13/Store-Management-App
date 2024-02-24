import './App.css';
import {useState} from 'react'
import { Header } from './Header';

function Register() {
const [name, setName] = useState();
const [email, setEmail] = useState();
const [mobile, setMobile] = useState();
const [password, setPassword] = useState();
const [repassword, setRepassword] = useState();
const [submited, setSubmitted] = useState(true);

    // Handling the name change
    const handleName = (e) => {
      setName(e.target.value);
      setSubmitted(false);
  };
  const handleEmail =(e)=>{
    setEmail(e.target.value);
    setSubmitted(false)
  }

  const handleMobile =(e)=>{
    setMobile(e.target.value);
    setSubmitted(false)
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value);
    setSubmitted(false)
  }
  const handleRepassword=(e)=>{
    setRepassword(e.target.value);
    setSubmitted(false)
  }

  const getdata=(e)=>{
    e.preventDefault();
    const data={name:name,email:email,password:password,mobile:mobile,submited:submited};
    
    console.log(data);
  }

  return (
    <div className='container-fluid'>
        <Header />
    <div className='register'>
      <form style={{width:'500px'}}>
      <h1 className='text-center'>Sign In</h1>
      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" onChange={handleName} value={name} className="form-control" placeholder="Enter Your Name" />

      </div>

        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" onChange={handleEmail} value={email} className="form-control" placeholder="Enter Your Email" />
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Mobile Number</label>
          <input type="text" onChange={handleMobile} value={mobile} className="form-control" placeholder="Enter Your Mobile No" />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" onChange={handlePassword} value={password} className="form-control" placeholder="Enter Your Password" />
          <div id="emailHelp" className="form-text">Password sholud be in alpha-numeric</div>

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Re-enter-Password</label>
          <input type="password" onChange={handleRepassword} value={repassword} className="form-control" placeholder="Enter Your Password" />
          <div id="emailHelp" className="form-text">Password sholud be in alpha-numeric</div>

        </div>

        <div className='d-flex justify-content-center'>
        <button type="submit" className="btn btn-primary" onClick={getdata}>Register</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Register;
