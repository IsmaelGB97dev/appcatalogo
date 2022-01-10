import { createContext, useState, useEffect } from "react";
import Data from './Data.js';

export const DataContext = createContext(); 

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([]);

    // Cuando se recarge la pagina usamos el useEffect
    useEffect(() => {
        const producto = Data.items;
        (producto) ? setProductos(producto) : setProductos([]);
    },[])

    const value = {
        productos: [productos]
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    );
}