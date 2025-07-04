import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './landing_page/signup/Signup'
import Pricing from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/products/ProductPage';
import About from './landing_page/about/AboutPage'
import Support from './landing_page/support/SupportPage'
import NavBar from './landing_page/NavBar';
import Footer from './landing_page/Footer';
import Notfound from './landing_page/Notfound';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <>
     <BrowserRouter>
     <NavBar/>
     <Routes>
         <Route path='/' element={<HomePage/>}> </Route>
         <Route path='/signup' element={<Signup/>} > </Route>
         <Route path='/about' element={<About/>}> </Route>
         <Route path='/products' element={<ProductPage/>}> </Route>
         <Route path='/pricing' element={<Pricing/>}> </Route>
         <Route path='/support' element={<Support/>}> </Route>
         <Route path='*' element={<Notfound/>}> </Route>
     </Routes>
     <Footer/>
     </BrowserRouter>

    </>
   
);

 
 