import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";

const ensureIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);

  const user: Repository<User> = AppDataSource.getRepository(User);

  const findUser = await user.findOne({
    where: { id },
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }
  return next();
};

export default ensureIdExistsMiddleware;
