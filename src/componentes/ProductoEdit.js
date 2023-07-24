import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function ProductoEdit() {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    obtenerProducto();
  }, []);

  const obtenerProducto = () => {
    axios
      .get(`http://localhost:8081/obtenerProducto/${id}`)
      .then((respuesta) => {
        if (respuesta.data.Estatus === "exitoso") {
          const producto = respuesta.data.contenido;
          setNombre(producto.nombre_producto);
          setDescripcion(producto.descripcion_producto);
          setPrecio(producto.precio);
          setImagen(producto.imagen);
        }
      })
      .catch((error) => console.log(error));
  };

  const editarProducto = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8081/editarProducto/${id}`, {
        nombre,
        descripcion,
        precio,
        imagen,
      })
      .then((respuesta) => {
        if (respuesta.data.Estatus === "exitoso") {
          navigate("/admin/productos");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Editar Producto</h1>
      <form onSubmit={editarProducto}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <label>
          Descripción:
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
        </label>
        <label>
          Precio:
          <input
            type="text"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </label>
        <label>
          Imagen:
          <input
            type="text"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
        </label>
        <button type="submit">Guardar</button>
      </form>
    </>
  );
}

export default ProductoEdit;
