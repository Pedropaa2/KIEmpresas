import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../error";

const listCategoryRealEstatesService = async (
  id: number
): Promise<Category> => {
  const realEstateRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const totalRealEstates = await realEstateRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      realEstate: true,
    },
  });
  if (!totalRealEstates) {
    throw new AppError("Category not found", 404);
  }
  return totalRealEstates;
};
export { listCategoryRealEstatesService };
