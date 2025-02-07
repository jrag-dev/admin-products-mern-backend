import ProductRepository from "../repositories/product.repository.js";


class ProductService {

  constructor() {
    this.productRepository = new ProductRepository();
  }

  async createProduct(productData) {
    return await this.productRepository.create(productData);
  }

  async getProductById(id) {
    return await this.productRepository.findById(id);
  }

  async getAllProducts() {
    return await this.productRepository.findAll();
  }

  async updateProduct(id, productData) {
    return await this.productRepository.update(id, productData);
  }

  async deleteProduct(id) {
    return await this.productRepository.delete(id);
  }
}

export default ProductService;