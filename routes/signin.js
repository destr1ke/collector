import express from "express";
import newUser from "../models/user.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await newUser.findOne({ email, password }).exec();

    if (user !== null) {
      if (user.status === "blocked") {
        return res.json("You are blocked!");
      } else {
        return res.json(user);
      }
    } else {
      return res.json("Invalid email or password");
    }
  } catch (err) {
    return res.json({ Error: err.message });
  }
});
export default router;
