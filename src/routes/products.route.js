import { Router } from "express";
import { getAddProductCtrl } from "../controllers/products/getAddProduct.controller.js";
import { insertProductCtrl } from "../controllers/products/insertProduct.controller.js";
import { getProductsListCtrl } from "../controllers/products/getProductsList.controller.js";

const router = Router();

router.get("/", getAddProductCtrl);
router.get("/listar", getProductsListCtrl);
router.post("/ingreso", insertProductCtrl);

export { router as ProductsRouter };
