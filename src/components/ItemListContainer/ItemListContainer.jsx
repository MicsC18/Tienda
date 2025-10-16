import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({}) => {
  const [libros, setLibros] = useState([]);
  useEffect(() => {
    fetch("/data/libros.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Hubo un problem al buscar productos");
        }

        return res.json();
      })
      .then((data) => {
        setLibros(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section>
      <ItemList lista={libros} />
    </section>
  );
};
