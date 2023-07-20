import './App.css';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Navbar } from './components/navbar';
import {Cartpage} from './pages/cart/cart'
import {Shop} from './pages/shop/shop'
import { useState } from 'react';
function App() {

  
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
            
          
          <Route path='cart' element={<Cartpage/>}/>
           
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
