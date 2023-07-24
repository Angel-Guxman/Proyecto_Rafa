import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EliminarUsuario = () => {
  const { id } = useParams();

  const handleEliminar = () => {
    // Llamar al servidor para eliminar el usuario
    axios
      .delete(`http://localhost:8081/usuarios/${id}`)
      .then((response) => {
        console.log(response.data);
        // Redirigir a la lista de usuarios después de eliminar uno
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>¿Estás seguro que deseas eliminar este usuario?</h2>
      <button onClick={handleEliminar}>Eliminar</button>
    </div>
  );
};

export default EliminarUsuario;
