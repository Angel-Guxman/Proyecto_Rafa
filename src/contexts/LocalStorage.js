// localStorage.js
const STORAGE_KEY = "carrito";

export function saveCarritoToLocalStorage(carrito) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(carrito));
}

export function getCarritoFromLocalStorage() {
  const carrito = localStorage.getItem(STORAGE_KEY);
  return carrito ? JSON.parse(carrito) : [];
}
