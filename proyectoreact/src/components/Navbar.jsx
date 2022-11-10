import { Container, Nav, Navbar } from 'react-bootstrap';

import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const NavBar = ({ greeting }) => {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container fluid >
                    <Navbar.Brand>
                        <NavLink to={`/`} className="text-decoration-none text-light">
                            { greeting }
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link>
                                <NavLink to={`/category/camisetas`} className="text-decoration-none text-light">
                                    Camisetas
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to={`/category/pantalones`} className="text-decoration-none text-light">
                                    Pantalones
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to={`/category/botines`} className="text-decoration-none text-light">
                                    Botines
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to={`/category/pelotas`} className="text-decoration-none text-light">
                                    Pelotas
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to={"/contacto"} className="text-decoration-none text-light">
                                    Contacto
                                </NavLink>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav className="text-decoration-none text-light">
                        <CartWidget />
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;