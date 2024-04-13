import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required!"],
      unique: [true, "Todo with this title already exist!"],
    },
    description:{
        type: String,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
