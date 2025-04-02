// src/components/PersonaForm.js
import React, { useState, useEffect } from "react";

const PersonaForm = ({ agregar, actualizar, personaSeleccionada }) => {
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
  }, [personaSeleccionada]);

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
    <div className="card p-3">
      <h4 className="text-center">{personaSeleccionada ? "Editar Persona" : "Agregar Persona"}</h4>
      <form onSubmit={manejarEnvio}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Edad</label>
          <input type="number" className="form-control" value={edad} onChange={(e) => setEdad(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          {personaSeleccionada ? "Actualizar" : "Agregar"}
        </button>
      </form>
    </div>
  );
};

export default PersonaForm;
