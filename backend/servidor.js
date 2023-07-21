import express from "express";
import mysql from "mysql";
import cors from "cors";
import jwt from "jsonwebtoken";

// Creamos la instancia de express
const app = express();
app.use(express.json());
app.use(cors());

// Creamos la conexión a la base de datos
const conexion = mysql.createConnection({
  server: "localhost",
  user: "root",
  password: "",
  database: "transporte",
});

// Verificamos la conexión
conexion.connect(function (error) {
  if (error) {
    console.log("No fue posible la conexión");
  } else {
    console.log("Conexión al servidor");
  }
});

// Iniciamos el servidor
app.listen(8081, () => {
  console.log("Servidor iniciado");
});

//seccion categoria

// Consultar la lista de categorías
app.get("/obtenerCategoria", (peticion, respuesta) => {
  const sql = "SELECT * FROM categorias";
  conexion.query(sql, (error, resultado) => {
    if (error) return respuesta.json({ mensaje: "Error" });
    return respuesta.json({ Estatus: "exitoso", contenido: resultado });
  });
});

// Obtener una categoría por ID
app.get("/obtenerCategoria/:id", (peticion, respuesta) => {
  const idCategoria = peticion.params.id;
  const sql = "SELECT * FROM categorias WHERE id_categoria = ?";
  conexion.query(sql, [idCategoria], (error, resultado) => {
    if (error) return respuesta.json({ Estatus: "Error" });
    if (resultado.length === 0)
      return respuesta.json({
        Estatus: "Error",
        Error: "Categoría no encontrada",
      });
    return respuesta.json({ Estatus: "exitoso", contenido: resultado[0] });
  });
});
// Crear una nueva categoría
app.post("/crearCategoria", (peticion, respuesta) => {
  const { nombre, descripcion, imagen } = peticion.body; // Obtener el nombre, descripción e imagen desde la solicitud
  const sql =
    "INSERT INTO categorias (nombre_categoria, descripcion_categoria, imagen) VALUES (?, ?, ?)";
  conexion.query(sql, [nombre, descripcion, imagen], (error, resultado) => {
    if (error) return respuesta.json({ Estatus: "Error" });
    return respuesta.json({ Estatus: "exitoso" });
  });
});
// Editar una categoría existente
app.put("/editarCategoria/:id", (peticion, respuesta) => {
  const idCategoria = peticion.params.id;
  const { nombre, descripcion } = peticion.body;
  const sql =
    "UPDATE categorias SET nombre_categoria = ?, descripcion_categoria = ? WHERE id_categoria = ?";
  conexion.query(
    sql,
    [nombre, descripcion, idCategoria],
    (error, resultado) => {
      if (error) return respuesta.json({ Estatus: "Error" });
      if (resultado.affectedRows === 0)
        return respuesta.json({
          Estatus: "Error",
          Error: "Categoría no encontrada",
        });
      return respuesta.json({ Estatus: "exitoso" });
    }
  );
});
// Eliminar una categoría
app.delete("/eliminarCategoria/:id", (peticion, respuesta) => {
  const idCategoria = peticion.params.id;
  const sql = "DELETE FROM categorias WHERE id_categoria = ?";
  conexion.query(sql, [idCategoria], (error, resultado) => {
    if (error) return respuesta.json({ Estatus: "Error" });
    if (resultado.affectedRows === 0)
      return respuesta.json({
        Estatus: "Error",
        Error: "Categoría no encontrada",
      });
    return respuesta.json({ Estatus: "exitoso" });
  });
});
//seccion de productos

// Consultar la lista de productos
app.get("/obtenerproductos", (peticion, respuesta) => {
  const sql = "SELECT * FROM productos";
  conexion.query(sql, (error, resultado) => {
    if (error) return respuesta.json({ mensaje: "Error" });
    return respuesta.json({ Estatus: "exitoso", contenido: resultado });
  });
});

// Obtener productos por categoría
app.get("/obtenerproductos/:id_categoria", (peticion, respuesta) => {
  const idCategoria = peticion.params.id_categoria;
  const sql = "SELECT * FROM productos WHERE id_categoria_id = ?";
  conexion.query(sql, [idCategoria], (error, resultado) => {
    if (error) return respuesta.json({ mensaje: "Error" });
    return respuesta.json({ Estatus: "exitoso", contenido: resultado });
  });
});
// Obtener un producto por ID
app.get("/obtenerproducto/:id", (peticion, respuesta) => {
  const idProducto = peticion.params.id;
  const sql = "SELECT * FROM productos WHERE id_producto = ?";
  conexion.query(sql, [idProducto], (error, resultado) => {
    if (error) return respuesta.json({ Estatus: "Error" });
    if (resultado.length === 0)
      return respuesta.json({
        Estatus: "Error",
        Error: "Producto no encontrado",
      });
    return respuesta.json({ Estatus: "exitoso", contenido: resultado[0] });
  });
});

// Crear un nuevo producto
app.post("/crearProducto", (peticion, respuesta) => {
  const { nombre, descripcion, precio, imagen, id_categoria_id } =
    peticion.body;
  const sql =
    "INSERT INTO productos (nombre_producto, descripcion_producto, precio, imagen, id_categoria_id) VALUES (?, ?, ?, ?, ?)";
  const valores = [nombre, descripcion, precio, imagen, id_categoria_id];
  conexion.query(sql, valores, (error, resultado) => {
    if (error) return respuesta.json({ mensaje: "Error" });
    return respuesta.json({ Estatus: "exitoso" });
  });
});

// Editar un producto existente
app.put("/editarProducto/:id", (peticion, respuesta) => {
  const idProducto = peticion.params.id;
  const { nombre, descripcion, precio, imagen } = peticion.body;
  const sql =
    "UPDATE productos SET nombre_producto = ?, descripcion_producto = ?, precio = ?, imagen = ? WHERE id_producto = ?";
  conexion.query(
    sql,
    [nombre, descripcion, precio, imagen, idProducto],
    (error, resultado) => {
      if (error) return respuesta.json({ mensaje: "Error" });
      return respuesta.json({ Estatus: "exitoso" });
    }
  );
});

// Eliminar un producto
app.delete("/eliminarproducto/:id", (peticion, respuesta) => {
  const idProducto = peticion.params.id;
  const sql = "DELETE FROM productos WHERE id_producto = ?";
  conexion.query(sql, [idProducto], (error, resultado) => {
    if (error) return respuesta.json({ Estatus: "Error" });
    if (resultado.affectedRows === 0)
      return respuesta.json({
        Estatus: "Error",
        Error: "Producto no encontrado",
      });
    return respuesta.json({ Estatus: "exitoso" });
  });
});
// Buscar productos por nombre
app.get("/buscarproductos/:nombre", (peticion, respuesta) => {
  const nombreProducto = peticion.params.nombre;
  const sql = "SELECT * FROM productos WHERE nombre_producto LIKE ?";
  conexion.query(sql, [`%${nombreProducto}%`], (error, resultado) => {
    if (error) return respuesta.json({ mensaje: "Error" });
    return respuesta.json({ Estatus: "exitoso", contenido: resultado });
  });
});

// Acceso a usuario (login)
app.post("/acceso", (peticion, respuesta) => {
  const sql =
    "SELECT * FROM usuarios WHERE correo_electronico = ? AND contrasenia = ?";
  console.log(peticion.body);
  conexion.query(
    sql,
    [peticion.body.correo_electronico, peticion.body.contrasenia],
    (error, resultado) => {
      if (error) return respuesta.json({ mensaje: "Error en la consulta" });
      if (resultado.length > 0) {
        const token = jwt.sign({ usuario: "administrador" }, "juan", {
          expiresIn: "1d",
        });
        respuesta.setHeader("Set-Cookie", `token=${token}`); // Agregar la cookie como cabecera de respuesta
        return respuesta.json({ Estatus: "CORRECTO", Usuario: token });
      } else {
        return respuesta.json({
          Estatus: "Error",
          Error: "Usuario o contraseña incorrecta",
        });
      }
    }
  );
});
// Acceso a administrador (login)
app.post("/admin-acceso", (peticion, respuesta) => {
  const sql =
    "SELECT * FROM usuarios WHERE correo_electronico = ? AND contrasenia = ? AND nivel = ?";
  console.log(peticion.body);
  conexion.query(
    sql,
    [peticion.body.correo_electronico, peticion.body.contrasenia, 2], // Agrega el nivel 2 como parámetro de la consulta
    (error, resultado) => {
      if (error) return respuesta.json({ mensaje: "Error en la consulta" });
      if (resultado.length > 0) {
        const usuario = resultado[0];
        const token = jwt.sign({ usuario }, "secreto", { expiresIn: "1d" });
        respuesta.json({ Estatus: "CORRECTO", Usuario: usuario, Token: token });
      } else {
        return respuesta.json({
          Estatus: "Error",
          Error:
            "Usuario o contraseña incorrecta o no tienes permisos suficientes",
        });
      }
    }
  );
});

// Registro de usuarios
app.post("/registrar", (peticion, respuesta) => {
  const sql =
    "INSERT INTO usuarios (nombre_usuario, correo_electronico, contrasenia) VALUES (?, ?, ?)";
  conexion.query(
    sql,
    [
      peticion.body.nombre_usuario,
      peticion.body.correo_electronico,
      peticion.body.contrasenia,
    ],
    (error, resultado) => {
      if (error) {
        console.log(error);
        return respuesta.json({ mensaje: "Error en la consulta" });
      } else {
        return respuesta.json({ Estatus: "CORRECTO" });
      }
    }
  );
});

//seccion Usuarios (crud)
// Ruta para obtener todos los usuarios
app.get("/usuarios", (req, res) => {
  const sql = "SELECT * FROM usuarios";
  conexion.query(sql, (error, resultados) => {
    if (error) {
      return res.json({ mensaje: "Error al obtener los usuarios" });
    }
    return res.json(resultados);
  });
});

// Ruta para obtener un usuario por su id
app.get("/usuarios/:id", (req, res) => {
  const idUsuario = req.params.id;
  const sql = "SELECT * FROM usuarios WHERE id_usuario = ?";
  conexion.query(sql, [idUsuario], (error, resultado) => {
    if (error || resultado.length === 0) {
      return res.json({
        Estatus: "Error",
        Error: "Usuario no encontrado",
      });
    }
    return res.json(resultado[0]);
  });
});

// Ruta para agregar un nuevo usuario
app.post("/usuarios", (req, res) => {
  const nuevoUsuario = req.body;
  const sql = "INSERT INTO usuarios SET ?";
  conexion.query(sql, nuevoUsuario, (error, resultado) => {
    if (error) {
      return res.json({ mensaje: "Error al agregar el usuario" });
    }
    return res.json({ Estatus: "exitoso" });
  });
});

// Ruta para actualizar un usuario existente
app.put("/usuarios/:id", (req, res) => {
  const idUsuario = req.params.id;
  const usuarioActualizado = req.body;
  const sql = "UPDATE usuarios SET ? WHERE id_usuario = ?";
  conexion.query(sql, [usuarioActualizado, idUsuario], (error, resultado) => {
    if (error || resultado.affectedRows === 0) {
      return res.json({
        Estatus: "Error",
        Error: "Usuario no encontrado",
      });
    }
    return res.json({ Estatus: "exitoso" });
  });
});

// Ruta para eliminar un usuario por su id
app.delete("/usuarios/:id", (req, res) => {
  const idUsuario = req.params.id;
  const sql = "DELETE FROM usuarios WHERE id_usuario = ?";
  conexion.query(sql, [idUsuario], (error, resultado) => {
    if (error || resultado.affectedRows === 0) {
      return res.json({
        Estatus: "Error",
        Error: "Usuario no encontrado",
      });
    }
    return res.json({ Estatus: "exitoso" });
  });
});
