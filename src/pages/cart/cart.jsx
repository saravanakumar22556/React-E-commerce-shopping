import React, { useContext, useEffect, useState } from 'react'
import { Product } from '../shop/product'
import { Cart } from '../../Context';


export const Cartpage = ({}) => {

  const[total,setTotal]=useState();
  const{cart}=useContext(Cart);

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=> acc+ (curr.price),0));

  },[cart])
  return (
    <div>
      <span style={{fontSize:30}}>MY CART</span>
      <br/>
      <span style={{fontSize:30}}> TOTAL RS:{total}</span>
      
      <div className='productsshop'>
          
        {cart.map((product) => (
          <Product
          product={product}
          key={product.id}
          
          />
          ))}
          
      </div>
    </div>
  )
}
