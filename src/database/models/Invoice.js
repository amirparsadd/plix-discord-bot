const { Schema, Types, model } = require("mongoose")

const /*ENUM*/ InvoiceType = {
  PENDING: "PENDING",
  PAID: "PAID",
  DUE: "DUE"
}

const currentDate = Date.now

const InvoiceSchema = new Schema({
  owner: {
    type: Types.ObjectId,
    ref: "User",
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  product: {
    type: Types.ObjectId,
    ref: "Product"
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: InvoiceType.PENDING
  },
  createdAt: {
    type: Number,
    default: currentDate
  },
  updatedAt: {
    type: Number,
    default: currentDate
  },
  endDate: {
    type: Number,
    required: true
  }
})

module.exports = {
  invoiceModel: model("Invoice", InvoiceSchema),
  InvoiceType
}