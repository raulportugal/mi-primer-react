// src/components/proveedores/ProveedorList.jsx
import React from "react";

const ProveedorList = ({ proveedores, onEdit, onDelete }) => {
  return (
    <div>
      <h4>Lista de Proveedores</h4>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {proveedores.map((prov, index) => (
            <tr key={prov.id}>
              <td>{index + 1}</td>
              <td>{prov.nombre}</td>
              <td>{prov.direccion}</td>
              <td>{prov.telefono}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(prov)}>Editar</button>
                <button className="btn btn-sm btn-danger" onClick={() => onDelete(prov.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProveedorList;
