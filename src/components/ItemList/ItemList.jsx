// src/components/ItemList/ItemList.jsx (Crear Archivo)
import React from 'react';
// 🛑 Importamos el componente Item que acabamos de crear
import Item from '../Item/Item'; 

/**
 * Componente de Presentación: Muestra la lista de productos.
 */
const ItemList = ({ products }) => {
    return (
        <div className="item-list-grid">
            {/* Mapea el array de productos y renderiza un Item por cada uno */}
            {products.map(product => (
                <Item 
                    key={product.id} 
                    {...product} // Pasa todas las propiedades del producto como props
                />
            ))}
        </div>
    );
};

export default ItemList;