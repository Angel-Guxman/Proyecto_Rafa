// Productosdos.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../estilo/Productos.css";
import Encabezado from "../componentes/Encabezado";
import Pie from "../componentes/Pie";

function Productodos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = () => {
    axios
      .get("http://localhost:8081/obtenerproductos")
      .then((respuesta) => {
        if (respuesta.data.Estatus === "exitoso") {
          setProductos(respuesta.data.contenido);
        } else {
          console.log("Error");
        }
      })
      .catch((error) => console.log(error));
  };

  const eliminarProducto = (id) => {
    const confirmarEliminar = window.confirm(
      "¿Estás seguro de que deseas eliminar este producto?"
    );
    if (confirmarEliminar) {
      axios
        .delete(`http://localhost:8081/eliminarProducto/${id}`)
        .then((respuesta) => {
          if (respuesta.data.Estatus === "exitoso") {
            obtenerProductos();
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <Encabezado />
      <div className="pap-pro">
        <h2 id="pap">Editar Productos</h2>
      </div>
      <div className="carta-productos">
        {productos.map((producto) => (
          <div
            className="col-md-4 mb-3 d-flex justify-content-center"
            key={producto.id_producto}
          >
            <div className="list-po">
              <img
                src={require(`../imagen/${producto.imagen}`)}
                className="imagenProductos"
                alt="..."
              />
              <div className="pro-con">
                <h5 className="pro-nom">{producto.nombre_producto}</h5>
                <p className="pro-des">{producto.descripcion_producto}</p>
                <p className="pro-pre">${producto.precio}</p>
                <Link
                  to={`/admin/productos/editar/${producto.id_producto}`}
                  className="cat-pro"
                >
                  Editar
                </Link>
                <button onClick={() => eliminarProducto(producto.id_producto)}>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="agr-pro">
        <Link to="/admin/productos/nuevo" className="agregar-producto">
          Agregar Producto
        </Link>
      </div>
      <Pie />
    </>
  );
}

export default Productodos;
