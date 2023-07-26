import React from "react";
import Encabezado from "../componentes/Encabezado";
import "../estilo/Contacto.css";
import redes from "../imagen/RedesSociales.png";
import Pie from "../componentes/Pie";
import ContactoDos from "../imagen/contactodos.png";
import { Link } from "react-router-dom";

function Contacto() {
  return (
    <>
      <Encabezado />

      <div className="contacto-uno">
        <div className="Contactanos" id="Contactanos">
          <div className="conth-tit">
            <h1 id="conth">Contáctanos</h1>
          </div>
          <p>
            Si tienes alguna pregunta, comentario o consulta, no dudes en
            ponerte en contacto con nosotros. En Urban Transport, valoramos la
            retroalimentación de nuestros clientes y estamos aquí para ayudarte.
            Támbien puedes encontrarnos fisicamente en nuestras oficinas en
            Soriana, Avenida Nichupte Mz 16 LT 1-08 Modulo Interior Tienda.
            <br /> Teléfono: +123456789
            <br />
            Correo: info@urbantransport.com
          </p>

          <div className="imared">
            <img src={redes} alt="" className="redes" />
            <img src={ContactoDos} alt="" className="redes" />
          </div>
          <p>
            Al contactarnos puedes cotizarnos o apartar una fecha con
            anterioridad para algun evento de tu empresa o un plan de
            vacaciones.
          </p>
          <div className="comentario">
            <Link to="/contactos" className="link">
              Enviar Comentario
            </Link>
          </div>
          <div className="pixa-uno">
            <a href="." id="pixa">
              https://pixabay.com/es/photos/paisaje-sol-playa-mar-sunrise-546343/
            </a>
          </div>
        </div>
      </div>

      <Pie />
    </>
  );
}
export default Contacto;
