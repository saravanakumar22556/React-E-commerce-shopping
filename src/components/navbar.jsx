import React, {useState, useContext } from 'react'
import { Link} from 'react-router-dom'
import{ ShoppingCart} from "phosphor-react"
import ReorderIcon from '@mui/icons-material/Reorder';
import "./navbar.css"
import { Cart } from '../Context'
import { Reorder } from '@mui/icons-material';


export const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }; 

  const{cart}=useContext(Cart);
  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
         <div className="hiddenLinks">
            <Link to="/"> HOME</Link>
            <Link to="shop"> SHOP</Link>
            <Link to="About"> ABOUT</Link>
            <Link to="Contact"> CONTACT</Link>
            <Link to="cart"><ShoppingCart size={25} />({cart.length})</Link>
          </div>  
        </div>
        <div className='rightSide'>
        <Link to="/"> HOME</Link>
            <Link to="shop"> SHOP</Link>
            <Link to="About"> ABOUT</Link>
            <Link to="Contact"> CONTACT</Link>
            <Link to="cart"><ShoppingCart size={25} />({cart.length})</Link>
            <button onClick={toggleNavbar}>
              <ReorderIcon/>
            </button>
        </div>
    </div>
  )
}
