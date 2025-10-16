import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch("/data/libros.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("Ocurrio un Error, Libro encontrado.");
        }
        return respuesta.json();
      })
      .then((data) => {
        const found = data.find((l) => l.id === id);
        if (found) {
          setDetail(found);
        } else {
          throw new Error("Ocurrio un Error, Libro encontrado.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <main>
      {Object.keys(detail).length ? (
        <ItemDetail detail={detail} />
      ) : (
        <p>Cargando...</p>
      )}
    </main>
  );
};
