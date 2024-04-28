import { Router } from "express";
import { registerUser } from "../controller/user.controller.js";
import { uploadFile } from "../middleware/multer.middleware.js";

const router = Router();

router.route("/register").post(
  uploadFile.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
  ]),
  registerUser
);

export default router;
