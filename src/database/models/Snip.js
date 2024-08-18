const { Schema, Types, model } = require("mongoose")

const SnipSchema = new Schema({
  id: {
    type: String,
    required: true,
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

module.exports = {
  snipModel: model("Snip", SnipSchema)
}