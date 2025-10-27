import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem'; // Necesitas crear este subcomponente

const Cart = () => {
    const { cart, totalPrice, clearCart } = useCart();

    // Renderizado Condicional: Carrito Vacío
    if (cart.length === 0) {
        return (
            <div className="cart-empty-container">
                <h2>Tu Carrito está Vacío 🛒</h2>
                <p>Parece que aún no has agregado productos.</p>
                <Link to="/" className="btn-go-to-shop">
                    Ver Catálogo
                </Link>
            </div>
        );
    }

    // Carrito con Productos
    return (
        <div className="cart-container">
            <h1>Tu Carrito de Compras</h1>

            <div className="cart-items-list">
                {cart.map(item => (
                    // Mapeamos y renderizamos cada item usando el subcomponente CartItem
                    <CartItem key={item.id} item={item} />
                ))}
            </div>

            <div className="cart-summary">
                <p className="cart-total-price">Total Final: <strong>${totalPrice.toFixed(2)}</strong></p>
                
                <div className="cart-actions">
                    <button onClick={clearCart} className="btn-clear-cart">
                        Vaciar Carrito
                    </button>
                    
                    {/* Botón para navegar al proceso de pago */}
                    <Link to="/checkout" className="btn-checkout">
                        Proceder al Pago
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;