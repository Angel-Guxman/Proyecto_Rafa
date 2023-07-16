import React from "react";
import Encabezado from "../componentes/Encabezado";
import Pie from "../componentes/Pie";
import "../estilo/Carrito.css";

function Carrito() {
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Transporte de pequeña capacidad</td>
                <td>$500.00</td>
                <td>
                  <input type="number" defaultValue={2} min={0} />
                </td>
                <td>$20.00</td>
              </tr>
              <tr>
                <td>Transporte de mediana capacidad</td>
                <td>$750.00</td>
                <td>
                  <input type="number" defaultValue={1} min={0} />
                </td>
                <td>$500.00</td>
              </tr>
              <tr>
                <td>Transporte de gran capacidad</td>
                <td>$750</td>
                <td>
                  <input type="number" defaultValue={3} min={0} />
                </td>
                <td>$1000.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}>Total:</td>
                <td>$2250.00</td>
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
