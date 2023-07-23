import { AppError } from "../../error";
import jwt from "jsonwebtoken";
import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { compare } from "bcryptjs";
import TLoginRequest from "../../interfaces/login.interfaces";
import "dotenv/config";

const logIn = async (data: TLoginRequest): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch = await compare(data.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = jwt.sign(
    { admin: user.admin, id: user.id },
    String(process.env.SECRET_KEY),
    {
      expiresIn: "24h",
      subject: String(user.id),
    }
  );

  return token;
};

export default logIn;
