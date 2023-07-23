import "reflect-metadata";
import "express-async-errors";
import express from "express";
import userRoutes from "./routes/users.routes";
import { handleErrors } from "./error";
import loginRoutes from "./routes/login.routes";
import realEstateRoutes from "./routes/realEstate.routes";
import categoryRoutes from "./routes/category.routes";
import scheduleRoutes from "./routes/schedules.routes";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/categories", categoryRoutes);
app.use("/realEstate", realEstateRoutes);
app.use("/schedules", scheduleRoutes);
app.use(handleErrors);

export default app;
