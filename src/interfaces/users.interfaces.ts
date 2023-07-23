import { z } from "zod";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userSchemaUpdate,
  usersSchemaResponse,
} from "../schemas/users.schemas";

type TUser = z.infer<typeof userSchema>;

type TUserRequest = z.infer<typeof userSchemaRequest>;

type TUsersResponse = z.infer<typeof usersSchemaResponse>;

type TUserResponse = z.infer<typeof userSchemaResponse>;

type TUserUpdate = z.infer<typeof userSchemaUpdate>;

export { TUser, TUserRequest, TUsersResponse, TUserUpdate, TUserResponse };
