import { MongoDataSource } from "apollo-datasource-mongodb";

export default class Customers extends MongoDataSource {
  // read
  async getCustomers() {
    return await this.model.find();
  }

  // detail
  async getCustomer(id) {
    return await this.findOneById(id);
  }

  // create
  async createCustomer({ CustomerName, CustomerOrder, CustomerType }) {
    return await this.model.create({
      CustomerName,
      CustomerOrder,
      CustomerType,
    });
  }

  //delete
  async deleteCustomer(id) {
    return await this.model.findByIdAndRemove(id);
  }
}
