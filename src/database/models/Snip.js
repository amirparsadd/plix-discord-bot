import { Schema, Types, model } from "mongoose"

const SnipSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true
  },
  author_name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true
  }
})

export const snipModel = model("Snip", SnipSchema)