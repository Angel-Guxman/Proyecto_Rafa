import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditarUsuario = () => {
  const { id } = useParams();

  const [usuario, setUsuario] = useState({
    nombre_usuario: "",
    correo_electronico: "",
    contrasenia: "",
    nivel: "1",
    estatus: "1",
  });

  useEffect(() => {
    // Llamar al servidor para obtener los datos del usuario a editar
    axios
      .get(`http://localhost:8081/usuarios/${id}`)
      .then((response) => {
        setUsuario(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Llamar al servidor para actualizar el usuario
    axios
      .put(`http://localhost:8081/usuarios/${id}`, usuario)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Editar Usuario</h2>
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
        <label>Nivel:</label>
        <input
          type="number"
          value={usuario.nivel}
          onChange={(e) => setUsuario({ ...usuario, nivel: e.target.value })}
        />
        <br />
        <label>Estatus:</label>
        <input
          type="number"
          value={usuario.estatus}
          onChange={(e) => setUsuario({ ...usuario, estatus: e.target.value })}
        />
        <br />
        <button type="submit">Actualizar Usuario</button>
      </form>
    </div>
  );
};

export default EditarUsuario;
