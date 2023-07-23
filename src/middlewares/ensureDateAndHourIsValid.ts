import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { Schedule } from "../entities";

const ensureDateAndHourIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const hourValid = await scheduleRepository
    .createQueryBuilder("schedule")
    .where("schedule.realEstate = :realEstateId", {
      realEstateId: req.body.realEstateId,
    })
    .andWhere("schedule.hour = :hour", { hour: req.body.hour })
    .andWhere("schedule.date = :date", { date: req.body.date })
    .getOne();

  const UserValid = await scheduleRepository
    .createQueryBuilder("schedule")
    .where("schedule.user = :user", {
      user: res.locals.token.id,
    })
    .andWhere("schedule.hour = :hour", { hour: req.body.hour })
    .andWhere("schedule.date = :date", { date: req.body.date })
    .getOne();

  if (UserValid) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  if (hourValid) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  const hour = Number(req.body.hour.slice(0, 2));
  const minutes = Number(req.body.hour.slice(2));

  const d = new Date(req.body.date);
  let day = d.getDay();

  if (
    hour < 8 ||
    hour > 18 ||
    (hour == 18 && minutes > 0) ||
    (hour == 8 && minutes > 0)
  ) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  if (day == 0 || day == 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  return next();
};

export default ensureDateAndHourIsValidMiddleware;
