import React from 'react'
import '../styles/navbar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    //<div>NavBar</div>
    //estructura del html ul--li--menu cambio de a href a link to//
    <nav>
      <h2><Link to="/"> VelaSun</Link></h2>
       <ul>
            <li><Link to="/category/aromaticas">Velas Aromaticas</Link></li>
            <li><Link to="/category/decorativas">Velas Decorativas</Link></li>
            <li><Link to="/category/especiales">Ediciones Especiales</Link></li>
           
            <CartWidget/>
        </ul>
        <div>
        <Link to="/cart"><i className="fa fa-shopping-cart"></i> Cart</Link>
      </div>
    </nav>
   
  )
}

export default NavBar;
