const { Schema, Types, model } = require("mongoose")

const /*ENUM*/ ProductType = {
  MINECRAFT: "MINECRAFT",
  TEAMSPEAK: "TEAMSPEAK",
  DOMAIN: "DOMAIN"
}

const /*ENUM*/ ProductBillingType = {
  ONCE: "ONCE",
  MONTHLY: "MONTHLY",
  YEARLY: "YEARLY"
}

const currentDate = Date.now

const ProductSchema = new Schema({
  product_type: {
    type: String,
    required: true
  },
  billing_type: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  },
  price: {
    type: Number,
    required: true
  },
  owner: {
    type: Types.ObjectId,
    ref: "User",
    required: true
  },
  createdAt: {
    type: Number,
    default: currentDate
  },
  renewedAt: {
    type: Number,
    default: currentDate
  },
})

module.exports = {
  productModel: model("Product", ProductSchema),
  ProductBillingType,
  ProductType
}