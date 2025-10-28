// src/components/ItemDetail/ItemDetail.jsx
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

// Las props deben coincidir con los campos de Firestore
// Asumimos que 'product' contiene: { id, nombre, precio, stock, imagen, descripcion, categoria }
const ItemDetail = ({ product, onAdd, isInCart }) => {
    
    // Desestructuración usando los nombres de Firestore (nombre, precio, imagen, etc.)
    const { id, nombre, precio, stock, imagen, descripcion, categoria } = product;

    // Convertimos a número por seguridad para toFixed
    const numericPrice = Number(precio); 
    const formattedPrice = `$${numericPrice ? numericPrice.toFixed(2) : '0.00'}`;

    return (
        <div className="item-detail-view">
            <div className="detail-image-container">
                {/* Usamos el campo 'imagen' */}
                <img 
                    src={imagen || 'placeholder.jpg'} // Usa 'imagen'
                    alt={nombre} 
                    className="detail-image" 
                />
            </div>
            
            <div className="detail-info-container">
                {/* Usamos el campo 'nombre' */}
                <h1>{nombre}</h1> 
                <p className="detail-category">Categoría: {categoria}</p>
                <p className="detail-description">{descripcion}</p>
                <p className="detail-price">{formattedPrice}</p>
                <p className="detail-stock">Stock disponible: {stock}</p>

                {/* --- Lógica de Renderizado Condicional del Botón --- */}
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