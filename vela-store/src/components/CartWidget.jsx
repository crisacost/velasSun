import React from 'react'
import  icart from '../assets/icart.svg';

const CartWidget = () => {
    return (
        <>
            <img src={icart} alt='icart' style={{ width: 40 }} />
            <span>(3)</span> 
        </>
    )
}

export default CartWidget