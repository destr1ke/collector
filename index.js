import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});
