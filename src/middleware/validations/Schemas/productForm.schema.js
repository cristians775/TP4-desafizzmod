import Joi from "joi";
import { schemasMessages } from "../../../constants/schemas/schemasMessages.constant.js";

export const productFormSchema = Joi.object({
  name: Joi.string()
    .min(4)
    .max(100)
    .required()
    .messages({
      "string.base": `${schemasMessages.STRING_REQUIRED}, nombre`,
      "string.empty": `${schemasMessages.CANNOT_EMPTY_FIELD}, nombre`,
      "string.min": `${schemasMessages.MIN_AND_MAX_STRING_REQUIRED}, nombre`,
      "string.max": `${schemasMessages.MIN_AND_MAX_STRING_REQUIRED}, nombre`,
      "any.required": `${schemasMessages.STRING_REQUIRED}, nombre`,
    }),
  price: Joi.number()
    .integer()
    .min(1)
    .max(999999)
    .required()
    .messages({
      "number.base": `${schemasMessages.NUMBER_REQUIRED}, precio`,
      "number.empty": `${schemasMessages.CANNOT_EMPTY_FIELD}, precio`,
      "number.min": `${schemasMessages.MIN_AND_MAX_NUMBER_REQUIRED}, precio`,
      "number.max": `${schemasMessages.MIN_AND_MAX_NUMBER_REQUIRED}, precio`,
      "any.required": `${schemasMessages.MIN_AND_MAX_NUMBER_REQUIRED}, precio`,
    }),
  description: Joi.string()
    .required()
    .min(4)
    .max(100)
    .messages({
      "string.base": `descripción: ${schemasMessages.STRING_REQUIRED}`,
      "string.empty": `descripción: ${schemasMessages.CANNOT_EMPTY_FIELD}`,
      "string.min": `${schemasMessages.MIN_AND_MAX_STRING_REQUIRED}, descripcion`,
      "string.max": `${schemasMessages.MIN_AND_MAX_STRING_REQUIRED}, descripcion`,
      "any.required": `descripción: ${schemasMessages.STRING_REQUIRED}`,
    }),
  url: Joi.string()
    .required()
    .messages({
      "string.base": `url: ${schemasMessages.STRING_REQUIRED}`,
      "string.empty": `url: ${schemasMessages.CANNOT_EMPTY_FIELD}`,
      "any.required": `url: ${schemasMessages.STRING_REQUIRED}`,
    }),
});
