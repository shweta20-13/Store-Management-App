import './App.css';
import { Home } from './Home';
import Login from './Login';
import Register from './Register';
import { About } from './About';
import {Routes,Route} from 'react-router-dom';
import { AddProduct } from './AddProduct';
import { Product } from './Product';
import Profile from './Profile';

function App() {
  return (
    <div className='register'>
     <Routes>
      <Route path='/' element={<Home  name="My Home" />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/add' element={<AddProduct />} />
      <Route path='/product' element={<Product />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<Login />} />
     </Routes>
    </div>
  );
}

export default App; 
