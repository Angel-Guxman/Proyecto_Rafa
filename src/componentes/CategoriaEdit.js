import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function CategoriaEdit() {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    obtenerCategoria();
  }, []);

  const obtenerCategoria = () => {
    axios
      .get(`http://localhost:8081/obtenerCategoria/${id}`)
      .then((respuesta) => {
        if (respuesta.data.Estatus === "exitoso") {
          const categoria = respuesta.data.contenido;
          setNombre(categoria.nombre_categoria);
          setDescripcion(categoria.descripcion_categoria);
        }
      })
      .catch((error) => console.log(error));
  };

  const editarCategoria = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8081/editarCategoria/${id}`, {
        nombre,
        descripcion,
      })
      .then((respuesta) => {
        if (respuesta.data.Estatus === "exitoso") {
          navigate("/admin/categorias");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h1>Editar Categoría</h1>
      <form onSubmit={editarCategoria}>
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
        <button type="submit">Guardar</button>
      </form>
    </>
  );
}

export default CategoriaEdit;
