import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entitie";

const listUsersService = async (): Promise<User[]> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const totalUsers: User[] = await userRepository.find();

  return totalUsers;
};
export { listUsersService };
