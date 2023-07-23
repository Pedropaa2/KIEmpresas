import { Request, Response } from "express";
import {
  TUserRequest,
  TUserResponse,
  TUsersResponse,
} from "../interfaces/users.interfaces";
import {
  userSchemaRequest,
  userSchemaResponse,
  usersSchemaResponse,
} from "../schemas/users.schemas";
import { createUserService } from "../services/users/createUser.service";
import { User } from "../entities";
import { listUsersService } from "../services/users/listUsers.service";
import { updateUsersService } from "../services/users/updateUsers.service";
import { deleteUserService } from "../services/users/deleteUser.service";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserRequest = userSchemaRequest.parse(req.body);

  const newUser: User = await createUserService(userData);

  const response: TUserResponse = userSchemaResponse.parse(newUser);

  return res.status(201).json(response);
};

const listUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response: User[] = await listUsersService();

  const parsedResponse: TUsersResponse = usersSchemaResponse.parse(response);

  return res.status(200).json(parsedResponse);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData = req.body;
  const userId: number = Number(req.params.id);

  const newUserData = await updateUsersService(userData, userId);

  return res.status(200).json(userSchemaResponse.parse(newUserData));
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);

  await deleteUserService(userId);

  return res.status(204).send();
};

export {
  createUserController,
  listUsersController,
  updateUserController,
  deleteUserController,
};
