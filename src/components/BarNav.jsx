import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { IconCart } from './IconCart';



export function BarNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>

        <Link className='navbar-brand' to={"/"} href="#home" >Gourmet</Link>

        <IconCart />

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Link to="/products" className="noUnderline">
              <Nav.Link href="#link">Comida</Nav.Link>
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

