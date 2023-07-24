import React, { useState } from "react";
import axios from "axios";

const NuevoUsuario = () => {
  const [usuario, setUsuario] = useState({
    nombre_usuario: "",
    correo_electronico: "",
    contrasenia: "",
    nivel: "1",
    estatus: "1",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Llamar al servidor para crear un nuevo usuario
    axios
      .post("http://localhost:8081/usuarios", usuario)
      .then((response) => {
        console.log(response.data);
        // Actualizar la lista de usuarios después de crear uno nuevo
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Nuevo Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre de Usuario:</label>
        <input
          type="text"
          value={usuario.nombre_usuario}
          onChange={(e) =>
            setUsuario({ ...usuario, nombre_usuario: e.target.value })
          }
        />
        <br />
        <label>Correo Electrónico:</label>
        <input
          type="email"
          value={usuario.correo_electronico}
          onChange={(e) =>
            setUsuario({ ...usuario, correo_electronico: e.target.value })
          }
        />
        <br />
        <label>Contraseña:</label>
        <input
          type="password"
          value={usuario.contrasenia}
          onChange={(e) =>
            setUsuario({ ...usuario, contrasenia: e.target.value })
          }
        />
        <br />
        <button type="submit">Guardar Usuario</button>
      </form>
    </div>
  );
};

export default NuevoUsuario;
