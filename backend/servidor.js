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

// Consultar la lista de categorías
app.get("/obtenerCategoria", (peticion, respuesta) => {
  const sql = "SELECT * FROM categorias";
  conexion.query(sql, (error, resultado) => {
    if (error) return respuesta.json({ mensaje: "Error" });
    return respuesta.json({ Estatus: "exitoso", contenido: resultado });
  });
});

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
        respuesta.cookie(token);
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
