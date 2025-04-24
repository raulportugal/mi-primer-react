import React, { useContext } from "react";
import { Navbar as BsNavbar, Nav, Container, NavDropdown, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <BsNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BsNavbar.Brand as={Link} to="/">Mi App</BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <NavDropdown title="Archivos" id="archivos-dropdown">
              <NavDropdown.Item as={Link} to="/clientes">Clientes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/productos">Productos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/proveedores">Proveedores</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categorias">Categorías</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Ingresos" id="ingresos-dropdown">
              <NavDropdown.Item as={Link} to="/ingresos/registrar">Registrar Ingreso</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ingresos/historial">Historial de Ingresos</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Salidas" id="salidas-dropdown">
              <NavDropdown.Item as={Link} to="/salidas/registrar">Registrar Salida</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/salidas/historial">Historial de Salidas</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Reportes" id="reportes-dropdown">
              <NavDropdown.Item as={Link} to="/reportes/ventas">Reporte de Ventas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/reportes/ingresos">Reporte de Ingresos</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {user && (
            <Dropdown align="end">
              <Dropdown.Toggle variant="secondary" id="dropdown-user">
                {user.name?.toUpperCase()}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/acercade">Acerca de Mi APP</Dropdown.Item>
                <Dropdown.Item onClick={() => alert("Funcionalidad aún no implementada")}>
                  Cambiar contraseña
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>Cerrar sesión</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
