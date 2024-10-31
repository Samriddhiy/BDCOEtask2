import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js";


const registerUser = asyncHandler ( async (req, res) => {
   //get user details
   //validation- not empty
   // check if user already exists
   // check for images,
   //upload them to cloudinary 
   // create user object- create entry in db
   //remove password and refresh token field from response 
   // check for user creation 
   // return response
   
   const {fullname , email , username , password } = req.body
   if(
      [fullname , email, username, password].some((field) =>
      field?.trim() ==="")
   ){
      throw new ApiError (400, "All fields are required")
   }


   const existedUser = User.findOne({
      $or: [{ username }, { email }]
   })

   if(existedUser) {
      throw new ApiError (409 , "User with email and username already exist")
   }

   const imageLocalPath = req.files?.image[0]?.path;

   const image = await uploadOnCloudinary(imageLocalPath)

   const user = await User.create({
      fullname,
      image: image?.url || "",
      email,
      password,
      username : username.toLowercase()
   })

   const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
   )

   if(!createdUser) {
      throw new ApiError(500, "Something went wrong while registering the user")
   }

   return res.status(201).json(
      new ApiResponse(200, createdUser, "User registered successfully")
   )
   
})


export {
     registerUser,
}