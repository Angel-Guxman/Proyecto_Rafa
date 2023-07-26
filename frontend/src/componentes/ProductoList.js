import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductoList() {
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
    axios
      .delete(`http://localhost:8081/eliminarProducto/${id}`)
      .then((respuesta) => {
        if (respuesta.data.Estatus === "exitoso") {
          obtenerProductos();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Lista de Productos</h1>
      <Link to="/admin/productos/nuevo">Agregar Nuevo Producto</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id_producto}>
              <td>{producto.id_producto}</td>
              <td>{producto.nombre_producto}</td>
              <td>{producto.descripcion_producto}</td>
              <td>{producto.precio}</td>
              <td>
                <Link to={`/admin/productos/editar/${producto.id_producto}`}>
                  Editar
                </Link>
                <button onClick={() => eliminarProducto(producto.id_producto)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductoList;
