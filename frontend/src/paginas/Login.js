import { useState } from "react";
import Pie from "../componentes/Pie";
import axios from "axios";
import { Link } from "react-router-dom";
import Encabezado from "../componentes/Encabezado";
import React from "react";
import "../estilo/Login.css";
function Acceso() {
  const [campos, setCampos] = useState({
    correo_electronico: "",
    contrasenia: "",
  });
  const [error, setError] = useState("");
  //redirecionMIENTO

  const acceder = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/acceso", campos)
      .then((respuesta) => {
        if (respuesta.data.Estatus === "CORRECTO") {
          localStorage.setItem("usuario", respuesta.data);
          window.location.href = "/";
        } else {
          setError(respuesta.data.Error);
          console.log(error);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Encabezado />
      <form className="formulario" onSubmit={acceder}>
        <h1>LOGIN</h1>
        <div className="contenedor">
          <div className="input-contenedor">
            <i className="fas fa-user icon" />
            <input
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
            ingresar
          </button>
          <p>
            Al registrarte, aceptas nuestras Condiciones de uso y Política de
            privacidad.
          </p>
          <p>
            ¿No tienes una cuenta?{" "}
            <Link to="/registro" className="link">
              Registrate{" "}
            </Link>
          </p>
        </div>
      </form>
      <Pie />
    </>
  );
}
export default Acceso;
