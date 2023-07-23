import { Request, Response } from "express";
import {
  TCategories,
  TCategoryRequest,
} from "../interfaces/category.interfaces";
import { categorySchemaRequest } from "../schemas/category.schemas";
import { Category } from "../entities";
import { createCategoryService } from "../services/category/createCategory.service";
import { listCategoriesService } from "../services/category/listCategories.service";
import { listCategoryRealEstatesService } from "../services/category/listCategoryByRealEstate.service";

const createCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categoryData: TCategoryRequest = categorySchemaRequest.parse(req.body);

  const newCategory: Category = await createCategoryService(categoryData);

  return res.status(201).json(newCategory);
};

const listCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response: TCategories = await listCategoriesService();

  return res.status(200).json(response);
};

const listCategoryRealEstatesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = Number(req.params.id);
  const response: Category = await listCategoryRealEstatesService(id);

  return res.status(200).json(response);
};

export {
  createCategoryController,
  listCategoriesController,
  listCategoryRealEstatesController,
};
