import React, {useContext, useState} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavbarText
} from "reactstrap";
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider'; // Abrir modal carrito


export const Header = () => {
    // Para abrir el collapse en md
    const [abrir, setAbrir] = useState(false);
    const toggle = () => setAbrir(!abrir);

    // Abrir el modal de carrito
    const value = useContext(DataContext); 
    const [carritoOpen, setCarritoOpen] = value.carritoOpen;
    const toggleCarrito = () => setCarritoOpen(!carritoOpen);

    // Mostrar cantidad de productos en carrito
    const [carrito] = value.carrito;

    return(
        <div>
            <Navbar
                color="light"
                expand="md"
                light
                fixed="top"
            >
                <Link className="navbar-brand ms-5" to="/">
                    <img src={'/images/logo.png'} alt="logo tienda" className="img-fluid" width={70} height={70} />
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={abrir} navbar>
                    <Nav
                        className="mx-auto"
                        navbar
                    >
                        <NavItem>
                            <Link to="/" className="nav-link fw-bold">
                                INICIO
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/productos" className="nav-link fw-bold">
                                PRODUCTOS
                            </Link>
                        </NavItem>    
                    </Nav>        
                    <NavbarText className="pe-4 header-cart-icon" onClick={toggleCarrito}>
                        <box-icon name='cart-alt'></box-icon>
                        <span className="cant">{carrito.length}</span>
                    </NavbarText>  
                </Collapse>
            </Navbar>
        </div>
    );
}