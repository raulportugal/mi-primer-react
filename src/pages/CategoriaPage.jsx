// src/pages/CategoriaPage.jsx
import React, { useEffect, useState } from "react";
import CategoriaForm from "../components/categorias/CategoriaForm";
import CategoriaList from "../components/categorias/CategoriaList";
import axios from "axios";

const CategoriaPage = () => {
  const [categorias, setCategorias] = useState([]);
  const [selectedCategoria, setSelectedCategoria] = useState(null);

  const API = "http://localhost:3001/categorias"; // Ajusta si usas otro endpoint

  const cargarCategorias = async () => {
    try {
      const res = await axios.get(API);
      setCategorias(res.data);
    } catch (error) {
      console.error("Error al obtener categorías", error);
    }
  };

  const guardarCategoria = async (categoria) => {
    try {
      if (categoria.id_categoria) {
        // Actualizar
        await axios.put(`${API}/${categoria.id_categoria}`, categoria);
      } else {
        // Crear
        await axios.post(API, categoria);
      }
      cargarCategorias();
      setSelectedCategoria(null);
    } catch (error) {
      console.error("Error al guardar categoría", error);
    }
  };

  const eliminarCategoria = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar esta categoría?")) {
      try {
        await axios.delete(`${API}/${id}`);
        cargarCategorias();
      } catch (error) {
        console.error("Error al eliminar categoría", error);
      }
    }
  };

  const editarCategoria = (categoria) => {
    setSelectedCategoria(categoria);
  };

  const cancelarEdicion = () => {
    setSelectedCategoria(null);
  };

  useEffect(() => {
    cargarCategorias();
  }, []);

  return (
    <div className="container mt-4">
      <CategoriaForm
        onSave={guardarCategoria}
        selectedCategoria={selectedCategoria}
        onCancel={cancelarEdicion}
      />
      <CategoriaList
        categorias={categorias}
        onEdit={editarCategoria}
        onDelete={eliminarCategoria}
      />
    </div>
  );
};

export default CategoriaPage;
