import { z } from "zod";
import { categorySchema } from "./category.schemas";
import { adressSchema, adressSchemaRequest } from "./address.schemas";

const realEstateSchema = z.object({
  id: z.number(),
  value: z.string().or(z.number().positive()).default(0),
  size: z.number().int().positive(),
  sold: z.boolean().default(false),
  category: categorySchema,
  address: adressSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
});

const realEstateSchemaRequest = realEstateSchema
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    category: true,
  })
  .extend({
    categoryId: z.number(),
    address: adressSchemaRequest,
  });

const realEstatesSchema = z.array(realEstateSchema);

export { realEstateSchema, realEstateSchemaRequest, realEstatesSchema };
