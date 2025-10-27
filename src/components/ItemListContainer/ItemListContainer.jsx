import React, { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { useParams } from "react-router-dom";
import { getProductos, getProductosByCategoria } from "../../db/data";
import "./itemlistcontainer.css"


function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const { categoriaId } = useParams();

    useEffect(()=>{
        if (categoriaId){
            getProductosByCategoria(categoriaId).then(res => setProductos(res));
        } else {
            getProductos().then(res => setProductos(res));
        }
    }, [categoriaId]);


    return (
        <div className="container">
            {productos.map(prod => (
                <ItemCard key={prod.id} producto={prod} />
            ))}
        </div>
    )
}

export default ItemListContainer;