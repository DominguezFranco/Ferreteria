import React, {createContext, useState, useContext, useMemo} from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const addItem = (item, quantity) =>{
        if (isInCart(item.id)){
            setCart (prevCart =>
                prevCart.map(prod =>
                    prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
                )
            );
        } else {
            setCart (prevCart => [...prevCart, {...item, quantity}]);}
    };

    const removeItem = (id) => {
        setCart (prevCart => prevCart.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalItems = useMemo(() => cart.length, [cart]);

    const totalQuantity = useMemo(() => {
        return cart.reduce ((acc, item) => acc + item.quantity, 0);
    }, [cart]);
    

    const totalPrice = useMemo(() => {
        return cart.reduce ((acc, item) => acc + item.quantity * item.precio, 0);
    }, [cart]);

    const contextValue = {
        cart,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        totalItems,
        totalQuantity,
        totalPrice
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );

}









