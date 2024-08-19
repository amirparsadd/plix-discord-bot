import { ticketModel } from "../models/Ticket.js"

/**
 * 
 * @param {import("mongoose").HydratedDocument<import("../models/types/Ticket").ITicket>} ticketDocument
 * @returns {import("./types/TicketResult").ITicketResult}
 */
export function convert(ticketDocument){
  if(ticketDocument == null) return null

  return {
    dbid: ticketDocument._id.toString(),
    author: ticketDocument.author.toString(),
    answer_author: ticketDocument.answer_author.toString(),
    title: ticketDocument.content,
    content: ticketDocument.content,
    answer: ticketDocument.answer,
    status: ticketDocument.status
  }
}

/**
 * 
 * @param {String} dbid
 * @returns {import("./types/TicketResult").ITicketResult}
 */
export function convertByDBID(dbid){
  const ticketDocument = ticketModel.findById(dbid)

  if(ticketDocument == null) return null

  return convert(ticketDocument)
}