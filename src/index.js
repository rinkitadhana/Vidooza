// require("dotenv").config({ path: "./env" })

import connectDB from "./db/index.js";
import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error :", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Listening on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error", err);
  });

//import express from "express"
// const app = express()
// ;(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on("error", (error) => {
//       console.log("Error :", error)
//       throw error
//     })
//     app.listen(process.env.PORT, () => {
//       console.log(`Listening on ${process.env.PORT}`)
//     })
//   } catch (error) {
//     console.log(error)
//     throw err
//   }
// })()
