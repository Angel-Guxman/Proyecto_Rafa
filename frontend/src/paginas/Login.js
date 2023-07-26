import { useState } from "react";
import Pie from "../componentes/Pie";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Encabezado from "../componentes/Encabezado";
import React from "react";
import "../estilo/Login.css";

function Login() {
  const [campos, setCampos] = useState({
    correo_electronico: "",
    contrasenia: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const acceder = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/acceso", campos)
      .then((respuesta) => {
        if (respuesta.data.Estatus === "CORRECTO") {
          // Almacenar el ID del usuario en el almacenamiento local
          localStorage.setItem("usuarioId", respuesta.data.usuarioId);
          localStorage.setItem("usuario", respuesta.data);
          const nivelUsuario = respuesta.data.nivelUsuario;
          localStorage.setItem("nivelUsuario", nivelUsuario);
          nivelUsuario === 2 ? navigate("/dashboard") : navigate("/");
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
        <h1 className="login-ache">Iniciar Sesión</h1>
        {error && <p className="error-message">{error}</p>}
        <div className="contenedor-login">
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
          <p className="error-message">
            Al registrarte, aceptas nuestras Condiciones de uso y Política de
            privacidad.
          </p>
          <p className="error-message">
            ¿No tienes una cuenta?{" "}
            <Link to="/registro" className="link">
              Regístrate
            </Link>
          </p>
        </div>
      </form>
      <Pie />
    </>
  );
}

export default Login;
