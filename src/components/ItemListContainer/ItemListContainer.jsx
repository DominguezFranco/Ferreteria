import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../db/firestore';
import ItemList from '../ItemList/ItemList';
import './itemlistcontainer.css';

const ItemListContainer = ({ greeting = "Catálogo de Productos" }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        setProducts([]); 

        
        getProducts(categoryId)
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error("Error al cargar los productos:", error);
                
            })
            .finally(() => {
                setLoading(false);
            });
            
    }, [categoryId]); 

    return (
        <div className="item-list-container">
            <h1>{categoryId ? categoryId.toUpperCase() : greeting}</h1>
            
           
            {loading ? (
                <p className="loading-message">Cargando productos...</p>
            ) : (
                
                products.length === 0 ? (
                    <p>No hay productos disponibles en esta categoría.</p>
                ) : (
                    
                    <ItemList products={products} />
                )
            )}
        </div>
    );
};

export default ItemListContainer;