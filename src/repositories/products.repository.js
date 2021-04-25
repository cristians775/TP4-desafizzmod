import ProductSchema from "../models/product.model.js";

class ProductRepository {
  addProduct = async (product) => {
    const newProduct = new ProductSchema(product);
    return await newProduct.save();
  };
  getProducts = async (dataQuery = {}) => {
    return await ProductSchema.find(dataQuery);
  };
  countProducts = async () => {
    return await ProductSchema.countDocuments();
  };
  getProductsSort = async (dataWhere, limit) => {
    return await ProductSchema.find().sort(dataWhere).limit(limit);
  };
}

export default new ProductRepository();
