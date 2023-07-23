import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { TCategories } from "../../interfaces/category.interfaces";

const listCategoriesService = async (): Promise<TCategories> => {
  const userRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const totalCategories: TCategories = await userRepository.find();

  return totalCategories;
};
export { listCategoriesService };
