import React from "react";
import { Link } from "react-router-dom";
import "./itemcard.css";

function ItemCard({ producto }) {

    return (
        <div className="item-card">
            <img src={producto.imagen} alt={producto.nombre} className="item-image"/>
            <h3>{producto.nombre}</h3>
            <p>${producto.precio}</p>
            <Link className = "ver-detalle" to={`/descripcion/${producto.id}`}>Ver detalle</Link>
        </div>
    );
}

export default ItemCard;