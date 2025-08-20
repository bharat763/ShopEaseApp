
import express from "express";
import { createProductController, deleteProductController, getCategoryController, getProductByIdController, getProductController, getTotalProductsController, updateProductController } from "../controllers/productControllers.js";

import auth from "../middlewares/auth.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";

const router = express.Router();
router.get("/",getProductController);
router.get("/categories",getCategoryController);
router.get("/total",getTotalProductsController);
router.get("/:id",getProductByIdController);
router.post("/",auth, createProductController);
router.put("/:id",auth,updateProductController);

 router.delete("/:id",[auth,roleBasedAuth("ADMIN")],deleteProductController);

export default router;


