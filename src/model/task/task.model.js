import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required!"],
      unique: [true, "Task with this title already exist!"],
      trim:true
    },
    description:{
        type: String,
        trim:true
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    priority:{
      type: String,
      enum: ["P1","P2","P3"],
      required:[true, "Priority is required!"],
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
  },
  { timestamps: true }
);

export const Task = mongoose.model("Task", taskSchema);
