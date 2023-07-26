import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../estilo/AgregarUsuario.css";
import Pie from "../componentes/Pie";
import Encabezado from "../componentes/Encabezado";

const AgregarUsuario = () => {
  const navegacion = useNavigate();

  const [formulario, setFormulario] = useState({
    nombre_usuario: "",
    correo_electronico: "",
    contrasenia: "",
    nivel: "1",
    estatus: "1",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Llamar al servidor para agregar un nuevo usuario
    axios
      .post("http://localhost:8081/usuarios", formulario)
      .then((response) => {
        console.log(response.data);
        navegacion("/admin/usuarios"); // Redirigir a la lista de usuarios después de agregar
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Encabezado />
      <div className="AddUser">
        <h2>Agregar Usuario</h2>
        <form className="Form-AddUsser" onSubmit={handleSubmit}>
          <label className="user-for">Nombre de Usuario:</label>
          <input
            className="EstiloUsuario"
            type="text"
            value={formulario.nombre_usuario}
            onChange={(e) =>
              setFormulario({ ...formulario, nombre_usuario: e.target.value })
            }
          />
          <br />
          <label className="user-for" id="use-use">
            Correo Electrónico:
          </label>
          <input
            className="EstiloUsuario"
            type="email"
            value={formulario.correo_electronico}
            onChange={(e) =>
              setFormulario({
                ...formulario,
                correo_electronico: e.target.value,
              })
            }
          />
          <br />
          <label className="user-for">Contraseña:</label>
          <input
            className="EstiloUsuario"
            type="password"
            value={formulario.contrasenia}
            onChange={(e) =>
              setFormulario({ ...formulario, contrasenia: e.target.value })
            }
          />
          <br />
          <label className="user-for">Nivel:</label>
          <input
            className="EstiloUsuario"
            type="number"
            value={formulario.nivel}
            onChange={(e) =>
              setFormulario({ ...formulario, nivel: e.target.value })
            }
          />
          <br />
          <label className="user-for">Estatus:</label>
          <input
            className="EstiloUsuario"
            type="number"
            value={formulario.estatus}
            onChange={(e) =>
              setFormulario({ ...formulario, estatus: e.target.value })
            }
          />
          <br />
          <button type="submit" className="agregar-usu">
            Agregar
          </button>
        </form>
      </div>
      <Pie />
    </>
  );
};

export default AgregarUsuario;
