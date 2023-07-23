import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { User } from "../entities";

const ensureEmailIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (user && req.body.name) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};

export default ensureEmailIsValidMiddleware;
