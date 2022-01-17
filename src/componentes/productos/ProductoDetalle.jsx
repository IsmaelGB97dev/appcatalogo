import { DataContext } from '../../context/DataProvider';
import { useParams } from 'react-router-dom'; // Para obtener el parametro de la URL (id del producto)
import { useContext, useState, useEffect } from 'react';

export const ProductoDetalle = () => {
    const value = useContext(DataContext);
    const [productos] = value.productos; // Lista de los productos
    const parametro = useParams();  // Usar parametros de la URL
    const [detalleProducto, setDetalleProducto] = useState([]); // Arreglo con datos del producto
    const [urlImages, setUrlImages] = useState(1);
    const [imagenes360, setImagenes360] = useState('');

    // Obtener los datos del producto en especifico
    useEffect(() => {
        productos.forEach(producto => {
            if(producto.id === parseInt(parametro.id)) {
                setDetalleProducto(producto);
                setUrlImages(0);
            }
        });
    }, [parametro.id, productos]);
    
    // Manejo del efecto 360 (input range)
    const manejador360 = (e) => {
        const numero = e.target.value;
        setUrlImages(numero);
    };

    // Cambiar las imagenes para efecto 360
    useEffect(() => {
        const valores = `${detalleProducto.img1}${urlImages}.webp`;
        setImagenes360(valores);
    }, [urlImages, parametro.id]);

    // https://stockx.com/nike-ld-waffle-sacai-black-nylon

    return(
        <div className='container py-5'>
            <div className="row py-5">
                <div className='col-12 pt-3 text-center text-primary py-3'>
                    <h2>{detalleProducto.title}</h2>
                </div>
                <div className="col-10 col-md-4 col-lg-4 mx-auto mx-md-0 text-center text-md-start py-2 py-md-0 my-md-auto my-lg-0">
                    <h3 className='text-success'>$ {Intl.NumberFormat('es-US').format(detalleProducto.price)}</h3>
                    <div className="input-group mb-3">
                        <span className="input-group-text me-3 bg-secondary rounded text-white">Nuevo</span>
                        <select name="talla" id="talla" className="form-select">
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="6">6</option>
                            <option value="8">8</option>
                            <option value="10">10</option>
                        </select>
                        <span className="input-group-text bg-danger text-white" aria-describedby='talla' >
                            <label htmlFor="talla">Talla</label>
                        </span>
                    </div>
                    <button className='btn btn-primary mt-2' type='button'>Añadir al carrito</button>
                    <div className='mt-3 d-none d-lg-block'>
                        <hr />
                        <h5>Descripcion</h5>
                        <p className="text-muted">{detalleProducto.description}</p>
                    </div>
                </div>
                <div className='col-11 col-md-8 col-lg-6 mx-auto'>
                    <img src={(urlImages == 0 ? detalleProducto.image : imagenes360)} alt={detalleProducto.title} className='img-fluid border' width="100%" />
                    <input type="range"  className="mt-3 w-75 mx-auto d-block" min={1} max={36} onChange={manejador360} value={urlImages} />
                </div>
                <div className='col-11 mx-auto mt-4 p-2 text-center text-md-start d-block d-lg-none'>
                    <h5>Descripcion</h5>
                    <p className="text-muted">{detalleProducto.description}</p>
                </div>
            </div>
        </div>
    );
}

