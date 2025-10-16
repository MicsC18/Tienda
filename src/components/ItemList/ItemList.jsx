import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css";
export const ItemList = ({ lista }) => {
  return (
    <>
      <div className="catalogo-grid">
        {lista.length ? (
          lista.map((libros) => (
            <Link to={`/detail/${libros.id}`} key={libros.id}>
              <Item {...libros}>
                <button>Enviar al carrito</button>
              </Item>
            </Link>
          ))
        ) : (
          <p>No hay productos</p>
        )}
      </div>
    </>
  );
};
