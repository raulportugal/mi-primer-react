// src/components/productos/ProductoList.jsx
import React from "react";

const ProductoList = ({ productos, onEdit, onDelete }) => {
  return (
    <div>
      <h4>Lista de Productos</h4>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Categoría</th>
            <th>Proveedor</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((prod, index) => (
            <tr key={prod.id}>
              <td>{index + 1}</td>
              <td>{prod.descripcion}</td>
              <td>S/ {parseFloat(prod.precio).toFixed(2)}</td>
              <td>{prod.stock}</td>
              <td>{prod.categoria}</td>
              <td>{prod.proveedor}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(prod)}>Editar</button>
                <button className="btn btn-sm btn-danger" onClick={() => onDelete(prod.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductoList;
