import React from "react";
import "../estilo/Encabezado.css";
import logoUrban from "../imagen/logofinallogo.png";
import UrbanTransport from "../imagen/urbanTransportTexto.png";

import compras from "../imagen/compras.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCarrito } from "../contexts/CarritoContext";
function Encabezado() {
  const nivelUsuario = localStorage.getItem("nivelUsuario");

  const navegacion = useNavigate();
  const { cantidadProductos, cerrarSesion } = useCarrito();
  const salir = () => {
    localStorage.clear();
    navegacion("/");
  };

  const handleSalir = () => {
    cerrarSesion(); // Llamar a la función cerrarSesion para limpiar el carrito y cerrar sesión
    salir();
  };
  return (
    <>
      <header id="encabezado" className="encabezado">
        <div className="logo-nombre">
          <img src={logoUrban} alt="..." className="logo-urban" />

          <img src={UrbanTransport} alt="..." className="urban-transport" />
        </div>
        <div className="botonesEncabezado" id="botonesEncabezado">
          {nivelUsuario === "1" && (
            <li>
              <Link to="/" className="acceder" onClick={handleSalir}>
                Salir
              </Link>
            </li>
          )}

          {nivelUsuario === "2" && (
            <li>
              <Link to="/dashboard" className="acceder">
                Dashboard
              </Link>
              <Link to="/" className="acceder" onClick={handleSalir}>
                Salir
              </Link>
            </li>
          )}

          {/* Si no es nivel 1 ni nivel 2, se mostrarán los siguientes botones */}
          {nivelUsuario !== "1" && nivelUsuario !== "2" && (
            <li>
              <Link to="/login" className="acceder">
                Iniciar Sesión
              </Link>
            </li>
          )}

          <Link to="/carrito">
            <img src={compras} id="con" alt="" />
            {cantidadProductos > 0 && ( // Mostrar el contador solo si hay productos en el carrito
              <span className="carrito-contador">{cantidadProductos}</span>
            )}
          </Link>
        </div>
      </header>
      <nav id="menu" className="menu">
        <ul>
          <li>
            <Link to="/" className="barra-nav">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/nosotros" className="barra-nav">
              Nosotros
            </Link>
          </li>
          <li>
            <Link to="/categoria" className="barra-nav">
              Categoría
            </Link>
          </li>
          <li>
            <Link to="/producto" className="barra-nav">
              Producto
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="barra-nav">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Encabezado;
