import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { Home } from './componentes/Home';
import { ContainerProductos } from './componentes/ContainerProductos';
 
function App() {
  return (
    <BrowserRouter>
      <ContainerProductos />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
