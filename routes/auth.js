import express from "express"
import { AuthRouterPost } from "../controllers/auth.js"
export const AuthRouter=express.Router()

AuthRouter.post('/',AuthRouterPost)