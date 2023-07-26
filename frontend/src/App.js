// App.js
import React from "react";
import { CarritoProvider } from "./contexts/CarritoContext"; // Importar el CarritoProvider
import Principal from "./paginas/Principal";
import Contacto from "./paginas/contacto";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nosotros from "./paginas/Nosotros";
import Login from "./paginas/Login";
import Registro from "./paginas/Registro";
import Producto from "./paginas/Productos";
import Carrito from "./paginas/Carrito";
import Convenios from "./paginas/Convenios";
import Categoria from "./paginas/Categoria";
import ProductoPorCategoria from "./componentes/ProductoPorCategoria";
import Dashboard from "./componentes/Dashbord";
import Crudcategorias from "./componentes/CategoriaList";
import CategoriaEdit from "./componentes/CategoriaEdit";
import CategoriaCreate from "./componentes/CategoriaCreate";
import ProductoCreate from "./componentes/ProductoCreate";
import ProductoEdit from "./componentes/ProductoEdit";
import Productodos from "./paginas/Productosdos";
import UsuariosList from "./componentes/UsuariosList";
import EditarUsuario from "./componentes/EditarUsuario";
import AgregarUsuario from "./componentes/AgregarUsuario";
import ProcesoCompraCrud from "./componentes/ProcesoCompraCrud";
import VerPedidos from "./componentes/VerPedidos";
import CrearPedido from "./componentes/CrearPedido";
import Contactos from "./componentes/Contactos";

function App() {
  const isUsuarioAdmin = () => {
    const nivelUsuario = localStorage.getItem("nivelUsuario");
    return nivelUsuario === "2"; // Retorna true si el nivel de usuario es "2" (admin), de lo contrario, retorna false
  };

  // Componente para renderizar las página solo si el usuario es administrador
  const DashboardPrivado = () => {
    return isUsuarioAdmin() ? <Dashboard /> : <Navigate to="/" />;
  };
  //PRODUCTOS
  const ProductosPrivado = () => {
    return isUsuarioAdmin() ? <Productodos /> : <Navigate to="/" />;
  };
  const ProductosEditarPrivado = () => {
    return isUsuarioAdmin() ? <ProductoEdit /> : <Navigate to="/" />;
  };
  const ProductosCrearPrivado = () => {
    return isUsuarioAdmin() ? <ProductoCreate /> : <Navigate to="/" />;
  };
  //CATEGORIAS
  const CategoriasPrivado = () => {
    return isUsuarioAdmin() ? <Crudcategorias /> : <Navigate to="/" />;
  };
  const CategoriasEditarPrivado = () => {
    return isUsuarioAdmin() ? <CategoriaEdit /> : <Navigate to="/" />;
  };
  const CategoriasCrearPrivado = () => {
    return isUsuarioAdmin() ? <CategoriaCreate /> : <Navigate to="/" />;
  };
  //USUARIOS
  const UsuariosPrivado = () => {
    return isUsuarioAdmin() ? <UsuariosList /> : <Navigate to="/" />;
  };
  const UsuariosEditarPrivado = () => {
    return isUsuarioAdmin() ? <EditarUsuario /> : <Navigate to="/" />;
  };
  const UsuariosCrearPrivado = () => {
    return isUsuarioAdmin() ? <AgregarUsuario /> : <Navigate to="/" />;
  };
  //PEDIDOS
  const PedidosEliminarPrivado = () => {
    return isUsuarioAdmin() ? <VerPedidos /> : <Navigate to="/" />;
  };
  const PedidosCrearPrivado = () => {
    return isUsuarioAdmin() ? <CrearPedido /> : <Navigate to="/" />;
  };

  return (
    <CarritoProvider>
      {" "}
      {/* Asegúrate de envolver todo el árbol de componentes con el CarritoProvider */}
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/contactos" element={<Contactos />} />

            <Route path="/" element={<Principal />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/producto" element={<Producto />} />

            <Route path="/categoria" element={<Categoria />} />
            <Route
              path="/obtenerproductos/:id_categoria"
              element={<ProductoPorCategoria />}
            />

            <Route path="/carrito" element={<Carrito />} />
            <Route path="/convenios" element={<Convenios />} />
            <Route path="/categoria" element={<Categoria />} />

            {/* RUTAS PRIVADAS */}
            {/* DASHBOARD */}
            <Route path="/dashboard" element={<DashboardPrivado />} />
            {/* RUTAS PRODUCTOS PRIVADOS */}
            <Route path="/admin/productos" element={<ProductosPrivado />} />
            <Route
              path="/admin/productos/editar/:id"
              element={<ProductosEditarPrivado />}
            />
            <Route
              path="/admin/productos/nuevo"
              element={<ProductosCrearPrivado />}
            />
            {/* RUTAS CATEGORIAS PRIVADOS */}

            <Route path="/admin/categorias" element={<CategoriasPrivado />} />

            <Route
              path="/admin/categorias/editar/:id"
              element={<CategoriasEditarPrivado />}
            />

            <Route
              path="/admin/categorias/nueva"
              element={<CategoriasCrearPrivado />}
            />
            {/* RUTAS USUARIOS PRIVADOS */}
            <Route path="/admin/usuarios" element={<UsuariosPrivado />} />

            <Route
              path="/admin/usuarios/editar/:id"
              element={<UsuariosEditarPrivado />}
            />
            <Route
              path="/admin/usuarios/agregar"
              element={<UsuariosCrearPrivado />}
            />
            {/* RUTAS PEDIDOS PRIVADOS */}
            <Route path="/admin/pedidos" element={<PedidosEliminarPrivado />} />
            <Route
              path="/admin/pedidos/crear"
              element={<PedidosCrearPrivado />}
            />

            {/* RUTAS PROCESO DE COMPRA PRIVADOS */}
            <Route path="/admin/compra" element={<Principal />} />

            <Route path="/proceso-compra" element={<ProcesoCompraCrud />} />
          </Routes>
        </BrowserRouter>
      </>
    </CarritoProvider>
  );
}

export default App;
