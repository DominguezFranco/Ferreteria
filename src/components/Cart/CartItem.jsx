import React from 'react';
import { useCart } from '../../Context/CartContext';
import './cartitem.css';


const CartItem = ({ id, name, price, quantity }) => {
    const { removeItem } = useCart();
    
    
    const numericPrice = Number(price) || 0; 
    
    const subtotal = numericPrice * quantity;

    return (
        <div className="cart-item">
            <h4 className="item-name">{name}</h4>
            <p className="item-info">Cantidad: {quantity}</p>
            
            <p className="item-info">Precio Unitario: ${numericPrice.toFixed(2)}</p> 
            
            <div className="item-subtotal">
                <p>Subtotal:</p>
                <strong>${subtotal.toFixed(2)}</strong>
            </div>
            
            <button onClick={() => removeItem(id)} className="btn-remove-item">
                ❌ Eliminar
            </button>
        </div>
    );
};

export default CartItem;