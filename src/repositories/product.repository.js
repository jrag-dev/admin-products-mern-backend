import IRepository from "../interfaces/repository.interface.js";
import Product from "../models/products.model.js";


class ProductRepository extends IRepository{

  async create(productData) {
    const product = new Product(productData);
    return product.save();
  }

  async findById(id) {
    return await Product.findById(id);
  }

  async findAll() {
    return await Product.find({})
  }

  async update(id, productData) {
    return await Product.findOneAndUpdate(
      { _id: id }, 
      productData, 
      { new: true}
    );
  }

  async delete(id) {
    return Product.findOneAndDelete({ _id: id });
  }
}

export default new ProductRepository();