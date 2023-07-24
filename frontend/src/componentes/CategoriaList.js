import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Encabezado from "./Encabezado";
import Pie from "./Pie";
import "../estilo/CategoriaList.css";
function CategoriaList() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    obtenerCategorias();
  }, []);

  const obtenerCategorias = () => {
    axios
      .get("http://localhost:8081/obtenerCategoria")
      .then((respuesta) => {
        if (respuesta.data.Estatus === "exitoso") {
          setCategorias(respuesta.data.contenido);
        }
      })
      .catch((error) => console.log(error));
  };

  const eliminarCategoria = (id) => {
    axios
      .delete(`http://localhost:8081/eliminarCategoria/${id}`)
      .then((respuesta) => {
        if (respuesta.data.Estatus === "exitoso") {
          obtenerCategorias();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Encabezado />
      <div id="list-cat-tit">
        <h1>Lista de Categorías</h1>
      </div>
      <div id="list-cat-crear">
        <Link to="/admin/categorias/nueva">Crear Nueva Categoría</Link>
      </div>
      <table id="list-cat-tabla">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr key={categoria.id_categoria}>
              <td>{categoria.id_categoria}</td>
              <td>{categoria.nombre_categoria}</td>
              <td>{categoria.descripcion_categoria}</td>
              <td>
                <Link to={`/admin/categorias/editar/${categoria.id_categoria}`}>
                  Editar
                </Link>
                <button
                  onClick={() => eliminarCategoria(categoria.id_categoria)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pie />
    </>
  );
}

export default CategoriaList;
