import Principal from "./paginas/Principal";
import Contacto from "./paginas/contacto";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/nosotros" element={<Nosotros />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registro" element={<Registro />}></Route>
          <Route path="/producto" element={<Producto />}></Route>

          <Route path="/categoria" element={<Categoria />} />
          <Route
            path="/obtenerproductos/:id_categoria"
            element={<ProductoPorCategoria />}
          />

          <Route path="/carrito" element={<Carrito />}></Route>
          <Route path="/convenios" element={<Convenios />}></Route>
          <Route path="/categoria" element={<Categoria />}></Route>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
