import { Router } from "express";
import { getAdmin, postAdmin, deleteAdminById } from "../controllers/admin.controllers.js";
import auth from "../middlewares/auth.js";

const adminRouter = Router();

adminRouter.get('/',auth("Admin"),  getAdmin);
adminRouter.post('/',auth("Admin"), postAdmin);
adminRouter.delete('/:id', auth("Admin"), deleteAdminById);


export default adminRouter;