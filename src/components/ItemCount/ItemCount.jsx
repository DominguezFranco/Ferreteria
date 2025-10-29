import React, {useState} from "react";
import "./itemcount.css"

const ItemCount = ({stock, initial = 1, onAdd}) =>{
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return(
        <div>
            <div>
                <button className="btn-input" onClick={decrement} disabled={count === 1}>-</button>
                <input className="input" type="number" readOnly value={count} />
                <button className="btn-input" onClick={increment} disabled={count === stock}>+</button>
            </div>
            {stock > 0 ? (
                <button className="btn-add-to-cart" onClick={()=> onAdd(count)}
                disabled={stock === 0}
                >
                    Agregar al carrito
                </button>
            ) : (
                <p>Sin stock</p>
            )}
        </div>
    );
};

export default ItemCount