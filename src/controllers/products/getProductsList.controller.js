import { errorMessage } from "../../constants/errors/errors.constant.js";
import ProductsRepository from "../../repositories/products.repository.js";

export const getProductsListCtrl = async (req, res, next) => {
  try {
    const products = await ProductsRepository.getProducts();
    res.render("products-list", {
      products,
      error: false,
      message: null,
    });
  } catch (error) {
    res.render("products-list", {
      products: [],
      error: true,
      message: errorMessage.ERROR_GET_IN_DATABASE,
    });
  }
};
