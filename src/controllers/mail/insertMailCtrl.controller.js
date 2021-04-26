import { mailSchema } from "../../middleware/validations/Schemas/email.schema.js";
import { writeFile } from "fs/promises";
import { EMAIL_PATH } from "../../constants/email/emailPath.constant.js";
import { INITIAL_VALUES_MAIL_FORM } from "../../constants/email/initialValuesEmailForm.constant.js";
import { emailMessage } from "../../constants/email/emailMessage.constant.js";
import { errorMessage } from "../../constants/errors/errors.constant.js";
export const insertMail = async (req, res) => {
  const { body } = req;
  try {
    const bodyData = await mailSchema.validateAsync(body);
    writeFile(EMAIL_PATH, bodyData.email.trim()).then((result) =>
      res.render("mail-form", {
        ...INITIAL_VALUES_MAIL_FORM,
        message: emailMessage.EMAIL_INSERT_SUCCESSFULLY,
        success: true,
        error: false,
      })
    );
  } catch (error) {
    res.render("mail-form", {
      ...body,
      message: error.isJoi ? error.message : errorMessage.UNKNOW_ERROR,
      success: false,
      error: true,
    });
  }
};
