import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h2>Agregar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre de Usuario:</label>
        <input
          type="text"
          value={formulario.nombre_usuario}
          onChange={(e) =>
            setFormulario({ ...formulario, nombre_usuario: e.target.value })
          }
        />
        <br />
        <label>Correo Electrónico:</label>
        <input
          type="email"
          value={formulario.correo_electronico}
          onChange={(e) =>
            setFormulario({ ...formulario, correo_electronico: e.target.value })
          }
        />
        <br />
        <label>Contraseña:</label>
        <input
          type="password"
          value={formulario.contrasenia}
          onChange={(e) =>
            setFormulario({ ...formulario, contrasenia: e.target.value })
          }
        />
        <br />
        <label>Nivel:</label>
        <input
          type="number"
          value={formulario.nivel}
          onChange={(e) =>
            setFormulario({ ...formulario, nivel: e.target.value })
          }
        />
        <br />
        <label>Estatus:</label>
        <input
          type="number"
          value={formulario.estatus}
          onChange={(e) =>
            setFormulario({ ...formulario, estatus: e.target.value })
          }
        />
        <br />
        <button type="submit">Agregar Usuario</button>
      </form>
    </div>
  );
};

export default AgregarUsuario;
