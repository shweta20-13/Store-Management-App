import './App.css';
import { Home } from './Home';
import Login from './Login';
import Register from './Register';
import { About } from './About';
import {Routes,Route} from 'react-router-dom';
import { AddProduct } from './AddProduct';
import { Product } from './Product';
import Profile from './Profile';
import ProtuctedRoute from './ProtectedRoute';

function App() {
  return (
    <div className='register'>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<ProtuctedRoute Component={About} />} />
      <Route path='/login' element={<ProtuctedRoute Component={Login} />} />
      <Route path='/add' element={<ProtuctedRoute Component={AddProduct} />} />
      <Route path='/product' element={<ProtuctedRoute Component={Product} />} />
      <Route path='/profile' element={<ProtuctedRoute Component={Profile} />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<ProtuctedRoute Component={Login} />} />
     </Routes>
    </div>
  );
}

export default App; 
