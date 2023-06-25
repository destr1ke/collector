import mongoose from "mongoose";

const newUser = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  signup_date: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: "user",
    required: true,
  },
  status: {
    type: String,
    default: "active",
    required: true,
  },
});

export default mongoose.model("users", newUser);
