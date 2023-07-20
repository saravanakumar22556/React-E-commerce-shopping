import React, { useContext } from 'react'
import { Cart } from '../../Context';


export const Product = ({product}) => {
  const{cart,setcart}=useContext(Cart);
    
  return (
    <div className='product'>
        <img src={product.productImage}/>
        <div className='description'>
            <p><b>{product.productName}</b></p>
            <p>RS:{product.price}</p>
        </div>

        {cart.includes(product) ?
        ( <button className='addToCartBttn' 
        onClick={()=>{setcart(cart.filter(c=>c.id!==product.id))}}>remove from cart</button>

        ):(<button className='addToCartBttn'  
        onClick={()=>{setcart([...cart,product])}}>Add to cart</button>

        )}
        </div>
  )
}
