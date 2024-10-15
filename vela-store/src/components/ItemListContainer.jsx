
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import jasmin from '../assets/img/jasmin.jpg';
import imgLavanda from '../assets/img/lavanda.jpg';
import imgCanela from '../assets/img/canela.jpg';
import imgDecorCua from '../assets/img/deco2.jpg';
import imgDecorArco from '../assets/img/deco1.jpg';
import imgDecorRemol from '../assets/img/deco3.jpg';
import imgEspecial1 from '../assets/img/espe1.jpg';
import imgEspecial2 from '../assets/img/espe2.jpg';
import imgEspecial3 from '../assets/img/esp3.jpg';





function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    const mockItems = [
      { id: 1, name: 'Vela Aromática Jasmin', category: 'aromaticas', Image: jasmin },
      { id: 2, name: 'Vela Aromática Lavanda', category: 'aromaticas', Image: imgLavanda },
      { id: 3, name: 'Vela Aromática Canela', category: 'aromaticas', Image: imgCanela },
      { id: 4, name: 'Vela Decorativa Cuadrada', category: 'decorativas', Image: imgDecorCua },
      { id: 5, name: 'Vela Decorativa Arco', category: 'decorativas', Image: imgDecorArco },
      { id: 6, name: 'Vela Decorativa Remolino', category: 'decorativas', Image: imgDecorRemol },
      { id: 7, name: 'Vela Especial Pino', category: 'especiales', Image: imgEspecial1 },
      { id: 8, name: 'Vela Especial Copo', category: 'especiales', Image: imgEspecial2 },
      { id: 9, name: 'Vela Especial Flor', category: 'especiales', Image: imgEspecial3 },
    ];
    const filteredItems = categoryId ? mockItems.filter(item => item.category === categoryId) : mockItems;
    setItems(filteredItems);
  }, [categoryId]);


  return (
    <div>
      {/*<h1>Velas Sun</h1>*/}
      <h3>{categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'} </h3>
      <ItemList items={items} />
    </div>




  );
}

export default ItemListContainer