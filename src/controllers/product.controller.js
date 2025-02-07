import { isValidObjectId } from "mongoose";
import ProductService from "../services/product.service.js";


class ProductController {

  constructor() {
    this.productService = new ProductService();
  }

  async createProduct(req, res) {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
      return res.status(400).json({
        success: false,
        message: "Please provide all fields"
      })
    }
    try {
      const newProduct = await this.productService.createProduct(product);
      res.status(201).json({
        seccess: true,
        message: "Product created successfully",
        product: newProduct
      })
    } catch (error) {
      res.status(500).json({ success: false, error: "Server error" });
    }
  }

  async getAllProducts(req, res) {
    try {
      const products = await this.productService.getAllProducts();
      res.status(200).json({ success: true, products });
    } catch (error) {
      res.status(500).json({ success: false, error: "Server error" });
    }
  }

  async getProductById(req, res) {
    const { id } = req.params;
    try {
      const product = await this.productService.getProductById(id);
      if (!product) {
        return res.status(404).json({ success: false, error: 'Product not found'});
      }
      res.status(200).json({ success: true, product });
    } catch (error) {
      res.status(500).json({ success: false, error: "Server error" });
    }
  }

  async updateProduct(req, res) {
    const { id } = req.params;
    const productFields = req.body;
    try {
      const productUpdated = await this.productService.updateProduct(id, productFields);
      if (!productUpdated) {
        return res.status(404).json({ success: false, error: 'Product not found'});
      }
      res.status(200).json({ success: true, product: productUpdated })
    } catch (error) {
      res.status(500).json({ success: false, error: "Server error" });
    }
  }

  async deleteProduct(req, res) {
    const { id } = req.params;
    try {
      const product = await this.productService.getProductById(id);
      if (!product) {
        return res.status(404).json({ success: false, error: 'Product not found'});
      }
      await this.productService.deleteProduct(id);
      res.status(207).json({ success: true, message: "Product deleted" });
    } catch (error) {
      res.status(500).json({ success: false, error: "Server error" });
    }
  }
}


export default ProductController;