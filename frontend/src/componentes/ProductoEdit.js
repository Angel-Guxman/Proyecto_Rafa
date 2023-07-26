import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../estilo/EditarProductos.css";
import Encabezado from "./Encabezado";
import Pie from "./Pie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Herrramientas from "../imagen/herramientas.png";

function ProductoEdit() {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");

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
    const datosFormulario = {
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
      imagen: imagen, // Mantener la imagen actual sin cambios
    };

    axios
      .put(`http://localhost:8081/editarProducto/${id}`, datosFormulario)
      .then((respuesta) => {
        if (respuesta.data.Estatus === "exitoso") {
          toast.success("Cambios realizados correctamente");
        } else {
          toast.error("Error al realizar los cambios");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Encabezado />
      <div className="pro-edit-titulo">
        <h1 id="pap">Editar Producto</h1>
      </div>
      <form onSubmit={editarProducto} className="for-edit-pro">
        <label className="nombre-edit-pro">
          Nombre:
          <input
            className="productos-celda"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <label className="nombre-edit-pro">
          Descripción:
          <textarea
            className="productos-celda"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
        </label>
        <label className="nombre-edit-pro">
          Precio:
          <input
            className="productos-celda"
            type="number" // Cambiar el tipo de input a "number"
            step="0.01" // Permitir decimales en el precio
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required // Hacer el campo obligatorio
          />
        </label>
        {/* Mostrar la imagen actual */}
        {imagen && <img src={Herrramientas} alt="Imagen actual" className="herramienta" />}

        <button type="submit" className="guardar-pro">
          Guardar
        </button>
        <Link to="/admin/productos" className="salir-pro">
          Salir
        </Link>
      </form>
      <Pie />
      <ToastContainer />
    </>
  );
}

export default ProductoEdit;
