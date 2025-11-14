import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getLibroById } from "../../services/libros";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getLibroById(id)
      .then((data) => setDetail(data))
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
