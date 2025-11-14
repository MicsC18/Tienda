import { Link } from "react-router-dom";
import "./Nav.css";
import { useCartContext } from "../context/CartContext/useCartContext";

export const Navbar = () => {
  const { getTotalItems } = useCartContext();

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to={"/inicio"}>Inicio</Link>
        </li>
        <li>
          <Link to={"/category/ficción"}>Ficción</Link>
        </li>
        <li>
          <Link to={"/category/historia"}>historia</Link>
        </li>
        <li>
          <Link to={"/carrito"}>Carrito</Link>
          {getTotalItems() > 0 && (
            <span className="in-cart">{getTotalItems()}</span>
          )}
        </li>
        <li>
          <Link to={"/contacto"} className="nav-link">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};
