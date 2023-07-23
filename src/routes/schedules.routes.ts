import { Router } from "express";
import {
  createSchedulesController,
  listSchedulesController,
} from "../controllers/schedules.controller";
import ensureIsAdminOrOwner from "../middlewares/ensureIsOwnerOrAdmin";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid";
import { schedulesSchemaRequest } from "../schemas/schedules.schemas";
import ensureDateAndHourIsValidMiddleware from "../middlewares/ensureDateAndHourIsValid";
import ensureIsAdmin from "../middlewares/ensureIsAdmin";
import ensureTokenIsValid from "../middlewares/ensureTokenIsValid";

const scheduleRoutes: Router = Router();

scheduleRoutes.post(
  "",
  ensureTokenIsValid,
  ensureDataIsValidMiddleware(schedulesSchemaRequest),
  ensureDateAndHourIsValidMiddleware,
  createSchedulesController
);
scheduleRoutes.get("/realEstate/:id", ensureIsAdmin, listSchedulesController);

export default scheduleRoutes;
