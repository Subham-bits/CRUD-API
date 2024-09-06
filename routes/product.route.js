import express, { json } from "express";
const router = express.Router();
import {
  postProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controller/product.cotroller.js";

//Post Products
router.post("/", postProduct);

//Get Products
router.get("/", getProducts);

//Get one product
router.get("/:id", getProduct);

//Update one product
router.put("/:id", updateProduct);

//Delete one product
router.delete("/:id", deleteProduct);

export default router;
