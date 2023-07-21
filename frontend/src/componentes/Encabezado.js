import React from "react";
import "../estilo/Encabezado.css";
import logo01 from "../imagen/logo01.png";
import sudo from "../imagen/sudo.png";
import compras from "../imagen/compras.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCarrito } from "../contexts/CarritoContext";
function Encabezado() {
  const nivelUsuario = localStorage.getItem("nivelUsuario");
  const login = localStorage.getItem("usuario");
  const navegacion = useNavigate();
  const { cantidadProductos } = useCarrito();
  const salir = () => {
    localStorage.clear();
    navegacion("/");
  };

  return (
    <>
      <header id="encabezado" className="encabezado">
        <div className="UrbanTransport" id="UrbanTransport">
          <h1>URBAN TRANSPORT</h1>
          <img src={logo01} className="logo01" alt="" />
        </div>
        <div className="botonesEncabezado" id="botonesEncabezado">
          {login ? (
            <>
              {nivelUsuario === "2" && (
                <li>
                  <Link to="/dashboard" className="btn-neon">
                    Dashboard
                  </Link>
                  <Link to="/" className="btn-neon" onClick={salir}>
                    Salir
                  </Link>
                </li>
              )}
              {nivelUsuario === "1" && (
                <li>
                  <Link to="/" className="btn-neon" onClick={salir}>
                    Salir
                  </Link>
                </li>
              )}
            </>
          ) : (
            <>
              <Link to="/login" id="acc" className="acceder">
                Acceder
              </Link>
              <Link to="/admin-login" id="admin-acc" className="admin">
                Admin
              </Link>
            </>
          )}

          <Link to="/login">
            <img src={sudo} id="con" alt="" />
          </Link>
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
            <Link to="/" className="btn-neon">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/nosotros" className="btn-neon">
              Nosotros
            </Link>
          </li>
          <li>
            <Link to="/categoria" className="btn-neon">
              Categoría
            </Link>
          </li>
          <li>
            <Link to="/producto" className="btn-neon">
              Producto
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="btn-neon">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Encabezado;
