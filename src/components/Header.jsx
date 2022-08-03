import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="generar-cotizacion">Generar Factura</Nav.Link>
              <NavDropdown title="Mantenedores" id="basic-nav-dropdown">
                <NavDropdown.Item href="productos">Productos</NavDropdown.Item>
                <NavDropdown.Item href="categorias">Categorías</NavDropdown.Item>
                <NavDropdown.Item href="personas">Personas</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header