import React from 'react';
import './App.css';
import { Header } from './componentes/header/Index';
import { BrowserRouter as Router } from 'react-router-dom';
import { Paginas } from './componentes/Paginas';
import { DataProvider } from './context/DataProvider'; // Importamos para usar los datos del DataProvider
import { Carrito } from './componentes/carrito/Carrito';

// Json Dev

function App() {
  return (
    <DataProvider>
    <Router>
        <Header />
        <Paginas />
        <Carrito />
      </Router>
    </DataProvider>
  );
}

export default App;
