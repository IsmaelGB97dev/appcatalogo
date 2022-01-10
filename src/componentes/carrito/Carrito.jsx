import {useState} from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { CarritoItem } from './CarritoItem';

export const Carrito = () => {
    // Abrir el modal
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
   
    return(
        <div>
            <Button
                color="danger"
                onClick={toggle}
            >
                Click Me
            </Button>
            <Modal
                centered
                scrollable
                size="md"
                toggle={toggle}
                isOpen={modal}
            >
                <ModalHeader toggle={toggle}>
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