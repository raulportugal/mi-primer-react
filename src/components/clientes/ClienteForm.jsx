// src/components/clientes/ClienteForm.jsx
import React, { useState, useEffect } from "react";

const ClienteForm = ({ onSave, selectedCliente, onCancel }) => {
  const [cliente, setCliente] = useState({
    nombre: "",
    dni: "",
    direccion: "",
    telefono: ""
  });

  useEffect(() => {
    if (selectedCliente) {
      setCliente(selectedCliente);
    } else {
      setCliente({ nombre: "", dni: "", direccion: "", telefono: "" });
    }
  }, [selectedCliente]);

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(cliente);
    setCliente({ nombre: "", dni: "", direccion: "", telefono: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h4>{selectedCliente ? "Editar Cliente" : "Registrar Cliente"}</h4>

      <div className="mb-2">
        <label className="form-label">Nombre</label>
        <input type="text" className="form-control" name="nombre" value={cliente.nombre} onChange={handleChange} required />
      </div>

      <div className="mb-2">
        <label className="form-label">DNI</label>
        <input type="text" className="form-control" name="dni" value={cliente.dni} onChange={handleChange} required />
      </div>

      <div className="mb-2">
        <label className="form-label">Dirección</label>
        <input type="text" className="form-control" name="direccion" value={cliente.direccion} onChange={handleChange} />
      </div>

      <div className="mb-2">
        <label className="form-label">Teléfono</label>
        <input type="text" className="form-control" name="telefono" value={cliente.telefono} onChange={handleChange} />
      </div>

      <button type="submit" className="btn btn-primary me-2">Guardar</button>
      {selectedCliente && (
        <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
      )}
    </form>
  );
};

export default ClienteForm;
