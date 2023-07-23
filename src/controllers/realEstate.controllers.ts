import { Request, Response } from "express";
import { tRealEstateRequest } from "../interfaces/realState.interfaces";
import { createRealStateService } from "../services/realEstate/createRealEstate.service";
import { listRealEstateService } from "../services/realEstate/listRealEstates.service";
import { RealEstate } from "../entities";

const createRealStateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstateData: tRealEstateRequest = req.body;

  const realEstate = await createRealStateService(realEstateData);

  return res.status(201).json(realEstate);
};

const listRealEstatesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response: RealEstate[] = await listRealEstateService();

  return res.status(200).json(response);
};

export { createRealStateController, listRealEstatesController };
