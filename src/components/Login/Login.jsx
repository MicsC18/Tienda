import { useState } from "react";
import { useAuthContext } from "../context/AuthContext/useAuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const [userForm, setUSerForm] = useState({ name: "", password: "" });
  const { user, login } = useAuthContext();

  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/admin/alta-libros" />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUSerForm({ ...userForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(userForm.name, userForm.password);

    if (success) {
      navigate("/admin/alta-libros");
    } else {
      alert("Credenciales incorrectas");
      setUSerForm({ name: "", password: "" });
    }
  };

  return (
    <form className="login-card" onSubmit={handleSubmit}>
      <h2>Iniciar sesion</h2>

      <div>
        <label>Usuario:</label>
        <input
          type="text"
          name="name"
          autoComplete="username"
          value={userForm.name}
          onChange={handleChange}
        ></input>
      </div>

      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          value={userForm.password}
          onChange={handleChange}
        ></input>
      </div>
      <button type="submit">Iniciar Sesion</button>
    </form>
  );
};
