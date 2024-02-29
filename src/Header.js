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

  const handleFeatureClick = (feature) => {
    switch (feature) {
      case 'about':
        navigate('/about');
        break;
      case 'add':
        navigate('/add');
        break;
      case 'product':
        navigate('/product');
        break;
      case 'users':
        navigate('/users');
        break;  
      case 'other':
        navigate('/');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <a className='logo'>
              <div className="spinner">
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
          <li className="dropdown">
            <select onChange={(e) => handleFeatureClick(e.target.value)} className='feature'>
              <option  value="">Features</option>
              <option  value="about">About</option>
              <option  value="add">Add Product</option>
              <option  value="product">Product</option>
              <option value="users">Users</option>
              <option  value="other">Other</option>
            </select>
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

