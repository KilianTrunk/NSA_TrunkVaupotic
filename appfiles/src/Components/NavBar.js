import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SignIn from '../Screens/SignInScreen';
import Registration from '../Screens/RegistrationScreen';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" style={{position: "absolute", width: "100vw"}}>
            <Container>
                <Navbar.Brand href="/">RoKilianCars</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/iskanje">Iskanje osebnih vozil</Nav.Link>
                    <Nav.Link href="/iskanje">Objava oglasa</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a href="/prijava">Prijava</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}