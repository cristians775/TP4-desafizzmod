import express from "express";
import { Routes } from "./routes/index.route.js";
import DataBase from "./Database/database.js";
import dotenv from "dotenv";
import fs from "fs";
import { EMAIL_DEFAULT } from "./constants/email/emailDefault.constant.js";
import { EMAIL_PATH } from "./constants/email/emailPath.constant.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
dotenv.config({ path: ".env" });
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DB CONNECTION
DataBase.connect();

//VIEWS
app.use(express.static("views"));
app.set("views", process.cwd() + "/src/views");
app.set("view engine", "ejs");

//ROUTES
Routes.forEach(({ route, path }) => app.use(path, route));

app.use(errorHandler);

fs.stat(EMAIL_PATH, async (err, stats) => {
  if (err) {
    await fs.promises.writeFile(EMAIL_PATH, EMAIL_DEFAULT);
  }
});

app.listen(PORT, async () => {
  console.log("Server running in port:", PORT);
});
