import { MongoDataSource } from "apollo-datasource-mongodb";

export default class Customers extends MongoDataSource {
  async getCustomers() {
    return await this.model.find();
  }

  async getCustomer(id) {
    return await this.findOneById(id);
  }

  async createCustomer({ CustomerName, CustomerOrder, CustomerType }) {
    return await this.model.create({
      CustomerName,
      CustomerOrder,
      CustomerType,
    });
  }
}
