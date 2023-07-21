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
import AdminLogin from "./paginas/AdminLogin";
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
// Resto de tus importaciones...

function App() {
  const isUsuarioAdmin = () => {
    const nivelUsuario = localStorage.getItem("nivelUsuario");
    return nivelUsuario === "2"; // Retorna true si el nivel de usuario es "2" (admin), de lo contrario, retorna false
  };

  // Componente para renderizar la página del dashboard solo si el usuario es administrador
  const DashboardPrivado = () => {
    return isUsuarioAdmin() ? <Dashboard /> : <Navigate to="/" />;
  };

  return (
    <CarritoProvider>
      {" "}
      {/* Asegúrate de envolver todo el árbol de componentes con el CarritoProvider */}
      <>
        <BrowserRouter>
          <Routes>
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

            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin/productos" element={<Productodos />} />
            <Route path="/admin/categorias" element={<Crudcategorias />} />

            <Route path="/admin/compra" element={<Principal />} />

            <Route path="/admin/productos/nuevo" element={<ProductoCreate />} />

            <Route path="/dashboard" element={<DashboardPrivado />} />

            <Route
              path="/admin/categorias/editar/:id"
              element={<CategoriaEdit />}
            />
            <Route
              path="/admin/categorias/nueva"
              element={<CategoriaCreate />}
            />

            <Route
              path="/admin/productos/editar/:id"
              element={<ProductoEdit />}
            />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/usuarios" element={<UsuariosList />} />
            <Route
              path="/admin/usuarios/agregar"
              element={<AgregarUsuario />}
            />
            <Route
              path="/admin/usuarios/editar/:id"
              element={<EditarUsuario />}
            />
            <Route path="/proceso-compra" component={ProcesoCompraCrud} />
          </Routes>
        </BrowserRouter>
      </>
    </CarritoProvider>
  );
}

export default App;
