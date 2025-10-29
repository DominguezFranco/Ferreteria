import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


import Cart from './components/Cart/Cart'; 
import Checkout from './components/Checkout/Checkout';

import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          
          <Route path="/" element={<ItemListContainer />} />
          
         
          <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
          
           
          <Route path="/detalle/:productId" element={<ItemDetailContainer />} />
          
          
          <Route path="/carrito" element={<Cart />} />
          
          
          <Route path="/checkout" element={<Checkout />} />

          
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
