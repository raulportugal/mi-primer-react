// src/components/PersonaList.js
import React from "react";

const PersonaList = ({ personas, seleccionar, eliminar }) => {
  return (
    <div className="card p-3">
      <h4 className="text-center">Personas Registradas</h4>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {personas.map((persona) => (
            <tr key={persona.id}>
              <td>{persona.id}</td>
              <td>{persona.nombre}</td>
              <td>{persona.edad} años</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => seleccionar(persona)}>✏ Editar</button>
                <button className="btn btn-danger btn-sm" onClick={() => eliminar(persona.id)}>🗑 Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonaList;
