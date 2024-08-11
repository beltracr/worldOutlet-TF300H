import { Router } from "express";
import { getAdmin, postAdmin, putAdminById, deleteAdminById, getAdminById } from "../controllers/admin.controllers.js";

const adminRouter = Router();

adminRouter.get('/',getAdmin);
adminRouter.post('/', postAdmin);
adminRouter.delete('/:id', deleteAdminById);
adminRouter.put('/:id', putAdminById);
adminRouter.get('/:id', getAdminById)

export default adminRouter;