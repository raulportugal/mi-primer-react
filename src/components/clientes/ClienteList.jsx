// src/components/clientes/ClienteList.jsx
import React from "react";

const ClienteList = ({ clientes, onEdit, onDelete }) => {
  return (
    <div>
      <h4>Lista de Clientes</h4>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>DNI</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cli, index) => (
            <tr key={cli.id}>
              <td>{index + 1}</td>
              <td>{cli.nombre}</td>
              <td>{cli.dni}</td>
              <td>{cli.direccion}</td>
              <td>{cli.telefono}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(cli)}>Editar</button>
                <button className="btn btn-sm btn-danger" onClick={() => onDelete(cli.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClienteList;
