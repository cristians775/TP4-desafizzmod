import { errorMessage } from "../constants/errors/errors.constant.js";

export const errorHandler = (error, req, res, next) => {
  console.log(error);
  res.status(500).send(`<h1>${errorMessage.UNKNOW_ERROR} </h1>`);
};
