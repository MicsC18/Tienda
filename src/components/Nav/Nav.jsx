import { Link } from "react-router-dom";
import "./Nav.css";
import { useState } from "react";
import { useCartContext } from "../context/CartContext/useCartContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalItems } = useCartContext();

  return (
    <nav className="navbar">
      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className={`hamburger ${isOpen ? "open" : ""}`}></div>
      </div>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link to={"/inicio"}>Inicio</Link>
        </li>
        <li>
          <Link to={"/category/poesia"}>poesía</Link>
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
          <Link to="/contacto" className="nav-link">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};
