import React from "react";
import Encabezado from "../componentes/Encabezado";
import Pie from "../componentes/Pie";
import "../estilo/Principal.css";
import playita from "../imagen/inicioplaya.jpg";
import barquito from "../imagen/iniciobarco.png";
import { Link } from "react-router-dom";
function Principal() {
  return (
    <>
      <Encabezado />
      <div className="container">
        <div id="principal">
          <section className="contenido" id="contenido">
            <h1 id="bien">Bienvenidos a Urban Transport</h1>
            <img src={barquito} id="img01" className="img01" alt="" />
          </section>
          <p className="text01" id="text01">
            Servicio de transporte por todo el Estado de Quintana Roo
          </p>
          <section className="parte2">
            <div id="video">
              <img src={playita} id="atarde" alt="atardecer"></img>
            </div>
            <p className="text02" id="text02">
              Servicios a Costa Mujeres, Riviera Maya, Zona Hotelera, Playa del
              Carmen, Tulum y más.
              <br />
              Ya sea que desees explorar pintorescos paisajes naturales, visitar
              sitios históricos o sumergirte en la cultura local.
            </p>
            <Link to="/contacto" className="BotonPrincipal">
              Pide tu transporte ahora
            </Link>
            <img src="Imagen/whattsap.png" className="whattsap" alt="" />
          </section>
          <div id="cont">
            <h1>!Tranporte en cancun!</h1>
            <p>
              Disfruta del mejor servicio profesional de transporte. Simplifica
              tu experiencia evitando largas esperas y permítenos ofrecerte
              nuestros servicios de traslado en diferentes categorías. <br />
              Al reservar nuestros servicios de traslado desde el aeropuerto
              hacia tu destino, evitarás pagar tarifas más altas por el servicio
              de taxi en el Aeropuerto de Cancún. Además, podrás disfrutar del
              mejor servicio desde el momento de tu llegada mientras te llevamos
              a tu destino.
              <br />
              Ahora ya conoces las ventajas de reservar nuestro servicio de
              transporte.
            </p>
          </div>
        </div>
      </div>
      <Pie />
    </>
  );
}
export default Principal;
