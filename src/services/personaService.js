const API_URL = "http://localhost:3001/api/v1/personas";

// Función para obtener el token actual
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

export const obtenerPersonas = async () => {
  const respuesta = await fetch(API_URL, {
    method: "GET",
    headers: getAuthHeaders(),
  });
  if (!respuesta.ok) throw new Error("Error al obtener personas");
  return await respuesta.json();
};

export const agregarPersona = async (persona) => {
  const respuesta = await fetch(API_URL, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(persona),
  });
  if (!respuesta.ok) throw new Error("Error al agregar persona");
};

export const actualizarPersona = async (id, persona) => {
  const respuesta = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(persona),
  });
  if (!respuesta.ok) throw new Error("Error al actualizar persona");
};

export const eliminarPersona = async (id) => {
  const respuesta = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  if (!respuesta.ok) throw new Error("Error al eliminar persona");
};
