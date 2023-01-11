import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPen } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" style={{position: "absolute", width: "100vw"}}>
            <Container>
                <Navbar.Brand href="/">RoKilianCars</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#">Iskanje osebnih vozil</Nav.Link>
                    <Nav.Link href="#">Objava oglasa</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a href="/prijava" className='navbar-end-txt'> <FontAwesomeIcon icon={faUser} className="navbar-ikona" />Prijava</a>
                        <a href="/registracija" className='navbar-end-txt'> <FontAwesomeIcon icon={faUserPen} className="navbar-ikona" />Registracija</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}