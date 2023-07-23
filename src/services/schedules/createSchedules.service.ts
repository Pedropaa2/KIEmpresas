import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { TScheduleRequest } from "../../interfaces/shcedules.interfaces";
import { AppError } from "../../error";

const createScheduleService = async (
  scheduleData: TScheduleRequest,
  id: number
): Promise<void> => {
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const user = await userRepository.findOne({
    where: {
      id: id,
    },
  });

  const realEstate = await realEstateRepository.findOne({
    where: {
      id: scheduleData.realEstateId,
    },
  });

  if (!realEstate) {
    throw new AppError("RealEstate not found", 404);
  }
  const createSchedule = scheduleRepository.create({
    ...scheduleData,
    realEstate: realEstate,
    user: user!,
  });

  await scheduleRepository.save(createSchedule);
};
export { createScheduleService };
