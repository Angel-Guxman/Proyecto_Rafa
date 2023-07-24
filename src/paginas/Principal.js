import React from "react";
import Encabezado from "../componentes/Encabezado";
import Pie from "../componentes/Pie";
import "../estilo/Principal.css";
import playita from "../imagen/inicioplaya.jpg";
import barquito from "../imagen/barcourban.jpg";
import { Link } from "react-router-dom";
import whattsap from "../imagen/what.png";
import costa from "../imagen/fondo02.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgUnoCarrusel from "../imagen/galeria-uno.png";
import ImgDosCarrusel from "../imagen/galeria-dos.png";
import ImgTresCarrusel from "../imagen/galeria-tres.png";
import ImgCuatroCarrusel from "../imagen/galeria-cuatro.png";
import TransporteUno from "../imagen/transporte-uno.png";
import TransporteDos from "../imagen/transporte-dos.png";
import TransporteTres from "../imagen/transporte-tres.png";
import TransporteCuatro from "../imagen/transporte-cuatro.png";
import TransporteCinco from "../imagen/transporte-cinco.png";
import TransporteSeis from "../imagen/transporte-seis.png";

function Principal() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Encabezado />
      <div className="cont-urban">
        <div id="princip">
          <section className="contenido" id="contenido">
            <h1 id="bien">Bienvenidos a Urban Transport</h1>
            <img src={barquito} id="img01" className="img01" alt="" />
          </section>
          <p className="text01" id="text01">
            Servicio de transporte por todo el Estado de Quintana Roo
          </p>
          <section className="parte2">
            <img src={playita} id="atarde" alt="atardecer"></img>

            <p className="text02" id="text02">
              Servicios a Costa Mujeres, Riviera Maya, Zona Hotelera, Playa del
              Carmen, Tulum y más.
              <br />
              Ya sea que desees explorar pintorescos paisajes naturales, visitar
              sitios históricos o sumergirte en la cultura local.
            </p>
            <p className="text03">
              Desde playas de arena blanca hasta antiguas ruinas mayas, te
              ofrecemos un servicio de transporte confiable y seguro para que
              puedas disfrutar plenamente de todas las maravillas que Cancún
              tiene para ofrecer.
            </p>
            <img src={costa} id="costa" alt="..."></img>
          </section>
          <div class="deconstructed">
            Atracciones más Populares
            <div> Atracciones más Populares</div>
            <div>Atracciones más Populares</div>
            <div>Atracciones más Populares</div>
            <div>Atracciones más Populares</div>
          </div>
          <div className="papito">
            <div className="carruse">
              <Slider {...settings}>
                <div>
                  <img src={ImgUnoCarrusel} alt="Imagen 1" id="img-carru-uno" />
                  <p>Playas del caribe</p>
                </div>
                <div>
                  <img src={ImgDosCarrusel} alt="Imagen 2" id="img-carru-dos" />
                  <p>Tours Chichén Itzá</p>
                </div>
                <div>
                  <img
                    src={ImgTresCarrusel}
                    alt="Imagen 3"
                    id="img-carru-tres"
                  />
                  <p>Punta Corcho</p>
                </div>
                <div>
                  <img
                    src={ImgCuatroCarrusel}
                    alt="Imagen 4"
                    id="img-carru-cuatro"
                  />
                  <p>La Isla shopping mall</p>
                </div>
              </Slider>
            </div>
          </div>

          <div id="transporte-ahora">
            <Link to="/contacto" className="BotonPrincipal">
              Pide tu transporte ahora
            </Link>
            <img src={whattsap} className="whattsap" alt="" />
          </div>
          <div className="unidad-destacada">
            <h2>Proximamente</h2>
            <div className="unidad-cartas">
              <div class="trans-uno">
                <img src={TransporteUno} class="img-top-uno" alt="..." />
                <div class="trans-cuerpo">
                  <p class="trans-texto">
                    TR-Liner <br />
                    Un autobús de alta velocidad que recorre largas distancias
                    por tierra con una tecnología avanzada. Cuenta con un diseño
                    aerodinámico.
                  </p>
                </div>
              </div>
              <div class="trans-uno">
                <img src={TransporteDos} class="img-top-uno" alt="..." />
                <div class="trans-cuerpo">
                  <p class="trans-texto">
                    SafeTransport <br />
                    Estos vehículos están equipados con tecnología autónoma y
                    sistemas de seguridad avanzados para garantizar una
                    conducción segura y eficiente
                  </p>
                </div>
              </div>
              <div class="trans-uno">
                <img src={TransporteTres} class="img-top-uno" alt="..." />
                <div class="trans-cuerpo">
                  <p class="trans-texto">
                    Oceánica <br />
                    Cruceros de lujo con todas las comodidades para disfrutar
                    los más exóticos destinos turísticos por mar.
                  </p>
                </div>
              </div>
              <div class="trans-uno">
                <img src={TransporteCuatro} class="img-top-uno" alt="..." />
                <div class="trans-cuerpo">
                  <p class="trans-texto">
                    CostaExpress <br />
                    Modernos Ferrys para conectar de forma rápida y confiable
                    las islas con tierra firme.
                  </p>
                </div>
              </div>
              <div class="trans-uno">
                <img src={TransporteCinco} class="img-top-uno" alt="..." />
                <div class="trans-cuerpo">
                  <p class="trans-texto">
                    AquaRover <br />
                    Un innovador Yate eléctrico generado con energía solar. El
                    sistema de propulsión eléctrica lo hacen altamente eficiente
                    y ecológico.
                  </p>
                </div>
              </div>
              <div class="trans-uno">
                <img src={TransporteSeis} class="img-top-uno" alt="..." />
                <div class="trans-cuerpo">
                  <p class="trans-texto">
                    Tesla Model 3 <br />
                    Estos vehículos electrico están equipados con tecnología
                    autónoma y sistemas de seguridad avanzados para garantizar
                    una conducción segura y eficiente.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="cont">
            <h1>¡Tranporte en cancun!</h1>
            <p className="cont-can">
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
