export default class IRepository {
  async create(data) {
    throw new Error('Método create no implementado');
  }

  async findById(id) {
    throw new Error('Método findById no implementado');
  }

  async findAll() {
    throw new Error('Método findAll no implementado');
  }

  async update(id, data) {
    throw new Error('Método update no implementado');
  }

  async delete(id) {
    throw new Error('Método delete no implementado');
  }
}