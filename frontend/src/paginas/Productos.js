// Productos.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../estilo/Productos.css";
import Encabezado from "../componentes/Encabezado";
import Pie from "../componentes/Pie";
import { useCarrito } from "../contexts/CarritoContext"; // Importar el contexto del carrito

function Producto() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const { agregarProducto } = useCarrito(); // Obtener la función agregarProducto y la cantidad de productos del carrito desde el contexto

  useEffect(() => {
    obtenerProductos();
  }, [busqueda]); // Agregamos [busqueda] para que se ejecute cada vez que cambia el valor de busqueda

  const obtenerProductos = () => {
    if (busqueda) {
      // Si hay un término de búsqueda, llamamos a la ruta de búsqueda en el servidor
      axios
        .get(`http://localhost:8081/buscarproductos/${busqueda}`)
        .then((respuesta) => {
          if (respuesta.data.Estatus === "exitoso") {
            setProductos(respuesta.data.contenido);
          } else {
            console.log("Error");
          }
        })
        .catch((error) => console.log(error));
    } else {
      // Si no hay término de búsqueda, obtenemos todos los productos
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
    }
  };

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const buscarProductos = () => {
    obtenerProductos(); // La función obtenerProductos ahora también se ejecutará cuando se haga clic en el botón de búsqueda
  };

  return (
    <>
      <Encabezado />
      <h2 id="pap">Productos</h2>
      <div className="buscar">
        <input
          type="text"
          value={busqueda}
          onChange={handleBusqueda}
          placeholder="Buscar productos..."
        />
        <button onClick={buscarProductos}>Buscar</button>
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
                <button
                  className="cat-pro"
                  onClick={() => agregarProducto(producto)} // Agregar el producto al carrito cuando el usuario haga clic en "Carrito"
                >
                  Carrito
                </button>
                <Link to="/producto" className="cat-pro">
                  Comprar
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pie />
    </>
  );
}

export default Producto;
