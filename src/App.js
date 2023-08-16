import './App.css';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Navbar } from './components/navbar';
import {Cartpage} from './pages/cart/cart'
import {Shop} from './pages/shop/shop'
import { useState } from 'react';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';
function App() {

  
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='shop' element={<Shop/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Contact' element={<Contact/>}/>
          <Route path='cart' element={<Cartpage/>}/>

         </Routes>
         <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
