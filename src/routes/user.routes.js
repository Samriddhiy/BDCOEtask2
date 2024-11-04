import { Router } from "express";
import {loginUser ,logoutUser ,  registerUser , searchMovies } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "image",
            maxCount: 1
        }
    ]),
    registerUser
)

router.route("/login").post(loginUser)
// secured routes

router.route("/logout").post(verifyJWT , logoutUser) 

router.route("/search/movies").get( searchMovies );
 
export default router 