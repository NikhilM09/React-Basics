import React from 'react'
import {useSelector} from 'react-redux';
import Menucard from './Menucard';

const Cart = () => {
    const cartData = useSelector(store=>store.cart.cartItems);
    console.log("cartData", cartData);
    return(
       <div>
        {
            cartData.map((item)=><Menucard  key = {item.id} {...item}/>)
        }
       </div> 
    )
}

export default Cart;