// src/components/categorias/CategoriaForm.jsx
import React, { useState, useEffect } from "react";

const CategoriaForm = ({ onSave, selectedCategoria, onCancel }) => {
  const [categoria, setCategoria] = useState({
    categoria: ""
  });

  useEffect(() => {
    if (selectedCategoria) {
      setCategoria(selectedCategoria);
    } else {
      setCategoria({ categoria: "" });
    }
  }, [selectedCategoria]);

  const handleChange = (e) => {
    setCategoria({ ...categoria, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(categoria);
    setCategoria({ categoria: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h4>{selectedCategoria ? "Editar Categoría" : "Registrar Categoría"}</h4>

      <div className="mb-2">
        <label className="form-label">Nombre de Categoría</label>
        <input
          type="text"
          className="form-control"
          name="categoria"
          value={categoria.categoria}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary me-2">Guardar</button>
      {selectedCategoria && (
        <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
      )}
    </form>
  );
};

export default CategoriaForm;
