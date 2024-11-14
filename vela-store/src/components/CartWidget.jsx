import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const CartWidget = () => {
    const { cartItems } = useContext(CartContext);
   
    return (
        <div>
            <span><img src={icart} alt='icart' style={{ width: 40 }} /></span>
            <span>{cartItems.length}</span> 
        </div>
        
    )
}

export default CartWidget;