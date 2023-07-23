import { z } from "zod";

import {
  realEstateSchema,
  realEstateSchemaRequest,
  realEstatesSchema,
} from "../schemas/realEstate.schemas";

type TRealEstate = z.infer<typeof realEstateSchema>;

type tRealEstateRequest = z.infer<typeof realEstateSchemaRequest>;

type TRealEstates = z.infer<typeof realEstatesSchema>;

export { TRealEstate, tRealEstateRequest, TRealEstates };
