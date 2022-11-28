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
        <Router>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to={SignIn}><Nav.Link>Vpiši me</Nav.Link></Link>
                            <Link to={Registration}><Nav.Link>Registriraj me</Nav.Link></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
}