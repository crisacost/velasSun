import React from 'react';

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <img src={item.image} alt={item.name} style={{width: '180px', height: '180px'}}/>
        </div>
       
      ))}
    </div>
  );
};


export default ItemList;