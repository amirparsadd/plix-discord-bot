import { Schema, Types, model } from "mongoose"

export const /*ENUM*/ UserRanks = {
  NONE: "NONE",
  CUSTOMER: "CUSTOMER",
  SUPPORT: "SUPPORT",
  DEV: "DEV",
  MANAGER: "MANAGER",
  OWNER: "OWNER"
}

const UserSchema = new Schema({
  name: {
    type: String,
    default: "No Name"
  },
  balance: {
    type: Number,
    default: 0,
  },
  discord_id: {
    type: String,
    required: true
  },
  rank: {
    type: String,
    default: UserRanks.NONE
  },
  products: {
    type: [Types.ObjectId],
    ref: "Product",
    default: []
  },
  invoices: {
    type: [Types.ObjectId],
    ref: "Invoice",
    default: []
  },
  // tickets: {
  //   type: [Types.ObjectId],
  //   ref: "Ticket",
  //   default: []
  // }
  // ? Seemed Useless
})

export const userModel = model("User", UserSchema)