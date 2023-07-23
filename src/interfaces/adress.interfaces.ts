import { z } from "zod";
import { adressSchema } from "../schemas/address.schemas";

type TAdress = z.infer<typeof adressSchema>;

export { TAdress };
