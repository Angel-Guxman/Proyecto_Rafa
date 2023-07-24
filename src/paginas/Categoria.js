import React, { useEffect, useState } from "react";
import axios from "axios";
import Encabezado from "../componentes/Encabezado";
import "../estilo/Categoria.css";
import { Link } from "react-router-dom";
import Pie from "../componentes/Pie";

function Categoria() {
  const [categorias, setcategorias] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8081/obtenerCategoria").then((respuesta) => {
      if (respuesta.data.Estatus === "exitoso") {
        setcategorias(respuesta.data.contenido);
      } else {
        console.log("Error");
      }
    });
  }, []);

  return (
    <>
      <Encabezado />
      <div id="cat-todo">
        <h3 id="cat-h3">Mira Nuestras Categorías</h3>
        <div className="catego">
          {categorias.map((categoria, index) => (
            <div className="col-md-4" key={categoria.id_categoria}>
              <div className="cartas">
                <img
                  src={require(`../imagen/${categoria.imagen}`)}
                  className="playa"
                  alt="..."
                />
                <div className="cuerpo-cat">
                  <h5 className="nombre-cat">{categoria.nombre_categoria}</h5>
                  <p className="descrpcion-cat">
                    {categoria.descripcion_categoria}
                  </p>
                  <Link
                    to={`/obtenerproductos/${categoria.id_categoria}`}
                    className="btn btn-primary"
                  >
                    Mostrar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pie />
    </>
  );
}

export default Categoria;
