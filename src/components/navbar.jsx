import React, { useContext } from 'react'
import { Link} from 'react-router-dom'
import{ ShoppingCart} from "phosphor-react"
import "./navbar.css"
import { Cart } from '../Context'
export const Navbar = () => {
  const{cart}=useContext(Cart);
  return (
    <div className="navbar">
        <div className="links">
            <Link to="/"> SHOP</Link>
            <Link to="/cart"><ShoppingCart size={25} />({cart.length})</Link>
            
            
        </div>
    </div>
  )
}
