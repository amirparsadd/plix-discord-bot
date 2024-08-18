import { Schema, Types, model } from "mongoose"

const /*ENUM*/ TicketStatus = {
  WAITING: "WAITING",
  ANSWERED: "ANSWERED"
}

const TicketSchema = new Schema({
  author: {
    type: Types.ObjectId,
    ref: User,
    required: true
  },
  answer_author: {
    type: Types.ObjectId,
    ref: User,
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  answer: String,
  status: {
    type: String,
    default: TicketStatus.WAITING
  }
})

module.exports = {
  ticketModel: model("Ticket", TicketSchema),
  TicketStatus
}