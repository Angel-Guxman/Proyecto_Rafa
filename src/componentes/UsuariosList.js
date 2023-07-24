import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UsuariosList = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Llamar al servidor para obtener la lista de usuarios
    axios
      .get("http://localhost:8081/usuarios")
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleEliminarUsuario = (id) => {
    // Llamar al servidor para eliminar el usuario por su id
    axios
      .delete(`http://localhost:8081/usuarios/${id}`)
      .then((response) => {
        // Actualizar la lista de usuarios después de eliminar
        setUsuarios(usuarios.filter((usuario) => usuario.id_usuario !== id));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id_usuario}>
            {usuario.nombre_usuario} - {usuario.correo_electronico}
            <Link to={`/admin/usuarios/editar/${usuario.id_usuario}`}>
              Editar
            </Link>
            <button onClick={() => handleEliminarUsuario(usuario.id_usuario)}>
              Eliminar
            </button>
          </li>
        ))}
        <Link to="/admin/usuarios/agregar"> Agregar Nuevo Usuario</Link>
        <Link to="/dashboard"> Salir</Link>
      </ul>
    </div>
  );
};

export default UsuariosList;
