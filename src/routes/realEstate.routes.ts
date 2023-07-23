import { Router } from "express";
import {
  createRealStateController,
  listRealEstatesController,
} from "../controllers/realEstate.controllers";
import ensureIsAdmin from "../middlewares/ensureIsAdmin";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid";
import { realEstateSchemaRequest } from "../schemas/realEstate.schemas";

const realEstateRoutes: Router = Router();
realEstateRoutes.post(
  "",
  ensureDataIsValidMiddleware(realEstateSchemaRequest),
  ensureIsAdmin,
  createRealStateController
);
realEstateRoutes.get("", listRealEstatesController);
export default realEstateRoutes;
