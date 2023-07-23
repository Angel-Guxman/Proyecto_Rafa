import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductoCreate() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [idCategoria, setIdCategoria] = useState("");
  const navigate = useNavigate();

  const crearProducto = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/crearProducto", {
        nombre,
        descripcion,
        precio,
        imagen,
        id_categoria_id: idCategoria,
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
      <h1>Crear Nuevo Producto</h1>
      <form onSubmit={crearProducto}>
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
        <label>
          ID Categoría:
          <input
            type="text"
            value={idCategoria}
            onChange={(e) => setIdCategoria(e.target.value)}
          />
        </label>
        <button type="submit">Guardar</button>
      </form>
    </>
  );
}

export default ProductoCreate;
