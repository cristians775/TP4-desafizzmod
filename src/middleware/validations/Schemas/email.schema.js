import Joi from "joi";
import { schemasMessages } from "../../../constants/schemas/schemasMessages.constant.js";

export const mailSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      "string.base": `${schemasMessages.MAIL_IS_REQUIRED}`,
      "string.empty": `${schemasMessages.MAIL_IS_REQUIRED}`,
    }),
});
