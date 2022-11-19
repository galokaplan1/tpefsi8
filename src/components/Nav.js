import logo from '../images/Logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={logo} alt="logo"  style={{width:"80px", height:"100px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Productos</Link>
            <Link to="/contact" className="nav-link">Contacto</Link>
            <Link to="/nosotros" className="nav-link">Nosotros</Link>
            <Link to="/carrito" className="nav-link">Carrito</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;
