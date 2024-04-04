import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

export const connectDb = async () => {
  const db = await mongoose.connect(process.env.CONNECTION_STRING!);
  return db;
};
