import React from "react";
import "../estilo/Nosotros.css";
import Encabezado from "../componentes/Encabezado";
import somos from "../imagen/nosotros-urban.png";
import Pie from "../componentes/Pie";
import { Link } from "react-router-dom";
import convenio1 from "../imagen/convenios1.png";
import convenio2 from "../imagen/convenios2.png";
import convenio3 from "../imagen/convenios3.png";
import convenio4 from "../imagen/convenios4.png";

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
            Urban Transport es una destacada empresa de servicios de transporte
            en Cancún, especializada en taxis, traslados desde el aeropuerto a
            tu hotel y transporte a lo largo del hermoso Estado de Quintana Roo.
            Nuestro compromiso es brindar un servicio de primera clase,
            asegurando la comodidad y seguridad de nuestros clientes en cada
            trayecto.
          </div>

          <p id="parrafodos" className="parrafodos">
            Ofrecemos de Cancún a playa del Carmen, transporte del aeropuerto
            hasta tu hotel, zona hotelera y traslado de Cancún a Tulum y Holbox.
            Con conductores altamente capacitados y vehículos modernos y bien
            equipados, nos esforzamos por ofrecer una experiencia de viaje
            excepcional.
          </p>
        </div>
        <div id="imagensomos">
          <img src={somos} id="ado" alt="" />
        </div>
        <div id="asociados">
          <div className="as-conv">
            <h1 id="aso-titulo" className="Convenios">
              Convenios
            </h1>
          </div>
          <p id="aso-desc">
            Contamos con más de 300 convenios con hoteles, establecimientos,
            servicios de transporte y estretenimiento a lo largo del Estado de
            Quintana Roo.
          </p>
          <div id="aso-compo">
            <div>
              <p>Cyan Cancún Resort</p>
              <img src={convenio1} id="aso-imagen" alt=""></img>
            </div>
            <div>
              <p>La Villa Du Golf A Cancún</p>
              <img src={convenio2} id="aso-imagen" alt=""></img>
            </div>
            <div>
              <p>Crystal Urban Cancún</p>
              <img src={convenio3} id="aso-imagen" alt=""></img>
            </div>
            <div>
              <p>Calypso Hotel Cancún</p>
              <img src={convenio4} id="aso-imagen" alt=""></img>
            </div>
          </div>
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
