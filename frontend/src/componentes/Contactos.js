import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../estilo/Contactos.css";
import Encabezado from "../componentes/Encabezado";
import Pie from "../componentes/Pie";

//Se requiere de instalar una libreria
// npm i @emailjs/browser --save

//Con el preventDefault cualquier evento que llega no se ejecuta
//Para la prcatica necesitamos una cuenta en emailjs
//En emailjs añadimos un nuevo servicio de gmail conectado a un correo electronico de nuestra preferencia
//Luego creamos un email Template
function Contactos() {
  const refForm = useRef();

  const handelSubmit = (event) => {
    event.preventDefault();
    //console.log(refForm.current)

    const serviceId = "service_qcllxrd";
    const templateId = "template_cn2tepj";
    //tercer parametro
    const apikey = "FXwz54TU2k1gurPO-";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apikey)
      .then((result) => {
        console.log(result.text);
        window.location.reload(); // Recargar la página después de enviar el formulario
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Encabezado />
      <div className="Contacto">
        <form
          className="formularioContacto"
          ref={refForm}
          action=""
          onSubmit={handelSubmit}
        >
          <div className="header-contact">
            <h1>Contáctanos</h1>
            <p>Por favor llena esta forma</p>
          </div>
          <div className="CajaFormulario">
            <fieldset className="field-name">
              <label className="symbol-required" htmlFor="">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre_usuario"
                type="text"
                placeholder="Ej: Gerry Dev"
                required
              />
            </fieldset>

            <fieldset className="field-email">
              <label className="symbol-required" name="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Ej: Gerry@gmail.com"
                required
              />
            </fieldset>

            <fieldset className="field-message">
              <label className="symbol-required" name="message">
                Mensaje
              </label>
              <textarea
                maxLength={500}
                placeholder="Ingresa tu mensaje"
                name="message"
                id="message"
                cols={30}
                rows={""}
              />
            </fieldset>
            <button className="btn-send">Enviar</button>
          </div>
        </form>
      </div>
      <Pie />
    </>
  );
}
export default Contactos;
