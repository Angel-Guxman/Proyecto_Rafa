import React from "react";
import { Route } from "react-router-dom";

function RutaPrivada({ isUsuarioAdmin, Navigate, Element, ...rest }) {
  return (
    <Route
      {...rest}
      element={
        isUsuarioAdmin() ? (
          <Element />
        ) : (
          <Navigate to="/" replace={true} /> // Redirige al usuario normal a otra ruta, en este caso, la página de inicio "/"
        )
      }
    />
  );
}

export default RutaPrivada;
