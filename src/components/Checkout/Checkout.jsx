import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { createOrder } from '../../db/firestore';
import CheckoutForm from './CheckoutForm'; // Crear este componente para el formulario

const Checkout = () => {
    const { cart, totalPrice, clearCart } = useCart();
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [error, setError] = useState(null);

    // Si el carrito está vacío, no se puede avanzar al checkout
    if (cart.length === 0 && !orderId) {
        return (
            <div className="checkout-container">
                <h2>Carrito Vacío</h2>
                <p>No tienes productos en tu carrito para realizar una compra.</p>
                {/* Puedes agregar un Link para volver al catálogo */}
            </div>
        );
    }

    const handleConfirmOrder = async (userData) => {
        setLoading(true);
        setError(null);

        try {
            // 1. Preparar la data de la orden
            const order = {
                buyer: userData,
                items: cart.map(item => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity
                })),
                total: totalPrice,
                status: 'generated',
            };

            // 2. Items para actualizar stock
            const itemsToUpdateStock = cart.map(item => ({
                id: item.id,
                quantity: item.quantity
            }));

            // 3. Crear la orden y actualizar stock via servicio de Firestore
            const id = await createOrder(order, itemsToUpdateStock);
            
            setOrderId(id);
            clearCart(); // Vaciar el carrito tras el éxito

        } catch (err) {
            console.error("Error al generar la orden:", err);
            setError(err.message || "Ocurrió un error al procesar tu compra.");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Generando orden de compra...</p>; // Loader
    }

    if (orderId) {
        return (
            <div className="checkout-success">
                <h2>¡Compra Exitosa!</h2>
                <p>Tu orden ha sido generada con éxito.</p>
                <p>El identificador de tu orden es: <strong>{orderId}</strong></p>
                {/* Opcional: Link para volver al inicio */}
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h2>Finalizar Compra</h2>
            {error && <p className="error-message">Error: {error}</p>}
            <CheckoutForm onConfirm={handleConfirmOrder} />
        </div>
    );
};

export default Checkout;