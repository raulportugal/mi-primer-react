import React from "react";
import { Table, Button } from "react-bootstrap";

const PersonaList = ({ personas, seleccionar, eliminar }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {personas.map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.nombre}</td>
            <td>{p.edad} años</td>
            <td>
              <Button variant="warning" onClick={() => seleccionar(p)}>Editar</Button>{" "}
              <Button variant="danger" onClick={() => eliminar(p.id)}>Eliminar</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PersonaList;
