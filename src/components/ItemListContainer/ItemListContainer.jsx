import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getLibros } from "../../services/libros"; // ajustá la ruta real

export const ItemListContainer = ({}) => {
  const [libros, setLibros] = useState([]);

  const { category } = useParams();
  useEffect(() => {
    getLibros(category?.toLowerCase())
      .then((data) => {
        setLibros(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return (
    <section>
      <ItemList lista={libros} />
    </section>
  );
};
