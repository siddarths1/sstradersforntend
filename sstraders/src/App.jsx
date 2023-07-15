import { Route, Router, Routes } from 'react-router-dom';
import Riceandattamap from "./components/Riceandatta/riceandattamap"
import Oilsandghees from './components/Oils_ghee/oilsandghees';
import Bevarages from './components/Bevarages/bevarages';
import Homeessentials from './components/Homeessentials/homeessentials';
import Food from './components/Food/food';
import Kitchen from './components/Kitchen/kitchen';
import Masalas from './components/Masals/masalas';
import Dryfruit from './components/Dryfruit/dryfruit';
import Pulsesanddalls from './components/Pulses_Dalls/pulsesanddalls';
import Navbarr from "./navbar";
import Login from './Login';
import SignUp from './Signup';
import Home from './home/home';
import './App.css'
import AddtoCart from './Cart/addtocart';
import Cart from './Cart';
import About from './Aboutus';
import { useState ,useEffect } from 'react';
import Addprodect from './admin/Addprodect';
import { ToastContainer, toast } from 'react-toastify';
import Updateproduct from './admin/Updateproduct';
import PaymentFrontend from '../PaymentFrontend';
import OrderDetails from '../OrderDetails';
const App=()=>{
  return (
    <div>
      <Navbarr />
      <Routes>
      <Route path='/' element={<Home />}/>
        <Route path='/Cart' element={<Cart />}/>
        <Route path='/About' element={<About />} />
        <Route path='/Rice_Atta' element={<Riceandattamap />} />
        <Route path='/Oils_ghee' element={<Oilsandghees />} />
        <Route path='/Bevarages' element={<Bevarages />} />
        <Route path='/Home_Essentials' element={<Homeessentials />} />
        <Route path='/Food_Noodles' element={<Food />} />
        <Route path='/Kitchen_Essentials' element={<Kitchen />} />
        <Route path='/Masalas_spices' element={<Masalas />} />
        <Route path='/DryFruit' element={<Dryfruit />} />
        <Route path='/Pulses_Dalls' element={<Pulsesanddalls />} />
        <Route path='/Login' element={<Login />}/>
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Addtocart' element={<Cart />}/>
        <Route path='/adminaddproduct' element={<Addprodect />}/>   
        <Route path='/adminupdateproduct' element={<Updateproduct />}/> 
        <Route path='/Payment' element = {<PaymentFrontend/>} />
        <Route path='/Orders' element = {<OrderDetails/>} />
      </Routes>
    </div>
  )
}
export default App