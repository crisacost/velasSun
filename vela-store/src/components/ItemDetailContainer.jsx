import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
  const { id } = useParams();  
  const [item, setItem] = useState(null);

  useEffect(() => {
    const mockItems = [
      { id: 1, name: 'Vela Aromática Lavanda', description: 'Vela con esencia de lavanda', price: 500 },
      { id: 2, name: 'Vela Decorativa Blanca', description: 'Vela de decoración blanca', price: 300 },
      { id: 3, name: 'Vela Especial Navidad', description: 'Edición especial de Navidad', price: 800 }
    ];

 
    const selectedItem = mockItems.find(item => item.id === parseInt(id));
    setItem(selectedItem);
  }, [id]);

  return (
    <div>
      {item ? (
        <>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Precio: ${item.price}</p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;