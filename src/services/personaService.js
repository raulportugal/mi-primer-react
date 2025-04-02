// src/services/personaService.js
const API_URL = "http://localhost:3001/api/v1/personas"; // Cambia esta URL a tu URL real

export const obtenerPersonas = async () => {
  const respuesta = await fetch(API_URL);
  const data = await respuesta.json();
  return data; // La API devuelve un array de objetos con { id, nombre, edad, etc. }
};

export const agregarPersona = async (persona) => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(persona),
  });
};

export const actualizarPersona = async (id, persona) => {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(persona),
  });
};

export const eliminarPersona = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
