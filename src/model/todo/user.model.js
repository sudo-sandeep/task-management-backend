import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required."],
      unique: [true, "Username must be unique."],
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: [true, "Email must be unique."],
    },
    password: {
      type: String,
      required: [true, "Password is required."],
      min: [6, "Password must be atleast 6 character long."],
      max: [12, "Password must be less than 12 characters."],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
