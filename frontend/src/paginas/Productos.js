import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../estilo/Productos.css";
import Encabezado from "../componentes/Encabezado";
import Pie from "../componentes/Pie";

function Producto() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8081/obtenerproductos").then((respuesta) => {
      if (respuesta.data.Estatus === "exitoso") {
        setProductos(respuesta.data.contenido);
      } else {
        console.log("Error");
      }
    });
  });

  return (
    <>
      <Encabezado />
      <h2 id="pap">Productos</h2>
      <div className="carta">
        {productos.map((productos, index) => (
          <div
            className="col-md-4 mb-3 d-flex justify-content-center"
            key={productos.id_productos}
          >
            <div className="list-po">
              <img
                src={require(`../imagen/${productos.imagen}`)}
                className="imagenProductos"
                alt="..."
              />
              <div className="pro-con">
                <h5 className="pro-nom">{productos.nombre_producto}</h5>
                <p className="pro-des">{productos.descripcion_producto}</p>
                <p className="pro-pre">${productos.precio}</p>
                <Link to="/producto" className="cat-pro">
                  Comprar
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pie />
    </>
  );
}

export default Producto;
