import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entitie";

const updateUsersService = async (
  userData: User,
  id: number
): Promise<User | null> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData: User | null = await userRepository.findOneBy({
    id: id,
  });

  const newUserData = userRepository.create({
    ...oldUserData,
    ...userData,
  });

  await userRepository.save(newUserData);

  const returnUser: User | null = await userRepository.findOneBy({
    id: id,
  });

  return returnUser;
};
export { updateUsersService };
