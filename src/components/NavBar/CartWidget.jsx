import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; 


const CartWidget = () => {
    const { totalQuantity } = useCart();

    return (
        <Link to="/carrito" className="cart-widget">
            <span role="img" aria-label="Carrito de Compras">🛒</span> 
            
            {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
        </Link>
    );
};

export default CartWidget;