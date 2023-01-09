import mongoose from "mongoose";

export const Customer = mongoose.model("Customer", {
  CustomerName: String,
  CustomerOrder: Number,
  CustomerType: String,
});
