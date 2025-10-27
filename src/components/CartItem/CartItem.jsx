import React from 'react';
import { useCart } from '../../context/CartContext';

const CartItem = ({ item }) => {
    const { removeItem } = useCart();

    const subtotal = item.price * item.quantity;

    return (
        <div className="cart-item-card">
            <img src={item.image || 'default-image.jpg'} alt={item.name} className="cart-item-image" />
            
            <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p>Precio Unitario: ${item.price.toFixed(2)}</p>
                <p>Cantidad: {item.quantity}</p>
                <p className="item-subtotal">Subtotal: ${subtotal.toFixed(2)}</p>
            </div>

            <button onClick={() => removeItem(item.id)} className="btn-remove-item">
                Eliminar Producto
            </button>
        </div>
    );
};

export default CartItem;