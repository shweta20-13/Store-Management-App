import './App.css';
import {useNavigate} from 'react-router-dom'
export function Header() {
   const navigate=useNavigate();
   const logout=()=>{
      localStorage.clear('user-name');
      navigate('/login');
   };
   
   return (
      <>
         <nav>
            <ul>
               <li>
                  <a href="/">Home</a>
               </li>
               <li>
                  <a href="/about">About</a>
               </li>
               <li>
                  <a href="/add">AddProduct</a>
               </li>
               <li>
                  <a href="/product">Product</a>
               </li>
               {
                  localStorage.getItem('user-name') ? (
                     <>
                        <li>
                           <a href="">{localStorage.getItem('user-name')}</a>
                        </li>
                        <li>
                           <a href="" onClick={logout}>Logout</a>
                        </li>
                     </>
                  ) : (
                     <>
                        <li>
                           <a href="/login">Login</a>
                        </li>
                        <li>
                           <a href="/register">Register</a>
                        </li>
                     </>
                  )
               }
            </ul>
         </nav>
      </>
   );
}
