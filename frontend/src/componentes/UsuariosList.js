import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../estilo/UsuarioList.css";
import Encabezado from "./Encabezado";
import Pie from "./Pie";

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
    <>
      <Encabezado />
      <div className="ListaUusarios">
        <h2>Lista de Usuarios</h2>
        <ul className="ListaUsuarioUL">
          <Link className="AgregarUsuario" to="/admin/usuarios/agregar"> Agregar Nuevo Usuario</Link>
          <Link className="SalirDashboard" to="/dashboard"> Salir</Link>
          {usuarios.map((usuario) => (
            <li className="li-usuario" key={usuario.id_usuario}>
              {usuario.nombre_usuario} - {usuario.correo_electronico}
              <Link className="Editar-Lista-Usuario" to={`/admin/usuarios/editar/${usuario.id_usuario}`}>
                Editar
              </Link>
              <button onClick={() => handleEliminarUsuario(usuario.id_usuario)}>
                Eliminar
              </button>
            </li>
          ))}

        </ul>
      </div>
      <Pie />
    </>
  );
};

export default UsuariosList;
