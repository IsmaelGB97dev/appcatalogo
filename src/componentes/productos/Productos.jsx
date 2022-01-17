import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { Link } from "react-router-dom";


export const Producto = ({producto}) => {

    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;


    return(
        <div className="col-9 col-sm-6 col-lg-4 py-3">
            <div className="row justify-content-center">
                <div className="col-11 text-center shadow p-3">
                    <div className='row'>
                        <div className='col-12 pb-2'>
                            <Link to={`/productos/${producto.id}`}>
                                <img src={producto.image} alt={producto.title} className="img-fluid" width={200} height={200} />
                            </Link>
                            <h5 className='m-0 titulo-producto'>{producto.title}</h5>
                            <p className='text-muted m-0'>{producto.category}</p>
                            <h4 className='m-0'>$ {producto.price}</h4>
                        </div>
                        <div className='col-12 col-lg-8 mb-1'>
                            <button onClick={()=>addCarrito(producto.id)} className='btn btn-primary w-100'>Agregar al carrito</button>
                        </div>
                        <div className='col-12 col-lg-4'>
                            <Link to={`/productos/${producto.id}`} className='btn btn-success w-100'>Ver</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}