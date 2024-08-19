import { ticketModel } from "../models/Ticket"
import { convertByDBID as convertUserByDBID } from "./User"

/**
 * 
 * @param {import("mongoose").HydratedDocument<import("../models/types/Ticket").ITicket>} ticketDocument
 * @returns {import("./types/TicketResult").ITicketResult}
 */
export function convert(ticketDocument){
  if(ticketDocument == null) return null

  return {
    dbid: ticketDocument._id.toString(),
    author: convertUserByDBID(ticketDocument.author.toString()),
    answer_author: convertUserByDBID(ticketDocument.answer_author.toString()),
    title: null,
    content: null,
    
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