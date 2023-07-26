import React from "react";
import { Link } from "react-router-dom";
import "../estilo/Dashbord.css";
import catpro from "../imagen/cat-pro.jpg";
import adminimg from "../imagen/admin-prin.jpg";
import Encabezado from "./Encabezado";
import Pie from "./Pie";
import catimg from "../imagen/ima-cat.png";
import pedimg from "../imagen/pedidos.jpg";
import usuimg from "../imagen/usuario-img.png";
import comimg from "../imagen/com-img.jpg";


function Dashboard() {
  return (
    <>
      <Encabezado />

      <div id="tit-img">
        <h1>Dashboard del Administrador</h1>
        <img src={adminimg} alt="..." id="ad-img"></img>
      </div>
      <div id="cat-admin">
        <div id="cat-pro">
          <h2>Catálogo de Productos</h2>
          <img src={catpro} alt="..." id="pro-ima"></img>
          <Link to="/admin/productos" className="link-dash">
            Ver Productos
          </Link>
        </div>
        <div id="cat-cat">
          <h2>Catálogo de Categorías</h2>
          <img src={catimg} alt="..." id="cat-img"></img>
          <Link to="/admin/categorias" className="link-dash">
            Ver Categorías
          </Link>
        </div>
        <div id="cat-ped">
          <h2>Catálogo de Pedidos</h2>
          <img src={pedimg} alt="" id="ped-img"></img>
          <Link to="/admin/pedidos" className="link-dash">
            Ver Pedidos
          </Link>
        </div>
        <div id="cat-usu">
          <h2>Catálogo de Usuarios</h2>
          <img src={usuimg} alt="" id="usu-img"></img>
          <Link to="/admin/usuarios" className="link-dash">
            Ver Usuarios
          </Link>
        </div>
      </div>
      <Pie />
    </>
  );
}

export default Dashboard;
