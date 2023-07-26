import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pie from "./Pie";
import Encabezado from "./Encabezado";
import "../estilo/ProductoCreate.css"

function ProductoCreate() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState(null);
  const [idCategoria, setIdCategoria] = useState("");
  const navigate = useNavigate();

  const crearProducto = (e) => {
    e.preventDefault();
    const datosFormulario = new FormData();
    datosFormulario.append("nombre", nombre);
    datosFormulario.append("descripcion", descripcion);
    datosFormulario.append("precio", precio);
    datosFormulario.append("imagen", imagen);
    datosFormulario.append("id_categoria_id", idCategoria);

    axios
      .post("http://localhost:8081/crearProducto", datosFormulario)
      .then((respuesta) => {
        if (respuesta.data.Estatus === "exitoso") {
          toast.success("Producto creado con éxito"); // Notificación de éxito
          navigate("/admin/productos");
        }
      })
      .catch((error) => console.log(error));
  };

  const handleImagenSeleccionada = (e) => {
    setImagen(e.target.files[0]);
  };

  return (
    <>
      <Encabezado />
      <div className="pro-cr">
      <h1 className="crear-nuevo">Crear Nuevo Producto</h1>
      </div>
      <form onSubmit={crearProducto} className="form-create-pro">
        <label className="cap-create-pro">
          Nombre:
          <input className="text-create-pro"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <label className="cap-create-pro">
          Descripción:
          <input className="text-create-prod"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </label>
        <label className="cap-create-pro">
          Precio:
          <input className="text-create-pro"
            type="number" // Cambiar el tipo a "number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </label>
        <label className="cap-create-pro">
          Imagen:
          <input className="text-create-pro"
            type="file"
            required
            accept="image/*"
            onChange={handleImagenSeleccionada}
          />
        </label>
        <label className="cap-create-pro">
          ID Categoría:
          <select // Cambiar a un campo select
            value={idCategoria}
            onChange={(e) => setIdCategoria(e.target.value)}
            type="number"
          >
            <option value="0"></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
        <button type="submit" className="guar-pro-edit">Guardar</button>
      </form>
      <Pie />
      <ToastContainer /> {/* Componente de notificación */}
    </>
  );
}

export default ProductoCreate;
