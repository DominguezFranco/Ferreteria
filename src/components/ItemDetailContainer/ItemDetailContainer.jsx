import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import { getProductoById } from "../../Data/data";
import "./itemdetailcontainer.css"  


function ItemDetailContainer() {
    const {descripcionId} = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        getProductoById(descripcionId).then(res => setProducto(res));
    }, [descripcionId]);

    if (!producto) {
        return <h1>Cargando...</h1>;
    } else {
        return (
            <div className="item-detail-container">
                <img src={producto.imagen} alt={producto.nombre} className="item-image" />
                <h3>{producto.nombre}</h3>
                <p>${producto.precio}</p>
                <p>{producto.descripcion}</p>
            </div>
        );
    }
}

export default ItemDetailContainer;