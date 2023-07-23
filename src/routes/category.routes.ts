import { Router } from "express";
import {
  createCategoryController,
  listCategoriesController,
  listCategoryRealEstatesController,
} from "../controllers/category.controller";
import ensureIsAdmin from "../middlewares/ensureIsAdmin";
import ensureNameIsUniqueMiddleware from "../middlewares/ensureNameIsUnique";

const categoryRoutes: Router = Router();
categoryRoutes.post(
  "",
  ensureIsAdmin,
  ensureNameIsUniqueMiddleware,
  createCategoryController
);
categoryRoutes.get("", listCategoriesController);
categoryRoutes.get("/:id/realEstate", listCategoryRealEstatesController);
export default categoryRoutes;
