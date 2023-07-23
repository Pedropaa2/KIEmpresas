import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";

const listRealEstateService = async (): Promise<RealEstate[]> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const totalRealEstates: RealEstate[] = await realEstateRepository.find({
    relations: {
      address: true,
    },
  });

  return totalRealEstates;
};
export { listRealEstateService };
