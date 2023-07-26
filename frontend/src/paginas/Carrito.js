// Carrito.js
import React from "react";
import Encabezado from "../componentes/Encabezado";
import Pie from "../componentes/Pie";
import "../estilo/Carrito.css";
import { useCarrito } from "../contexts/CarritoContext"; // Importar el contexto del carrito
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
function Carrito() {
  // Función para crear el pedido y enviar los datos al servidor
  const crearPedido = () => {
    const usuarioId = localStorage.getItem("usuarioId"); // Obtener el ID del usuario del almacenamiento local
    const detallesPedido = carrito
      .map((producto) => `${producto.nombre_producto} x ${producto.cantidad}`)
      .join(", "); // Obtener los detalles del pedido concatenando los nombres de los productos y las cantidades

    // Objeto con los datos del pedido
    const pedidoData = {
      id_usuario_id: usuarioId,
      detalles: detallesPedido,
      total: totalCarrito,
    };

    // Enviar el pedido al servidor
    axios
      .post("http://localhost:8081/crear-pedido", pedidoData)
      .then((respuesta) => {
        if (respuesta.data.Estatus === "CORRECTO") {
          // Aquí puedes redirigir al usuario a una página de confirmación o hacer cualquier otra acción necesaria
          console.log("Pedido creado exitosamente");
        } else {
          console.log("Error al crear el pedido");
        }
      })
      .catch((error) => console.log(error));
  };

  const { carrito, eliminarProducto } = useCarrito();

  // Calcular el total del carrito
  const totalCarrito = carrito.reduce(
    (total, producto) => total + producto.precio * producto.cantidad,
    0
  );

  return (
    <>
      <Encabezado />
      <PayPalScriptProvider
        options={{
          "client-id":
            "AePOO9euXGHtJ8fmDPtG_cnhGYj3YvWefcw_3FBAW9SxfI90jfdLKCwjitanclGOZ_aYlw5jGuJqKa9k",
        }}
      >
        <section id="cart-ba">
          <h2>Carrito de compras</h2>
          <div className="cart">
            <table>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {carrito.map((producto) => (
                  <tr key={producto.id_producto}>
                    <td>{producto.nombre_producto}</td>
                    <td>${producto.precio}</td>
                    <td>{producto.cantidad}</td>
                    <td>${producto.precio * producto.cantidad}</td>
                    <td>
                      <button
                        onClick={() => eliminarProducto(producto.id_producto)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={4}>Total:</td>
                  <td>${totalCarrito}</td>
                </tr>
                <tr>
                  <td colSpan={5}>
                    <PayPalButtons
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          purchase_units: [
                            {
                              amount: {
                                value: totalCarrito,
                              },
                            },
                          ],
                        });
                      }}
                      onClick={crearPedido} // Llama a la función crearPedido al hacer clic en el botón de PayPal
                    />
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>
      </PayPalScriptProvider>
      <Pie />
    </>
  );
}

export default Carrito;
