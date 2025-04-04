import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const PersonaForm = ({ show, handleClose, agregar, actualizar, personaSeleccionada }) => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");

  useEffect(() => {
    if (personaSeleccionada) {
      setNombre(personaSeleccionada.nombre);
      setEdad(personaSeleccionada.edad);
    } else {
      setNombre("");
      setEdad("");
    }
  }, [personaSeleccionada]); // Este efecto se ejecuta cuando personaSeleccionada cambia

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!nombre || !edad) return;

    const nuevaPersona = { nombre, edad: Number(edad) };

    if (personaSeleccionada) {
      actualizar(personaSeleccionada.id, nuevaPersona);
    } else {
      agregar(nuevaPersona);
    }

    setNombre("");
    setEdad("");
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{personaSeleccionada ? "Editar Persona" : "Agregar Persona"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={manejarEnvio}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Edad</Form.Label>
            <Form.Control type="number" value={edad} onChange={(e) => setEdad(e.target.value)} required />
          </Form.Group>
          <Button variant="primary" type="submit">
            {personaSeleccionada ? "Actualizar" : "Agregar"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default PersonaForm;
