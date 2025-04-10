import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const AppNavbar = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const nombre = sessionStorage.getItem("nombre");

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("nombre");
    navigate("/login");
  };

  if (!token) return null;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Mi App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/personas">Personas</Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text className="me-3">
              Bienvenido, <strong>{nombre}</strong>
            </Navbar.Text>
            <Button variant="outline-light" onClick={handleLogout}>Cerrar sesión</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;

