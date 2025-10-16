import { useState } from "react";
import "./Contacto.css";

export const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    setEnviado(true);
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <main className="contacto-container">
      <h1>Contacto</h1>
      <p>¿Tenés alguna pregunta o querés ponerte en contacto con nosotros?</p>

      {enviado ? (
        <p className="mensaje-exito">
          ✅ ¡Gracias por tu mensaje! Te responderemos pronto.
        </p>
      ) : (
        <form className="contacto-form" onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Mensaje:
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </label>

          <button type="submit">Enviar</button>
        </form>
      )}
    </main>
  );
};
