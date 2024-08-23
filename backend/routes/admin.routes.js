import { Router } from "express";
import { getAdmin, postAdmin, deleteAdminById } from "../controllers/admin.controllers.js";
import auth from "../middlewares/auth.js";

const adminRouter = Router();

adminRouter.get('/', auth("admin"), getAdmin);
adminRouter.post('/', auth("admin"), postAdmin);
adminRouter.delete('/:id', auth("admin"), deleteAdminById);


export default adminRouter;