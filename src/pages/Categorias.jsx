import React, { useEffect, useState } from "react";
import { obtenerCategorias, agregarCategoria, actualizarCategoria, eliminarCategoria } from "../services/categoriaService";
import CategoriaList from "../components/categorias/CategoriaList";
import CategoriaForm from "../components/categorias/CategoriaForm";
import { Button } from "react-bootstrap";

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  const cargarCategorias = async () => {
    const datos = await obtenerCategorias();
    setCategorias(datos);
  };

  useEffect(() => {
    cargarCategorias();
  }, []);

  const agregar = async (categoria) => {
    await agregarCategoria(categoria);
    cargarCategorias();
  };

  const actualizar = async (id, categoria) => {
    await actualizarCategoria(id, categoria);
    cargarCategorias();
  };

  const eliminar = async (id) => {
    await eliminarCategoria(id);
    cargarCategorias();
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Gestión de Categorías</h2>
      <Button variant="primary" className="mb-3" onClick={() => { setCategoriaSeleccionada(null); setMostrarModal(true); }}>
        Agregar Categoría
      </Button>
      <CategoriaList categorias={categorias} seleccionar={(cat) => { setCategoriaSeleccionada(cat); setMostrarModal(true); }} eliminar={eliminar} />
      <CategoriaForm show={mostrarModal} handleClose={() => setMostrarModal(false)} agregar={agregar} actualizar={actualizar} categoriaSeleccionada={categoriaSeleccionada} />
    </div>
  );
};

export default Categorias;
