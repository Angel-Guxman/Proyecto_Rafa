import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../estilo/CategoriaEdit.css";
import Pie from "./Pie";
import Encabezado from "./Encabezado";

function CategoriaCreate() {
  const [categoria, setCategorias] = useState({
    nombre: "",
    descripcion: "",
    imagen: "",
  });
  const navigate = useNavigate();
  const Categopro = (e) => {
    e.preventDefault();
    const datosFormulario = new FormData();
    datosFormulario.append("nombre", categoria.nombre);
    datosFormulario.append("descripcion", categoria.descripcion);
    datosFormulario.append("imagen", categoria.imagen);

    axios
      .post("http://localhost:8081/crearCategoria", datosFormulario)
      .then((respuesta) => {
        if (respuesta.data.Estatus === "exitoso") {
          navigate("/admin/categorias");
          toast.success("Categoría agregada correctamente");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Encabezado />
      <div className="EditarUsuario" id="Cat-Create">
        <h1>Crear Nueva Categoría</h1>
        <form className="Form-Edit-User" onSubmit={Categopro}>
          <label className="user-for" id="Nombre-Cat">
            Nombre:
            <input
              className="EstiloUsuario"
              id="input-name"
              type="text"
              name="nombre"
              required
              onChange={(e) =>
                setCategorias({ ...categoria, nombre: e.target.value })
              }
            />
          </label>
          <label className="user-for" id="Nombre-Cat">
            Descripción:
          </label>
          <input
            type="text"
            name="descripcion"
            required
            onChange={(e) =>
              setCategorias({ ...categoria, descripcion: e.target.value })
            }
          />
          <label className="user-for" id="Nombre-Cat">
            Imagen:
            <input
              className="EstiloUsuario"
              type="file"
              name="imagen"
              accept="image/*"
              required
              onChange={(e) =>
                setCategorias({ ...categoria, imagen: e.target.files[0] })
              }
            />
          </label>
          <button id="Cat-Edit-Button" type="submit">
            Guardar
          </button>
        </form>
        <ToastContainer />
      </div>
      <Pie />
    </>
  );
}

export default CategoriaCreate;
