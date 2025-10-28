import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; 
import CartItem from './CartItem'; // Importa el componente de item

const Cart = () => {
    const { cart, clearCart, totalPrice, totalQuantity } = useCart();

    if (cart.length === 0) {
        return (
            <div className="cart-empty-message">
                <h2>🛒 Carrito Vacío</h2>
                <p>No tienes productos en tu carrito. ¡Vamos de compras!</p>
                <Link to="/" className="btn-go-to-shop">
                    Ver Catálogo
                </Link>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h1>Tu Carrito de Compras ({totalQuantity} unidades)</h1>
            
            <button onClick={clearCart} className="btn-clear-cart">
                Vaciar Carrito
            </button>
            
            <div className="cart-items-list">
                {cart.map(item => (
                    <CartItem 
                        key={item.id} 
                        id={item.id}
                        name={item.name} 
                        price={item.price} 
                        quantity={item.quantity} 
                    />
                ))}
            </div>

            <div className="cart-summary">
                <h3>Total a Pagar: <strong>${totalPrice.toFixed(2)}</strong></h3>
                
                <Link to="/checkout" className="btn-finalize-purchase">
                    Proceder al Checkout
                </Link>
            </div>
        </div>
    );
};

export default Cart;