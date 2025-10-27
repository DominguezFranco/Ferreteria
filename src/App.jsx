import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importaciones de Context y Componentes
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

// **Componentes que debes importar y crear (si no existen)**
import Cart from './components/Cart/Cart'; 
import Checkout from './components/Checkout/Checkout';

import './App.css'; // O el nombre de tu archivo CSS

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          {/* 1. Ruta de Inicio (Catálogo Completo) */}
          <Route path="/" element={<ItemListContainer />} />
          
          {/* 2. Ruta de Categorías (Catálogo Filtrado) */}
          {/* :categoryId es el parámetro dinámico que usas en ItemListContainer */}
          <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
          
          {/* 3. Ruta de Detalle de Producto */}
          {/* Es convención usar /item/:id o /detalle/:id. Reemplacé "descripcion" por "item" o "detalle". */}
          <Route path="/detalle/:productId" element={<ItemDetailContainer />} />
          
          {/* 4. Ruta del Carrito (Cart) */}
          <Route path="/carrito" element={<Cart />} />
          
          {/* 5. Ruta del Checkout (Generación de la Orden) */}
          <Route path="/checkout" element={<Checkout />} />

          {/* 6. Ruta de Error (404) */}
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
