import React from "react";
import Encabezado from "../componentes/Encabezado";
import "../estilo/Contacto.css";
import redes from "../imagen/RedesSociales.png";
import Pie from "../componentes/Pie";

function Contacto() {
  return (
    <>
      <Encabezado />
      <div className="container">
        <div id="conte" className="conte">
          <section className="Contactanos" id="Contactanos">
            <h1 id="conth">Contactanos</h1>
            <p>
              Si tienes alguna pregunta, comentario o consulta, no dudes en
              ponerte en contacto con nosotros. En Urban Transport, valoramos la
              retroalimentación de nuestros clientes y estamos aquí para
              ayudarte. Támbien puedes encontrarnos fisicamente en nuestras
              oficinas en Soriana, Avenida Nichupte Mz 16 LT 1-08 Modulo
              Interior Tienda.
              <br /> Teléfono: +123456789
              <br />
              Correo: info@urbantransport.com
            </p>
            <div id="imared">
              <img src={redes} className="Redes" id="redes" alt="" />
            </div>
            <p>
              Al contactarnos puedes cotizarnos o apartar una fecha con
              anterioridad para algun evento de tu empresa o un plan de
              vacaciones.
            </p>
            <a href="." id="pixa">
              https://pixabay.com/es/photos/paisaje-sol-playa-mar-sunrise-546343/
            </a>
          </section>
        </div>
      </div>
      <Pie />
    </>
  );
}
export default Contacto;
