// Carrito.js
import React from "react";
import Encabezado from "../componentes/Encabezado";
import Pie from "../componentes/Pie";
import "../estilo/Carrito.css";
import { useCarrito } from "../contexts/CarritoContext"; // Importar el contexto del carrito

function Carrito() {
  const { carrito, eliminarProducto } = useCarrito();

  return (
    <>
      <Encabezado />
      <section>
        <h2>Carrito de compras</h2>
        <div className="cart">
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Eliminar</th>{" "}
                {/* Agregar una columna para eliminar productos */}
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
                <td>
                  $
                  {carrito.reduce(
                    (total, producto) =>
                      total + producto.precio * producto.cantidad,
                    0
                  )}
                </td>
              </tr>
            </tfoot>
          </table>
          <a href="/" className="btn">
            Pagar
          </a>
        </div>
      </section>
      <Pie />
    </>
  );
}

export default Carrito;
