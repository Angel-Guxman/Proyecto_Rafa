import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CategoriaCreate() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState(""); // Nuevo estado para el nombre de la imagen
  const navigate = useNavigate();

  const crearCategoria = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/crearCategoria", {
        nombre,
        descripcion,
        imagen,
      }) // Enviar el nombre de la imagen al servidor
      .then((respuesta) => {
        if (respuesta.data.Estatus === "exitoso") {
          navigate("/admin/categorias");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Crear Nueva Categoría</h1>
      <form onSubmit={crearCategoria}>
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
          Nombre de la Imagen:{" "}
          {/* Campo para ingresar el nombre de la imagen */}
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

export default CategoriaCreate;
