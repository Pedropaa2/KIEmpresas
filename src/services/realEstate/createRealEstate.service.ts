import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { tRealEstateRequest } from "../../interfaces/realState.interfaces";
import { Address, Category, RealEstate } from "../../entities";
import { AppError } from "../../error";

const createRealStateService = async (
  realEstateData: tRealEstateRequest
): Promise<RealEstate> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const AddressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const { address, categoryId, ...realEstateBody } = realEstateData;

  const category = await categoryRepository.findOne({
    where: {
      id: categoryId,
    },
  });

  if (!category) {
    throw new AppError("Invalid categorie");
  }
  const existingAddress = await AddressRepository.findOne({
    where: {
      city: address.city,
      number: address.number!,
      state: address.state,
      street: address.street,
      zipCode: address.zipCode,
    },
  });

  if (existingAddress) {
    throw new AppError("Address already exists", 409);
  }
  const createAdress = AddressRepository.create(address);

  await AddressRepository.save(createAdress);

  const createRealEstate = realEstateRepository.create({
    ...realEstateData,
    address: createAdress,
    category,
  });

  await realEstateRepository.save(createRealEstate);

  return createRealEstate;
};
export { createRealStateService };
