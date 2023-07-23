import { Request, Response } from "express";
import { TScheduleRequest } from "../interfaces/shcedules.interfaces";
import { createScheduleService } from "../services/schedules/createSchedules.service";
import { RealEstate } from "../entities";
import { listSchedulesService } from "../services/schedules/listSchedules.service";

const createSchedulesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = res.locals.token.id;

  const scheduleData: TScheduleRequest = req.body;
  const schedule = await createScheduleService(scheduleData, id);
  return res.status(201).json({ message: "Schedule created" });
};

const listSchedulesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = Number(req.params.id);

  const response: RealEstate = await listSchedulesService(id);

  return res.status(200).json(response);
};

export { createSchedulesController, listSchedulesController };
