import { Router } from "express";
import { getAdmin, postAdmin, putAdminById, deleteAdminById, getAdminById } from "../controllers/admin.controllers.js";

const adminRouter = Router();

adminRouter.get('/',getAdmin);
adminRouter.post('/', postAdmin);
adminRouter.delete('/:id', deleteAdminById);
adminRouter.delete('/:id', putAdminById);
adminRouter.delete('/:id', getAdminById)

export default adminRouter;