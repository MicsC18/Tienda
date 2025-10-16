import "./Footer.css";

export const Footer = () => {
  return (
    <div className="DivFooter">
      <footer className="footer-pasalibros">
        <div className="footer-container">
          <div className="footer-section">
            <h3 className="footer-title">PasaLibros</h3>
            <p>Comparte historias con pasión argentina.</p>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <p>Email: contacto@pasalibros.com</p>
            <p>Tel: +54 11 1234 5678</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 PasaLibros. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};
