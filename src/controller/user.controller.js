import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../model/task/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const { name, username, email, password } = req.body;
  if ([name, username, email.password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required!");
  }
  const existedUser = User.findOne({ $or: [{ email }, { username }] });
  if (existedUser) {
    throw new ApiError(409, "User already exist!");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
  let avatar = "";
  if (avatarLocalPath) {
    avatar = await uploadOnCloudinary(avatarLocalPath);
    avatar = avatar.url
  }

  const user = await User.create({name,username:username.toLowerCase(),email,avatar:avatar,password})

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  )

  if(!createdUser){
    throw new ApiError(500,"Something went wrong while registering the user!")
  }

  return res.status(201).json(
    new ApiResponse(201,createdUser,"User registered successfully!")
  )
});

export { registerUser };
