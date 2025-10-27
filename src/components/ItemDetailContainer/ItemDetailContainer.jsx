import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProductById } from 'firebase/firestore'; // Importar el servicio
import { useCart } from '../context/CartContext'; // Importar el Context

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();

    const { addItem, isInCart } = useCart(); // Obtener funciones del carrito

    useEffect(() => {
        setLoading(true);
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
        // Función que se pasa al ItemCount y llama a addItem del Context
        addItem(product, quantity);
    };

    if (loading) {
        return <p>Cargando producto...</p>; // Loader
    }

    if (!product) {
        return <p>Producto no encontrado.</p>; // Mensaje condicional
    }

    return (
        <ItemDetail 
            product={product} 
            onAdd={handleOnAdd} 
            isInCart={isInCart(product.id)} // Pasar si ya está en carrito
        />
    );
};

export default ItemDetailContainer;