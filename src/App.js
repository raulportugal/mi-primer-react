// src/App.js
import React, { useState, useEffect } from "react";
import { obtenerPersonas, agregarPersona, actualizarPersona, eliminarPersona } from "./services/personaService";
import PersonaForm from "./components/PersonaForm";
import PersonaList from "./components/PersonaList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [personas, setPersonas] = useState([]);
  const [personaSeleccionada, setPersonaSeleccionada] = useState(null);

  useEffect(() => {
    cargarPersonas();
  }, []);

  const cargarPersonas = async () => {
    const datos = await obtenerPersonas();
    setPersonas(datos);
  };

  const agregar = async (persona) => {
    await agregarPersona(persona);
    cargarPersonas();
  };

  const actualizar = async (id, persona) => {
    await actualizarPersona(id, persona);
    setPersonaSeleccionada(null);
    cargarPersonas();
  };

  const eliminar = async (id) => {
    await eliminarPersona(id);
    cargarPersonas();
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Lista de Personas</h1>
      <div className="row">
        <div className="col-md-4">
          <PersonaForm agregar={agregar} actualizar={actualizar} personaSeleccionada={personaSeleccionada} />
        </div>
        <div className="col-md-8">
          <PersonaList personas={personas} seleccionar={setPersonaSeleccionada} eliminar={eliminar} />
        </div>
      </div>
    </div>
  );
};

export default App;
