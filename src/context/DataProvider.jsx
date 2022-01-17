import { createContext, useState, useEffect } from "react";
import Data from './Data.js';

// Aqui definimos variables y elementos de uso global

export const DataContext = createContext(); 

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([]); // productos
    const [carritoOpen, setCarritoOpen] = useState(false); // Abrir el carrito
    const [carrito, setCarrito] = useState([]); // Carrito de compras
    const [total, setTotal] = useState(0); // Para el total del carrito

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

    // Para usar el localStorage y almacenar datos del carrito
    useEffect(() => {
        const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'));
        if(dataCarrito){
            setCarrito(dataCarrito); 
        }
    },[]);
    // Guardar datos en el LocalStorage cada que se agrege producto al carrito
    useEffect(() => {
        localStorage.setItem('dataCarrito', JSON.stringify(carrito));
    },[carrito]);

    // Calcular el total del carrito
    useEffect(() => {
        const getTotal = () => {
            const res = carrito.reduce((prev, curr) =>  {
                return prev + (curr.price * curr.cantidad);
            }, 0)
            setTotal(Intl.NumberFormat('es-US').format(res));
        }
        getTotal();
    }, [carrito]);

    // Variable para usar elemento de manera global
    const value = {
        productos: [productos],
        carritoOpen: [carritoOpen, setCarritoOpen],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito],
        totalCarrito: [total, setTotal]
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    );
}