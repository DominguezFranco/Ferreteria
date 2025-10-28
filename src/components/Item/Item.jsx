// src/components/Item/Item.jsx (Crear Archivo)
// src/components/Item/Item.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Las props deben coincidir con los campos de Firestore
const Item = ({ id, nombre, precio, stock, imagen, categoria }) => {
    
    // NOTA: 'nombre', 'precio', 'imagen', 'categoria' son los nombres CORRECTOS
    
    // Formatear precio (usamos el campo 'precio' de Firestore)
    const formattedPrice = `$${precio ? precio.toFixed(2) : '0.00'}`;

    return (
        <div className="product-card">
            {/* Usamos el campo 'imagen' de Firestore */}
            <img 
                src={imagen || 'default-image.jpg'} // Usa 'imagen'
                alt={nombre} 
                className="product-image" 
            />
            
            <div className="card-body">
                {/* Usamos el campo 'nombre' de Firestore */}
                <h2 className="product-name">{nombre}</h2>
                <p className="product-category">Categoría: {categoria}</p> 
                <p className="product-price">Precio: {formattedPrice}</p>
                <p className={`product-stock ${stock === 0 ? 'out-of-stock' : ''}`}>
                    Stock: {stock > 0 ? stock : 'Agotado'}
                </p>
                
                <Link to={`/detalle/${id}`} className="btn-detail">
                    Ver Detalle
                </Link>
            </div>
        </div>
    );
};

export default Item;