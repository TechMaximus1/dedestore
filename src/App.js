import {Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './Pages/HomePage.js';
import Shop from './Pages/Shop.js';
import Register from './Pages/Registration.js';
import Login from './Pages/Login.js';
import Dashboard from './Pages/Dashboard.js';
import RouteProtection from './Components/LayOuts/RouteProtection.js';
import AddProduct from './Pages/AddProduct.js';
import Logout from './Pages/Logout.js';

function App(){
  return (
    <>
   
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/dashboard" element={<RouteProtection cmp={Dashboard}/>}/>
        <Route path="/addproduct" element={<RouteProtection cmp={AddProduct}/>}/>
      </Routes>
    
    </>
  );
}

export default App;
