import { Router } from "express";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid";
import {
  userSchemaRequest,
  userSchemaUpdateRequest,
} from "../schemas/users.schemas";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import ensureEmailIsValidMiddleware from "../middlewares/ensureEmailIsValid";
import ensureIsAdmin from "../middlewares/ensureIsAdmin";
import ensureIsAdminOrOwner from "../middlewares/ensureIsOwnerOrAdmin";
import ensureIdExistsMiddleware from "../middlewares/ensureIdExists";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchemaRequest),
  ensureEmailIsValidMiddleware,
  createUserController
);

userRoutes.get("", ensureIsAdmin, listUsersController);

userRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(userSchemaUpdateRequest),
  ensureIdExistsMiddleware,
  ensureIsAdminOrOwner,
  updateUserController
);
userRoutes.delete(
  "/:id",
  ensureIdExistsMiddleware,
  ensureIsAdmin,
  deleteUserController
);
export default userRoutes;
