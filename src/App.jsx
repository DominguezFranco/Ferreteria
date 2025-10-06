import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import "./App.css"

function App() {

  return (
    <>
      

      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
          <Route path="/descripcion/:descripcionId" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<h1>404</h1>}/>
        </Routes>  
      </BrowserRouter>
    </>
  )
}

export default App
