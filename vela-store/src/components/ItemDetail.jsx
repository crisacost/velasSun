import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ item }) => {
  const { addItemToCart } = useContext(CartContext);

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <button onClick={() => addItemToCart(item)}>Añadir al Carrito</button>
    </div>
  );
};

export default ItemDetail;