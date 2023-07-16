import React from "react";
import "../estilo/Encabezado.css";
import logo01 from "../imagen/logo01.png";
import sudo from "../imagen/sudo.png";
import compras from "../imagen/compras.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Encabezado() {
  //retomamos el token
  const login = localStorage.getItem("usuario");
  const navegacion = useNavigate();
  //crear un metodo salir
  const salir = () => {
    localStorage.clear();
    navegacion("/");
  };

  return (
    <>
      <header id="UrbanCenter" className="UrbanCenter">
        <a href="PaginaPrincipal.html" className="my-link">
          <h1>URBAN TRANSPORT</h1>
          <img src={logo01} className="logo01" alt="" />
        </a>
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
            <Link to="/contacto" className="btn-neon">
              Contacto
            </Link>
          </li>
          <li>
            <a href="/categoria" className="btn-neon">
              Categoria
            </a>
          </li>
          <li>
            <Link to="/producto" className="btn-neon">
              Producto
            </Link>
          </li>
          <Link to="/login">
            <img src={sudo} id="con" alt="" />
          </Link>
          <Link to="/carrito">
            <img src={compras} id="con" alt="" />
          </Link>
          {login ? (
            <>
              <a className="btn-neon" onClick={salir} href="...">
                Salir
              </a>
            </>
          ) : (
            <>
              <Link to="/login" id="acc">
                Acceder
              </Link>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Encabezado;
