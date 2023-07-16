import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1>Dashboard del Administrador</h1>
      <p>Aquí se mostrará el catálogo de administrador</p>
      <Link to="/catalogo">Ir al catálogo</Link>
    </>
  );
}

export default Dashboard;
