import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import signup from "./routes/signup.js";
import signin from "./routes/signin.js";

dotenv.config();
const app = express();

app.use(express.json());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );

app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.use("/api/signup", signup);
app.use("/api/signin", signin);

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error.message);
  });
