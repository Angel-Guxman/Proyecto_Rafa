import React, { useState } from "react";
import axios from "axios";
import "../estilo/VerPedidos.css";


function CrearPedido() {
  const [pedido, setPedido] = useState({
    id_usuario_id: "", // Aquí puedes obtener el ID del usuario logueado desde el almacenamiento local o mediante algún contexto
    detalles: "",
    total: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPedido({ ...pedido, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realizar una solicitud HTTP para crear el nuevo pedido en el servidor
    axios
      .post("http://localhost:8081/crear-pedido", pedido)
      .then((respuesta) => {
        if (respuesta.data.Estatus === "CORRECTO") {
          // El pedido se creó exitosamente, puedes redirigir al usuario a la página de VerPedidos
          console.log("Pedido creado exitosamente");
        } else {
          console.log("Error al crear el pedido");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="Listadidos">
      <div className="crear-pedido">
        <h2>Crear Nuevo Pedido</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID Usuario:</label>
          <input
            className="pedido-usuario"
            type="number"
            name="id_usuario_id"
            value={pedido.id_usuario_id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Detalles:</label>
          <input
            className="pedido-usuario"
            type="text"
            name="detalles"
            value={pedido.detalles}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Total:</label>
          <input
            className="pedido-usuario"
            type="number"
            name="total"
            value={pedido.total}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Crear Pedido</button>
      </form>
    </div>
  );
}

export default CrearPedido;
