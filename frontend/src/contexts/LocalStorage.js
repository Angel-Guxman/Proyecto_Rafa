// LocalStorage.js
const STORAGE_KEY = "carrito";

export function saveCarritoToLocalStorage(usuarioId, carrito) {
  localStorage.setItem(STORAGE_KEY + usuarioId, JSON.stringify(carrito));
}

export function getCarritoFromLocalStorage(usuarioId) {
  const carrito = localStorage.getItem(STORAGE_KEY + usuarioId);
  return carrito ? JSON.parse(carrito) : [];
}
