import React from 'react'
import '../styles/navbar.css';
import CartWidget from './CartWidget';


const NavBar = () => {
  return (
    //<div>NavBar</div>
    //estructura del html ul--li--menu//
    <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Tienda</a></li>
            <CartWidget/>
        </ul>
  )
}

export default NavBar;
