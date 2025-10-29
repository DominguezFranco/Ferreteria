import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductById } from '../../db/firestore';
import { useCart } from '../../context/CartContext';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { productId } = useParams(); 

    const { addItem, isInCart } = useCart();

    useEffect(() => {
        setLoading(true);
        setProduct(null);
        
        getProductById(productId)
            .then(data => {
                setProduct(data);
            })
            .catch(error => {
                console.error("Error al cargar el detalle:", error);
                setProduct(null);
            })
            .finally(() => {
                setLoading(false);
            });
            
    }, [productId]);

    
    const handleOnAdd = (quantity) => {
        
        
        const itemToAdd = {
            id: product.id,
            name: product.nombre,   
            price: product.precio, 
            stock: product.stock,
            imagen: product.imagen
        };

        addItem(itemToAdd, quantity);
    };

    if (loading) {
        return <p className="loading-message">Cargando producto...</p>;
    }

    if (!product) {
        return <p>Producto no encontrado o no existe.</p>;
    }

    return (
        <ItemDetail 
            product={product} 
            onAdd={handleOnAdd} 
            isInCart={isInCart(product.id)}
        />
    );
};

export default ItemDetailContainer;