import {useContext} from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { CarritoItem } from './CarritoItem';
import { DataContext } from '../../context/DataProvider'; // Abrir carrito

export const Carrito = () => {
    // Abrir el modal del carrito 
    const value = useContext(DataContext);
    const [carritoOpen, setCarritoOpen] = value.carritoOpen;
    const toggleCarrito = () => setCarritoOpen(!carritoOpen);

    // Mostrar productos seleccionado en el carrito
    const [dataCarrito, setDataCarrito] = value.carrito; 

    // Eliminar item del carrito
    const removeItemProducto = (id) => {
        if(window.confirm('¿Estás seguro de eliminar el producto del carrito?')) {
            dataCarrito.forEach((item, index)=> {
                if(item.id === id) {
                    item.cantidad = 1;
                    dataCarrito.splice(index, 1);
                }
            })
            setDataCarrito([...dataCarrito]);
        }
    };

    // Sumar items del carrito al click en flecha arriba
    const sumarItemsProducto = (id) => {
        dataCarrito.forEach((item) => {
            if(item.id === id) {
                item.cantidad++;
            }
        })
        setDataCarrito([...dataCarrito]);
    };

    // Restar items del carrito al click en flecha abajo
    const restarItemsProducto = (id) => {
        dataCarrito.forEach((item) => {
            if(item.id === id && item.cantidad > 0) {
                item.cantidad--;
                if(item.cantidad == 0) {
                    removeItemProducto(id);
                    item.cantidad = 1;
                }
            }
        })
        setDataCarrito([...dataCarrito]);
    }

    // Obtener la suma total del carrito
    const [total] = value.totalCarrito;

    return(
        <div>
            <Modal
                centered
                scrollable
                size="md"
                toggle={toggleCarrito}
                isOpen={carritoOpen}
            >
                <ModalHeader toggle={toggleCarrito}>
                    Carrito
                </ModalHeader>
                <ModalBody>
                    <div className='container-fluid'>
                        {
                            (dataCarrito.length===0) ? 
                                <h5 className="text-center text-danger">Carrito vacio</h5>
                            : 
                                dataCarrito.map((producto)=>{
                                    return(<CarritoItem 
                                                key={producto.id} 
                                                item={producto} 
                                                remove={removeItemProducto} 
                                                sumar={sumarItemsProducto}
                                                restar={restarItemsProducto}
                                            />)
                                })
                        }
                    </div>
                </ModalBody>
                <ModalFooter className='justify-content-center align-items-center flex-column'>
                    <h4>Total: $ {(total == 0) ? '0.00' : total}</h4>
                    <Button
                        className='btn-sm mt-2'
                        color="danger"
                        onClick={function noRefCheck(){}}
                    >
                        Finalizar compra
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}