import React from "react";
import { useState } from "react";
import "../estilo/Login.css";
import axios from "axios";
import Encabezado from "../componentes/Encabezado";
import Pie from "../componentes/Pie";
import { Link } from "react-router-dom";

function Registro() {
  const [campos, setCampos] = useState({
    nombre_usuario: "",
    correo_electronico: "",
    contrasenia: "",
  });

  const [error, setError] = useState("");
  //redirecionMIENTO

  const registrar = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/registrar", campos)
      .then((respuesta) => {
        if (respuesta.data.Estatus === "CORRECTO") {
          window.location.href = "/login";
          console.log(respuesta.data);
        } else {
          setError(respuesta.data.Error);
          console.log(error);
        }
      })
      .catch((error) => console.log("hay error"));
  };
  return (
    <>
      <Encabezado />
      <form className="formulario" onSubmit={registrar}>
        <div className="registro-titulo">
          <h1>Registrate</h1>
        </div>
        <div className="contenedor">
          <div className="input-contenedor">
            <i className="fas fa-user icon" />
            <input
              type="text"
              placeholder="Nombre"
              name="nombre_usuario"
              onChange={(e) =>
                setCampos({ ...campos, nombre_usuario: e.target.value })
              }
            />
          </div>
          <div className="input-contenedor">
            <i className="fas fa-user icon" />
            <input
              className="email"
              type="email"
              placeholder="Email"
              name="correo_eletronico"
              onChange={(e) =>
                setCampos({ ...campos, correo_electronico: e.target.value })
              }
            />
          </div>
          <div className="input-contenedor">
            <i className="fas fa-user icon" />
            <input
              type="password"
              placeholder="Contraseña"
              name="contrasenia"
              onChange={(e) =>
                setCampos({ ...campos, contrasenia: e.target.value })
              }
            />
          </div>
          <button type="submit" className="button">
            Ingresar
          </button>

          <p>
            Al registrarte, aceptas nuestras Condiciones de uso y Política de
            privacidad.
          </p>
          <p>
            ¿Ya tienes una cuenta?
            <Link to="/login" className="link">
              Iniciar Sesion
            </Link>
          </p>
        </div>
      </form>
      <Pie />
    </>
  );
}
export default Registro;
