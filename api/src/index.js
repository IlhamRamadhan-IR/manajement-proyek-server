import express from "express";
import cors from "cors";
import db from "./configs/connection.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import UserRouter from "./routers/user.js";
import AuthRouter from "./routers/auth.js";
import OrgRouter from "./routers/organization.js";
import WorkRouter from "./routers/workspace.js";
import TeamRouter from "./routers/team.js";
import ProjectRouter from "./routers/project.js";
import SprintRouter from "./routers/sprint.js";
import TaskRouter from "./routers/task.js";

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT) || 8080;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// error handling
app.use((error, req, res, next) => {
    console.log(error.statusCode);
    const status = error.statusCode || 500;
    res.status(status).json({ message: error.message });
});

app.use("/api/auth", AuthRouter);
app.use("/api/user", UserRouter);
app.use("/api/organization", OrgRouter);
app.use("/api/workspace", WorkRouter);
app.use("/api/team", TeamRouter);
app.use("/api/project", ProjectRouter);
app.use("/api/sprint", SprintRouter);
app.use("/api/task", TaskRouter);

// db.sync({ force: false })
//     .then(() => {
//         console.log("Database Connection");
//     })
//     .catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
});
