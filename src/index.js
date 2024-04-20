import dotenv from "dotenv";
dotenv.config();
import dbConnect from "./db/index.js";
import { app } from "./app.js";

app.get("/", function (req, res) {
  res.send("Hello World");
});

dbConnect().then(() =>{
  app.on("error",(error)=>{
    console.log("Error : ",error)
    throw error
  })
  app.listen(process.env.PORT || 80, "0.0.0.0", () => {
    console.log(`Listenting at http://localhost:${process.env.PORT || 80}`);
  })}
);

