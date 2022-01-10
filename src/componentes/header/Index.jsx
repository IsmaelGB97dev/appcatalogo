import react from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavbarText
} from "reactstrap";
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

export const Header = () => {
    // Para abrir el collapse en md
    const [abrir, setAbrir] = react.useState(false);
    const toggle = () => setAbrir(!abrir);

    return(
        <div>
            <Navbar
                color="light"
                expand="md"
                light
            >
                <Link className="navbar-brand ms-5" to="/">
                    <img src={logo} alt="logo tienda" className="img-fluid" width={70} height={70} />
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
                    <NavbarText className="pe-4 header-cart-icon">
                        <box-icon name='cart-alt'></box-icon>
                        <span className="cant">3</span>
                    </NavbarText>  
                </Collapse>
            </Navbar>
        </div>
    );
}