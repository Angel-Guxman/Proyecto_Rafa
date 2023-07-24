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
  const [carrito, setCarrito] = useState(getCarritoFromLocalStorage());
  const [cantidadProductos, setCantidadProductos] = useState(0); // Estado para mantener el conteo del número de productos en el carrito

  useEffect(() => {
    saveCarritoToLocalStorage(carrito);
    setCantidadProductos(
      carrito.reduce((total, producto) => total + producto.cantidad, 0)
    );
  }, [carrito]);

  const agregarProducto = (producto) => {
    const productoEnCarrito = carrito.find(
      (item) => item.id_producto === producto.id_producto
    );

    if (productoEnCarrito) {
      // Si el producto ya está en el carrito, incrementamos la cantidad
      const nuevoCarrito = carrito.map((item) =>
        item.id_producto === producto.id_producto
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCarrito(nuevoCarrito);
    } else {
      // Si el producto no está en el carrito, lo agregamos con cantidad 1
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }

    // Actualizamos la cantidad total de productos en el carrito
    setCantidadProductos(cantidadProductos + 1);
  };

  const eliminarProducto = (id) => {
    const productoEnCarrito = carrito.find((item) => item.id_producto === id);

    if (productoEnCarrito) {
      if (productoEnCarrito.cantidad > 1) {
        // Si la cantidad del producto es mayor a 1, decrementamos la cantidad
        const nuevoCarrito = carrito.map((item) =>
          item.id_producto === id
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        );
        setCarrito(nuevoCarrito);
      } else {
        // Si la cantidad del producto es igual a 1, lo eliminamos del carrito
        const nuevoCarrito = carrito.filter((item) => item.id_producto !== id);
        setCarrito(nuevoCarrito);
      }

      // Actualizamos la cantidad total de productos en el carrito
      setCantidadProductos(cantidadProductos - 1);
    }
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarProducto, eliminarProducto, cantidadProductos }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
