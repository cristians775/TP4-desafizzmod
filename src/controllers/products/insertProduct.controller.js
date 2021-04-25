import { errorMessage } from "../../constants/errors/errors.constant.js";
import { INITIAL_VALUES_PRODUCTS_FORM } from "../../constants/products/initialValuesProductsForm.constant.js";
import { productFormSchema } from "../../middleware/validations/Schemas/productForm.schema.js";
import ProductsRepository from "../../repositories/products.repository.js";
import { sendMail } from "../../services/mail.service.js";
import { productMessages } from "../../constants/products/productsMessages.constant.js";

export const insertProductCtrl = async (req, res) => {
  const { body } = req;
  try {
    const product = await productFormSchema.validateAsync(body);
    await ProductsRepository.addProduct(product);
    const productsCount = await ProductsRepository.countProducts();

    res.status(200).render("products-form", {
      ...INITIAL_VALUES_PRODUCTS_FORM,
      success: true,
      message: productMessages.PRODUCT_INSERT_SUCESSFULLY,
    });

    if (productsCount && productsCount % 10 === 0) {
      const products = await ProductsRepository.getProductsSort(
        {
          createdAt: -1,
        },
        10
      );
      await sendMail(products);
    }
  } catch (error) {
    res.status(400).render("products-form", {
      ...body,
      success: false,
      error: true,
      message: error.isJoi ? error.message : errorMessage.UNKNOW_ERROR,
    });
  }
};
