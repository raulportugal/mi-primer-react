// src/components/productos/ProductoForm.jsx
import React, { useState, useEffect } from "react";

const ProductoForm = ({ onSave, selectedProducto, onCancel }) => {
  const [producto, setProducto] = useState({
    descripcion: "",
    precio: "",
    stock: "",
    categoria: "",
    proveedor: ""
  });

  useEffect(() => {
    if (selectedProducto) {
      setProducto(selectedProducto);
    } else {
      setProducto({ descripcion: "", precio: "", stock: "", categoria: "", proveedor: "" });
    }
  }, [selectedProducto]);

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(producto);
    setProducto({ descripcion: "", precio: "", stock: "", categoria: "", proveedor: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h4>{selectedProducto ? "Editar Producto" : "Registrar Producto"}</h4>

      <div className="mb-2">
        <label className="form-label">Descripción</label>
        <input type="text" className="form-control" name="descripcion" value={producto.descripcion} onChange={handleChange} required />
      </div>

      <div className="mb-2">
        <label className="form-label">Precio</label>
        <input type="number" step="0.01" className="form-control" name="precio" value={producto.precio} onChange={handleChange} required />
      </div>

      <div className="mb-2">
        <label className="form-label">Stock</label>
        <input type="number" className="form-control" name="stock" value={producto.stock} onChange={handleChange} required />
      </div>

      <div className="mb-2">
        <label className="form-label">Categoría</label>
        <input type="text" className="form-control" name="categoria" value={producto.categoria} onChange={handleChange} />
      </div>

      <div className="mb-2">
        <label className="form-label">Proveedor</label>
        <input type="text" className="form-control" name="proveedor" value={producto.proveedor} onChange={handleChange} />
      </div>

      <button type="submit" className="btn btn-primary me-2">Guardar</button>
      {selectedProducto && (
        <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
      )}
    </form>
  );
};

export default ProductoForm;
