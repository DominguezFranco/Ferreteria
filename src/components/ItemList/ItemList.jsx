import React from 'react';
import Item from '../Item/Item'; 
import './itemlist.css';

const ItemList = ({ products }) => {
    return (
        <div className="item-list">
            
            {products.map(product => (
                <Item 
                    key={product.id} 
                    {...product} 
                />
            ))}
        </div>
    );
};

export default ItemList;