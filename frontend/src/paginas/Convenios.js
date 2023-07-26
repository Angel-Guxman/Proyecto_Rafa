import React from "react";
import Encabezado from "../componentes/Encabezado";
import Pie from "../componentes/Pie";
import "../estilo/Convenios.css";
import convenio1 from "../imagen/convenios1.png";
import convenio2 from "../imagen/convenios2.png";
import convenio3 from "../imagen/convenios3.png";
import convenio4 from "../imagen/convenios4.png";

function Convenios() {
  return (
    <>
      <Encabezado />
      <div id="asociados">
        <h1 id="aso-titulo">Convenios</h1>
        <p id="aso-des">
          Contamos con más de 300 convenios con hoteles, establecimientos,
          servicios de transporte y estretenimiento a lo largo del Estado de
          Quintana Roo
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
      <Pie />
    </>
  );
}
export default Convenios;
