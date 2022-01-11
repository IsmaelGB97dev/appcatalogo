import {useContext} from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { CarritoItem } from './CarritoItem';
import { DataContext } from '../../context/DataProvider'; // Abrir carrito

export const Carrito = () => {
    // Abrir el modal del carrito 
    const value = useContext(DataContext);
    const [carritoOpen, setCarritoOpen] = value.carritoOpen;
    const toggleCarrito = () => setCarritoOpen(!carritoOpen);
   
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
                        <>
                            <CarritoItem />
                            <CarritoItem />
                            <CarritoItem />
                        </>
                    </div>
                </ModalBody>
                <ModalFooter className='justify-content-start align-items-start flex-column'>
                    <h4>Total: $ {"2,000"}</h4>
                    <Button
                        className='btn-sm'
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