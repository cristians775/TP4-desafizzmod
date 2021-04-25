import { INITIAL_VALUES_PRODUCTS_FORM } from "../../constants/products/initialValuesProductsForm.constant.js";
export const getAddProductCtrl = async (req, res, next) => {
  try {
    res.render("products-form", INITIAL_VALUES_PRODUCTS_FORM);
  } catch (error) {
    next(error);
  }
};
