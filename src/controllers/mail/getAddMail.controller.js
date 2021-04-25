import { INITIAL_VALUES_MAIL_FORM } from "../../constants/email/initialValuesEmailForm.constant.js";

export const getAddMailCtrl = (req, res, next) => {
  try {
    res.render("mail-form", INITIAL_VALUES_MAIL_FORM);
  } catch (error) {
    next(error);
  }
};
