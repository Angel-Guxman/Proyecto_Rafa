import React from "react";
import Encabezado from "../componentes/Encabezado";
import Pie from "../componentes/Pie";
import "../estilo/Comprarealizada.css";

function Comprarealizada() {
  return (
    <>
      <Encabezado />
      <div className="comprarealizada">
        <h1>¡Compra realizada con éxito!</h1>
        <p>
          Gracias por tu compra. Hemos recibido tu pedido y lo estamos
          procesando. Te enviaremos más información sobre el envío en breve.
        </p>
        <img src="realizado.png" alt="Checkmark" id="reali-img" />
      </div>
      <Pie />
    </>
  );
}
export default Comprarealizada;
