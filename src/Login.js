import './App.css';
import {useState} from 'react';
import {Header} from './Header';
import {useNavigate} from 'react-router-dom';
function Login() {
const [name,setName]=useState();
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [submited, setSubmitted] = useState(true);
const navigate=useNavigate();

  const handleEmail =(e)=>{
    setEmail(e.target.value);
    setSubmitted(false);
  }

  const handleName=(e)=>{
    setName(e.target.value);
    setSubmitted(false);
  }
 
  const handlePassword=(e)=>{
    setPassword(e.target.value);
    setSubmitted(false);
  }
  

  const getdata=(e)=>{
    e.preventDefault();
    const data={name:name,email:email,password:password,submited:submited};
    if(data.name && data.email && data.password){
      localStorage.setItem('user-name',data.name);
      navigate('/');
    }
    console.log(data);
  }

  return (
   <div className='container-fluid'>
    <Header />
    <div className='register'>
      <form style={{width:'500px'}}>
      <h1 className='text-center'>Sign Up</h1>
      <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" onChange={handleName} value={name} className="form-control"  placeholder="Enter Your Name" />
          
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" onChange={handleEmail} value={email} className="form-control"  placeholder="Enter Your Email" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" onChange={handlePassword} value={password} className="form-control"  placeholder="Enter Your Password" />
          <div id="emailHelp" className="form-text">Password sholud be in alpha-numeric</div>
        </div>
        
        <div className='d-flex justify-content-center'>
        <button type="submit" className="btn btn-primary" onClick={getdata}>Login</button>
        </div>
      </form>
    </div>
   </div>
  );
}

export default Login;
