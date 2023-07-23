import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { TCategoryRequest } from "../../interfaces/category.interfaces";

const createCategoryService = async (
  categoryData: TCategoryRequest
): Promise<Category> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: Category = categoryRepository.create(categoryData);

  await categoryRepository.save(category);

  return category;
};
export { createCategoryService };
