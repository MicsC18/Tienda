import "./Header.css";
import { Navbar } from "../Nav/Nav";

export const Header = () => {
  return (
    <header className="header-argentino">
      <div className="header-container">
        <h1 className="site-title">PasaLibros</h1>
        <Navbar />
      </div>
    </header>
  );
};
