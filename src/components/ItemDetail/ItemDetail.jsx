
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './itemdetail.css';


const ItemDetail = ({ product, onAdd, isInCart }) => {
    
    
    const { id, nombre, precio, stock, imagen, descripcion, categoria } = product;

    
    const numericPrice = Number(precio); 
    const formattedPrice = `$${numericPrice ? numericPrice.toFixed(2) : '0.00'}`;

    return (
        <div className="item-detail-view">
            <div className="detail-image-container">
                
                <img 
                    src={imagen || 'placeholder.jpg'} 
                    alt={nombre} 
                    className="detail-image" 
                />
            </div>
            
            <div className="detail-info-container">
                
                <h1>{nombre}</h1> 
                <p className="detail-category">Categoría: {categoria}</p>
                <p className="detail-description">{descripcion}</p>
                <p className="detail-price">{formattedPrice}</p>
                <p className="detail-stock">Stock disponible: {stock}</p>

                
                {
                    isInCart ? (
                        <Link to="/carrito" className="btn-finish-buy">
                            Terminar mi compra
                        </Link>
                    ) : (
                        stock > 0 ? (
                            <ItemCount 
                                stock={stock} 
                                initial={1} 
                                onAdd={onAdd} 
                            />
                        ) : (
                            <p className="no-stock-message">❌ Producto Sin Stock</p>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default ItemDetail;