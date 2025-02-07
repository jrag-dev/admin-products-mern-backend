import { Router } from "express";
import ProductController from "../controllers/product.controller.js";
import validateObjectId from "../middlewares/valid.id.mongoose.js";

const router = Router();
const productController = new ProductController();

router.post('/products', (req, res) => productController.createProduct(req, res));
router.get('/products', (req, res) => productController.getAllProducts(req, res));
router.get('/products/:id', validateObjectId, (req, res) => productController.getProductById(req, res));
router.put('/products/:id', validateObjectId, (req, res) => productController.updateProduct(req, res));
router.delete('/products/:id', validateObjectId, (req, res) => productController.deleteProduct(req, res));

export default router;