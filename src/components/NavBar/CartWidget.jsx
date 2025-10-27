import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; // Importar el Context


const CartWidget = () => {
    const { totalQuantity } = useCart(); // Obtener la cantidad total

    return (
        <Link to="/carrito" className="cart-widget">
            <span role="img" aria-label="Carrito de Compras">🛒</span> 
            {/* Renderizado condicional: solo mostrar si hay items */}
            {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
        </Link>
    );
};

export default CartWidget;