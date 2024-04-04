import mongoose, { Schema } from "mongoose";

export const ProductoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  },
});

export const ProductoModel = mongoose.model("Producto", ProductoSchema);
