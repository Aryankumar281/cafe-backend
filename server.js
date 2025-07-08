import express from "express";
import mongoose from "mongoose";
import Router from "./routes/userRoute.js";
import dotenv from 'dotenv';
dotenv.config(); 

const app = express();
app.use(express.json());
const db= process.env.DB_NAME
mongoose.connect(db).then(() => {
  app.listen(8080, () => {
    console.log("Server started");
  });
});



app.use("/api/users",Router)