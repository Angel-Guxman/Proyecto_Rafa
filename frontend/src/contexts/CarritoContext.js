// CarritoContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  saveCarritoToLocalStorage,
  getCarritoFromLocalStorage,
} from "./LocalStorage";

const CarritoContext = createContext();

export function useCarrito() {
  return useContext(CarritoContext);
}

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [cantidadProductos, setCantidadProductos] = useState(0);
  const [usuarioId, setUsuarioId] = useState(null); // Utilizar un estado para el usuarioId
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false); // Estado para indicar si el usuario está autenticado

  useEffect(() => {
    // Obtener el ID del usuario desde el almacenamiento local
    const id = localStorage.getItem("usuarioId");
    if (id) {
      setUsuarioId(id);
      setUsuarioAutenticado(true); // Si hay un usuarioId en el almacenamiento local, entonces el usuario está autenticado
      // Obtener el carrito del almacenamiento local al cargar la página
      setCarrito(getCarritoFromLocalStorage(id));
    }
  }, []);

  useEffect(() => {
    // Actualizar el almacenamiento local cuando el carrito cambie
    if (usuarioId) {
      saveCarritoToLocalStorage(usuarioId, carrito);
      setCantidadProductos(
        carrito.reduce((total, producto) => total + producto.cantidad, 0)
      );
    }
  }, [carrito, usuarioId]);

  const agregarProducto = (producto) => {
    const productoEnCarrito = carrito.find(
      (item) => item.id_producto === producto.id_producto
    );

    if (productoEnCarrito) {
      const nuevoCarrito = carrito.map((item) =>
        item.id_producto === producto.id_producto
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
    setCantidadProductos(cantidadProductos + 1);
  };

  const eliminarProducto = (id) => {
    const productoEnCarrito = carrito.find((item) => item.id_producto === id);

    if (productoEnCarrito) {
      if (productoEnCarrito.cantidad > 1) {
        const nuevoCarrito = carrito.map((item) =>
          item.id_producto === id
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        );
        setCarrito(nuevoCarrito);
      } else {
        const nuevoCarrito = carrito.filter((item) => item.id_producto !== id);
        setCarrito(nuevoCarrito);
      }
      setCantidadProductos(cantidadProductos - 1);
    }
  };

  const cerrarSesion = () => {
    // Limpiar el almacenamiento local y restablecer los estados cuando el usuario cierra sesión
    localStorage.removeItem("usuarioId");
    setUsuarioId(null);
    setUsuarioAutenticado(false);
    setCarrito([]);
    setCantidadProductos(0);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarProducto,
        eliminarProducto,
        cantidadProductos,
        usuarioAutenticado,
        cerrarSesion,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
