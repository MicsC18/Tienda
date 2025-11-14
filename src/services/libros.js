const BASE_URL = "https://6914d7663746c71fe049ce3d.mockapi.io/libros";

export const CreateLibro = async (libro) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(libro),
  });

  if (!res.ok) {
    throw new Error("No se pudo crear el producto");
  }
  const result = await res.json();
  return result; // <- fuera del if
};

export const getLibros = async (category) => {
  let url = BASE_URL;
  if (category) {
    url = `${BASE_URL}?category=${category}`;
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error al listar productos");
  }
  const results = await res.json();
  return results;
};

export const getLibroById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) {
    throw new Error("Erros al obtener el producto");
  }
  return await res.json();
};
