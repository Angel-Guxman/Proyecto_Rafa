import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Encabezado from "../componentes/Encabezado";
import Pie from "../componentes/Pie";

function AdminLogin() {
  const [campos, setCampos] = useState({
    correo_electronico: "",
    contrasenia: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const acceder = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/admin-acceso", campos)
      .then((respuesta) => {
        if (respuesta.data.Estatus === "CORRECTO") {
          localStorage.setItem("nivelUsuario", "2");

          navigate("/dashboard");
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
        <h1>Admin Login</h1>
        {error && <p className="error-message">{error}</p>}
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
            Ingresar
          </button>
          <p>
            Al registrarte, aceptas nuestras Condiciones de uso y Política de
            privacidad.
          </p>
          <p>
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

export default AdminLogin;
