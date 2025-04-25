const API_URL = "http://localhost:3001/api/v1/categorias";

const getAuthHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

const manejarError = (error) => {
  console.error("Error en categoriaService:", error.message);
  if (error.message.includes("401") || error.message.includes("Token")) {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
};

export const obtenerCategorias = async () => {
  try {
    const res = await fetch(API_URL, { headers: getAuthHeaders() });
    if (!res.ok) throw new Error(`Error ${res.status} al obtener categorías`);
    return await res.json();
  } catch (err) {
    manejarError(err);
    return [];
  }
};

export const agregarCategoria = async (categoria) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(categoria),
    });
    if (!res.ok) throw new Error(`Error ${res.status} al agregar categoría`);
  } catch (err) {
    manejarError(err);
  }
};

export const actualizarCategoria = async (id, categoria) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(categoria),
    });
    if (!res.ok) throw new Error(`Error ${res.status} al actualizar categoría`);
  } catch (err) {
    manejarError(err);
  }
};

export const eliminarCategoria = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    if (!res.ok) throw new Error(`Error ${res.status} al eliminar categoría`);
  } catch (err) {
    manejarError(err);
  }
};
