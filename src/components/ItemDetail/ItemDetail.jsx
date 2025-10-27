import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product, onAdd, isInCart }) => {
    // Si necesitas formatear el precio:
    const formattedPrice = `$${product.price ? product.price.toFixed(2) : '0.00'}`;

    return (
        <div className="item-detail-view">
            <div className="detail-image-container">
                {/* Asumo que la data de Firestore incluye un campo 'image' o 'img' */}
                <img src={product.image || 'default-image-url.jpg'} alt={product.name} />
            </div>
            
            <div className="detail-info-container">
                <h1>{product.name}</h1>
                <p className="detail-category">Categoría: {product.category}</p>
                <p className="detail-description">{product.description}</p>
                <p className="detail-price">{formattedPrice}</p>
                <p className="detail-stock">Stock disponible: {product.stock}</p>

                {/* --- Lógica de Renderizado Condicional del Botón --- */}
                {
                    // Si el producto ya fue agregado, mostramos el botón para ir al carrito.
                    isInCart ? (
                        <Link to="/carrito" className="btn-finish-buy">
                            Terminar mi compra
                        </Link>
                    ) : (
                        // Si no está en el carrito O tiene stock > 0, mostramos el ItemCount
                        product.stock > 0 ? (
                            <ItemCount 
                                stock={product.stock} 
                                initial={1} 
                                onAdd={onAdd} 
                            />
                        ) : (
                            // Si no hay stock
                            <p className="no-stock-message">❌ Producto Sin Stock</p>
                        )
                    )
                }

            </div>
        </div>
    );
};

export default ItemDetail;