import React, { useState, useEffect } from "react";
import axios from "axios";
import CrearPedido from "./CrearPedido";
import { Link } from "react-router-dom";
import "../estilo/VerPedidos.css";
import Encabezado from "../componentes/Encabezado";
import Pie from "../componentes/Pie";

function VerPedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  useEffect(() => {
    // Obtener la lista de pedidos desde el servidor
    axios.get("http://localhost:8081/pedidos").then((respuesta) => {
      setPedidos(respuesta.data);
    });
  }, []);

  // Función para eliminar un pedido por su ID
  const eliminarPedido = (idPedido) => {
    // Mostrar la notificación de confirmación antes de eliminar
    const confirmarEliminar = window.confirm("¿Seguro quieres eliminar este pedido?");
    if (confirmarEliminar) {
      axios
        .delete(`http://localhost:8081/pedidos/${idPedido}`)
        .then((respuesta) => {
          // Actualizar la lista de pedidos después de eliminar uno
          if (respuesta.data.Estatus === "CORRECTO") {
            setPedidos(pedidos.filter((pedido) => pedido.id_pedido !== idPedido));
            console.log("Pedido eliminado exitosamente");
          } else {
            console.log("Error al eliminar el pedido");
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <Encabezado />
      <div className="pedidos-total">
        <div className="Lista-de-Pedidos">

        <h2>Lista de Pedidos</h2>
        </div>
        <table className="PedidosTabla">
          {/* Mostrar la lista de pedidos */}
          <thead className="PedidosThead">
            <tr className="TRpedidos">
              <th>ID Pedido</th>
              <th>ID Usuario</th>
              <th>Fecha</th>
              <th>Detalles</th>
              <th>Total</th>
              <th>Acciones</th> {/* Columna para los botones de eliminar */}
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => (
              <tr className="pedidosTR" key={pedido.id_pedido}>
                <td>{pedido.id_pedido}</td>
                <td>{pedido.id_usuario_id}</td>
                <td>{pedido.fecha}</td>
                <td>{pedido.detalles}</td>
                <td>{pedido.total}</td>
                <td>
                  {/* Botón para eliminar el pedido */}
                  <button
                    className="eliminarPedido"
                    onClick={() => eliminarPedido(pedido.id_pedido)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="BotonesBottom">
          <button
            className="CrearPedido"
            onClick={() => setMostrarFormulario(!mostrarFormulario)}
          >
            {mostrarFormulario ? "Ocultar Formulario" : "Crear Nuevo Pedido"}
          </button>
          {/* Mostrar el formulario de creación de pedidos si mostrarFormulario es true */}
          {mostrarFormulario && <CrearPedido />}
        </div>
        {/* Botón para mostrar/ocultar el formulario de creación de pedidos */}
      </div>
      <Pie />
    </>
  );
}

export default VerPedidos;

