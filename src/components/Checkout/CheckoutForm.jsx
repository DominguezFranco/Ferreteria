import React, { useState } from 'react';
import './checkoutform.css';

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !phone || !email) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const userData = {
            name,
            phone,
            email
        };

        onConfirm(userData);
    };

    return (
        <form onSubmit={handleSubmit} className="checkout-form">
            <div>
                <label htmlFor="name">Nombre Completo:</label>
                <input 
                    type="text" 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="phone">Teléfono:</label>
                <input 
                    type="tel" 
                    id="phone" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
            </div>
            
            <button type="submit" className="btn-confirm">Confirmar Compra</button>
        </form>
    );
};

export default CheckoutForm;