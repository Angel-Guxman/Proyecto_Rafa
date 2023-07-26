import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../estilo/AgregarUsuario.css";
import Pie from "./Pie";
import Encabezado from "./Encabezado";

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
        // Mostrar notificación de éxito al actualizar el usuario
        toast.success("Usuario actualizado correctamente");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Encabezado />
      <div className="EditarUsuario">
        <h2>Editar Usuario</h2>
        <form className="Form-AddUsser" onSubmit={handleSubmit}>
          <label className="user-for">Nombre de Usuario:</label>
          <input
            className="EstiloUsuario"
            type="text"
            value={usuario.nombre_usuario}
            onChange={(e) =>
              setUsuario({ ...usuario, nombre_usuario: e.target.value })
            }
          />
          <br />
          <label className="correo-usser">Correo Electrónico:</label>
          <input
            className="EstiloUsuario"
            type="email"
            value={usuario.correo_electronico}
            onChange={(e) =>
              setUsuario({ ...usuario, correo_electronico: e.target.value })
            }
          />
          <br />
          <label className="user-for">Contraseña:</label>
          <input
            className="EstiloUsuario"
            type="password"
            value={usuario.contrasenia}
            onChange={(e) =>
              setUsuario({ ...usuario, contrasenia: e.target.value })
            }
          />
          <br />
          <label className="user-for">Nivel:</label>
          <select
            className="EstiloUsuario"
            value={usuario.nivel}
            onChange={(e) => setUsuario({ ...usuario, nivel: e.target.value })}
          >
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <br />
          <label className="user-for">Estatus:</label>
          <select
            className="EstiloUsuario"
            value={usuario.estatus}
            onChange={(e) => setUsuario({ ...usuario, estatus: e.target.value })}
          >
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <br />
          <button className="EditUsser" type="submit">
            Actualizar Usuario
          </button>
          <Link className="EditUsser" to="/admin/usuarios">
            salir
          </Link>
        </form>
      </div>
      <Pie />
      <ToastContainer /> {/* Agregar el ToastContainer en la parte superior de la aplicación */}
    </>
  );
};

export default EditarUsuario;


