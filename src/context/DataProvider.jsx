import { createContext, useState, useEffect } from "react";
import Data from './Data.js';

// Aqui definimos variables y elementos de uso global

export const DataContext = createContext(); 

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([]); // productos
    const [carritoOpen, setCarritoOpen] = useState(false); // Abrir el carrito
    const [carrito, setCarrito] = useState([]); // Carrito de compras

    // Cuando se recarge la pagina usamos el useEffect
    useEffect(() => {
        const producto = Data.items;
        (producto) ? setProductos(producto) : setProductos([]);
    },[])

    // Agregar al carrito, validamos que el id no exista para agregar nuevo item
    const addCarrito = (id) => {
        const check = carrito.every(item => {
            return item.id !== id;
        })
        if(check) {
            const data = productos.filter(producto => {
                return producto.id === id;
            })
            setCarrito([...carrito, ...data])
        } else {
            alert('Producto ya fue agregado al carrito.');
        }
    };

    // Variable para usar elemento de manera global
    const value = {
        productos: [productos],
        carritoOpen: [carritoOpen, setCarritoOpen],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito] 
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    );
}