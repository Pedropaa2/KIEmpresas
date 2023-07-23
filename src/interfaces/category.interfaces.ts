import { z } from "zod";
import {
  categoriesSchemaResponse,
  categorySchema,
  categorySchemaRequest,
} from "../schemas/category.schemas";

type TCategoryRequest = z.infer<typeof categorySchemaRequest>;

type TCategory = z.infer<typeof categorySchema>;

type TCategories = z.infer<typeof categoriesSchemaResponse>;

export { TCategory, TCategoryRequest, TCategories };
