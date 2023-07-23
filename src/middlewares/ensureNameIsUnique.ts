import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { Category } from "../entities";

const ensureNameIsUniqueMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const categorieRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category = await categorieRepository.findOne({
    where: {
      name: req.body.name,
    },
  });

  if (category) {
    throw new AppError("Category already exists", 409);
  }

  return next();
};

export default ensureNameIsUniqueMiddleware;
