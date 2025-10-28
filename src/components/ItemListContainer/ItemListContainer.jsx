import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Importación CORREGIDA de la lógica de Firebase/Firestore
import { getProducts } from '../../db/firestore';

import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting = "Catálogo de Productos" }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // Obtener el parámetro de la URL (para la ruta /categoria/:categoryId)
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        setProducts([]); // Limpiar la lista al cambiar de categoría

        // Llama a la función de fetching, pasando categoryId (será undefined si no está en la URL)
        getProducts(categoryId)
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error("Error al cargar los productos:", error);
                // Aquí podrías manejar un estado de error
            })
            .finally(() => {
                setLoading(false);
            });
            
    }, [categoryId]); // Se ejecuta cada vez que cambia la categoría

    return (
        <div className="item-list-container">
            <h1>{categoryId ? categoryId.toUpperCase() : greeting}</h1>
            
            {/* Renderizado Condicional: Loader (Requisito de Entrega) */}
            {loading ? (
                <p className="loading-message">Cargando productos...</p>
            ) : (
                // Renderizado Condicional: Lista Vacía
                products.length === 0 ? (
                    <p>No hay productos disponibles en esta categoría.</p>
                ) : (
                    // Componente de Presentación ItemList
                    <ItemList products={products} />
                )
            )}
        </div>
    );
};

export default ItemListContainer;