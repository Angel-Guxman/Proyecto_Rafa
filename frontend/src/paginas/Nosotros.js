import React from "react";
import "../estilo/Nosotros.css";
import Encabezado from "../componentes/Encabezado";
import somos from "../imagen/SomosImagen.png";
import Pie from "../componentes/Pie";
import { Link } from "react-router-dom";

function Nosotros() {
  return (
    <>
      <Encabezado />
      <div id="nosotros" className="nosotros">
        <div id="quienes">
          <h1>¿Quienes somos?</h1>
        </div>
        <div id="central">
          <div className="servicio" id="servicio">
            Urban Transport es una empresa de servicios de taxi, traslado del
            aeropuerto a tu hotel, transportación en cancún y todo el Estado de
            Quintana Roo desde 5 hasta 500 pasajeros.
          </div>

          <p id="parrafodos">
            Ofrecemos de Cancún a playa del Carmen, transporte del aeropuerto
            hasta tu hotel, zona hotelera y traslado de Cancún a Tulum y Holbox.
          </p>
        </div>
        <div id="imagensomos">
          <img src={somos} id="ado" alt="" />
        </div>
        <div id="conv">
          <Link to="/convenios" className="Convenios">
            Convenios
          </Link>
        </div>
        <div id="conductor">
          <p>
            Nos enorgullece contar con una flota de vehículos modernos y
            confortables, diseñados específicamente para satisfacer las
            necesidades de nuestros clientes durante sus recorridos turísticos.
            Nuestro equipo de conductores altamente capacitados y amigables está
            comprometido con la seguridad y el confort de los pasajeros en todo
            momento, brindando un servicio profesional y personalizado.
          </p>
        </div>
      </div>
      <Pie />
    </>
  );
}
export default Nosotros;
