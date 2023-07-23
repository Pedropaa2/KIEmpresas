import { z } from "zod";

import {
  schedulesSchema,
  schedulesSchemaRequest,
} from "../schemas/schedules.schemas";

type TSchedule = z.infer<typeof schedulesSchema>;

type TScheduleRequest = z.infer<typeof schedulesSchemaRequest>;

export { TSchedule, TScheduleRequest };
