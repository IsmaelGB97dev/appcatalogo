import { Producto } from './Productos';
import { DataContext } from '../../context/DataProvider';
import { useContext } from 'react';

export const ProductoLista = () => {
    // Usar el contexto con los datos de los productos
    const value = useContext(DataContext);
    const [productos] = value.productos;

    // Gestion del carrito
    // const addCarrito = value.addCarrito;


    document.getElementsByTagName('title')[0].innerHTML = 'Productos';
    return(
        <div className="container pt-5">
            <div className='row justify-content-center py-5'>
                {
                   productos.map(p => (
                       <Producto key={p.id} producto={p} />
                   ))
                }
            </div>
        </div>
    );
}
