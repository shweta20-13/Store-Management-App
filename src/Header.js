// import './App.css';
// import { useNavigate } from 'react-router-dom'
// export function Header() {
//    const navigate = useNavigate();
//    const logout = () => {
//       localStorage.clear('user-name');
//       navigate('/login');
//    };

//    function formateName(name) {
//       const fname = name.split(' ')[0];
//       return fname.charAt(0).toUpperCase() + fname.slice(1);
//    }

//    return (
//       <>
//          <nav>
//             <ul>
//                <li>
//                   <a className='logo'>
//                      <div class="spinner">
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                         <div></div>
//                      </div>
//                   </a>
//                </li>
//                <li>
//                   <a href='/'>Home</a>
//                </li>
//                <li>
//                   <a href="/about">About</a>
//                </li>
//                <li>
//                   <a href="/add">AddProduct</a>
//                </li>
//                <li>
//                   <a href="/product">Product</a>
//                </li>
//                {
//                   localStorage.getItem('user-name') ? (
//                      <>
//                         <li>
//                            <a className='name' href="/profile">{formateName(localStorage.getItem('user-name'))}</a>
//                         </li>
//                         <li>
//                            <a className='logout' href="" onClick={logout}>Logout</a>
//                         </li>
//                      </>
//                   ) : (
//                      <>
//                         <li>
//                            <a href="/login">Login</a>
//                         </li>
//                         <li>
//                            <a href="/register">Register</a>
//                         </li>
//                      </>
//                   )
//                }
//             </ul>
//          </nav>
//       </>
//    );
// }

import './App.css';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear('user-name');
    navigate('/login');
  };

  function formateName(name) {
    const fname = name.split(' ')[0];
    return fname.charAt(0).toUpperCase();
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <a className='logo'>
              <div class="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </a>
          </li>
          <li>
            <a href='/'>Home</a>
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
                <li className='auth'>
                  <a className='name' href="/profile">{formateName(localStorage.getItem('user-name'))}</a>
                </li>
                <li>
                  <a className='logout' href="" onClick={logout}>Logout</a>
                </li>
              </>
            ) : (
              <>
                <li className='auth'>
                  <a href="/login">Login</a>
                </li >
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
