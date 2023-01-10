export const resolvers = {
  Query: {
    getCustomers: async (_, _args, { dataSources: { customers } }) => {
      return customers.getCustomers();
    },
    getCustomer: async (_, { id }, { dataSources: { customers } }) => {
      return customers.getCustomer(id);
    },
  },
  Mutation: {
    createCustomer: async (_, args, { dataSources: { customers } }) => {
      return customers.createCustomer(args);
    },
  },
};
