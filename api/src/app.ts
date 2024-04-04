import express from "express";
import { connectDb } from "./db";

const app = express();

app.listen(3000, () => {
  connectDb()
    .then((db) => {
      console.log("Conectado a MongoDB en el servidor", db.connection.host);
    })
    .catch((err: any) => {
      console.error("Error en la conexion a MongoDB", err);
    });
  console.log("Server is running on port 3000");
});
