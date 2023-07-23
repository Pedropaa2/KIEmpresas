import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../error";

const listSchedulesService = async (id: number): Promise<RealEstate> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const totalRealEstates = await realEstateRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      schedules: {
        user: true,
      },
      address: true,
      category: true,
    },
  });
  if (!totalRealEstates) {
    throw new AppError("RealEstate not found", 404);
  }

  return totalRealEstates;
};
export { listSchedulesService };
