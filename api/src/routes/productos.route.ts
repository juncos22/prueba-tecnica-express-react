import { Router } from "express";
import {
  eliminarProducto,
  guardarProducto,
  modificarProducto,
  mostrarProductos,
  traerProducto,
} from "../controllers/productos.controller";

const productosRoute = Router();
productosRoute.post("/products", guardarProducto);
productosRoute.get("/products", mostrarProductos);
productosRoute.get("/products/:id", traerProducto);
productosRoute.put("/products/:id", modificarProducto);
productosRoute.delete("/products/:id", eliminarProducto);

export default productosRoute;
