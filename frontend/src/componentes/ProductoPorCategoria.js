import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Encabezado from "../componentes/Encabezado";
import Pie from "../componentes/Pie";
import "../estilo/Productos.css";

function ProductoPorCategoria() {
  const { id_categoria } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8081/obtenerproductos/${id_categoria}`)
      .then((respuesta) => {
        if (respuesta.data.Estatus === "exitoso") {
          setProductos(respuesta.data.contenido);
        } else {
          console.log("Error");
        }
      });
  }, [id_categoria]);

  return (
    <>
      <Encabezado />
      <h2 id="pap">Productos</h2>
      <div className="carta">
        {productos.map((producto) => (
          <div
            className="col-md-4 mb-3 d-flex justify-content-center"
            key={producto.id_producto}
          >
            <div className="list-po">
              <img
                src={require(`../imagen/${producto.imagen}`)}
                className="imagenProductos"
                alt="Imagen del producto"
              />
              <div className="pro-con">
                <h5 className="pro-nom">{producto.nombre_producto}</h5>
                <p className="pro-des">{producto.descripcion_producto}</p>
                <p className="pro-pre">${producto.precio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pie />
    </>
  );
}

export default ProductoPorCategoria;
