// src/components/proveedores/ProveedorForm.jsx
import React, { useState, useEffect } from "react";

const ProveedorForm = ({ onSave, selectedProveedor, onCancel }) => {
  const [proveedor, setProveedor] = useState({
    nombre: "",
    direccion: "",
    telefono: ""
  });

  useEffect(() => {
    if (selectedProveedor) {
      setProveedor(selectedProveedor);
    } else {
      setProveedor({ nombre: "", direccion: "", telefono: "" });
    }
  }, [selectedProveedor]);

  const handleChange = (e) => {
    setProveedor({ ...proveedor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(proveedor);
    setProveedor({ nombre: "", direccion: "", telefono: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h4>{selectedProveedor ? "Editar Proveedor" : "Registrar Proveedor"}</h4>

      <div className="mb-2">
        <label className="form-label">Nombre</label>
        <input type="text" className="form-control" name="nombre" value={proveedor.nombre} onChange={handleChange} required />
      </div>

      <div className="mb-2">
        <label className="form-label">Dirección</label>
        <input type="text" className="form-control" name="direccion" value={proveedor.direccion} onChange={handleChange} />
      </div>

      <div className="mb-2">
        <label className="form-label">Teléfono</label>
        <input type="text" className="form-control" name="telefono" value={proveedor.telefono} onChange={handleChange} />
      </div>

      <button type="submit" className="btn btn-primary me-2">Guardar</button>
      {selectedProveedor && (
        <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
      )}
    </form>
  );
};

export default ProveedorForm;
