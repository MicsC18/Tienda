import "./Header.css";
import { Navbar } from "../Nav/Nav";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header-argentino">
      <div className="header-container">
        <Link to={"/"}>
          <h1 className="site-title">PasaLibros</h1>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};
