// src/components/categorias/CategoriaList.jsx
import React from "react";

const CategoriaList = ({ categorias, onEdit, onDelete }) => {
  return (
    <div>
      <h4>Lista de Categorías</h4>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((cat, index) => (
            <tr key={cat.id_categoria}>
              <td>{index + 1}</td>
              <td>{cat.categoria}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(cat)}>Editar</button>
                <button className="btn btn-sm btn-danger" onClick={() => onDelete(cat.id_categoria)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriaList;
