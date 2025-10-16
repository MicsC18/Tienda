export const Boton = ({ texto, color }) => {
  const estilos = {
    backgroundColor: color,
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s ease",
  };

  return <button style={estilos}>{texto}</button>;
};
