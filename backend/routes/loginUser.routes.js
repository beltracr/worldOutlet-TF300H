import { Router } from "express";
import loginUserService from "../services/loginusers.services.js";

const loginUserRouter = Router();
loginUserRouter.post("/",loginUserService);

export default loginUserRouter;