import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

//Initializing the app
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Connected to database!")
  app.listen(process.env.PORT || 80, "0.0.0.0", () => {
    console.log(`Listenting at http://localhost:${process.env.PORT || 80}`);
  });
});
