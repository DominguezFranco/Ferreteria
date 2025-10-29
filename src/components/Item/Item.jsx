import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';

const Item = ({ id, nombre, precio, stock, imagen, categoria }) => {
    const formattedPrice = `$${precio ? precio.toFixed(2) : '0.00'}`;

    return (
        <div className="product-card">
            
            <img 
                src={imagen || 'default-image.jpg'} 
                alt={nombre} 
                className="product-image" 
            />
            
            <div className="card-body">
                
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