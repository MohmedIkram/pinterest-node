import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  avatar: {
    type: String,
  },
  name: {
    type: String,
  },
  age: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  resetToken: {
    type: String,
  },
  expiryTime: {
    type: String,
  },
});

export const Users = mongoose.model("User", userSchema);
