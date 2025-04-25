import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const CategoriaForm = ({ show, handleClose, agregar, actualizar, categoriaSeleccionada }) => {
  const [categoria, setCategoria] = useState("");
  const [errores, setErrores] = useState({});

  useEffect(() => {
    if (categoriaSeleccionada) {
      setCategoria(categoriaSeleccionada.categoria);
    } else {
      setCategoria("");
    }
    setErrores({});
  }, [categoriaSeleccionada]);

  const validar = () => {
    const nuevosErrores = {};
    if (!categoria.trim()) nuevosErrores.categoria = "La categoría es obligatoria";

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!validar()) {
      Swal.fire("Campos inválidos", "Por favor revisa los datos ingresados", "error");
      return;
    }

    const nuevaCategoria = { categoria };

    if (categoriaSeleccionada) {
      actualizar(categoriaSeleccionada.id_categoria, nuevaCategoria);
    } else {
      agregar(nuevaCategoria);
    }

    setCategoria("");
    setErrores({});
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{categoriaSeleccionada ? "Editar Categoría" : "Agregar Categoría"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={manejarEnvio}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre de Categoría</Form.Label>
            <Form.Control
              type="text"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              isInvalid={!!errores.categoria}
            />
            <Form.Control.Feedback type="invalid">{errores.categoria}</Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            {categoriaSeleccionada ? "Actualizar" : "Agregar"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CategoriaForm;
