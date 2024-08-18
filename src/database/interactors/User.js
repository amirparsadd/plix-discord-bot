import { userModel } from "../models/User"
import { convertByDBID as convertProductByDBID } from "./Product"

/**
 * 
 * @param {import("mongoose").HydratedDocument<import("../models/types/User").IUser>} userDocument
 * @returns {import("./types/UserResult").IUserResult}
 */
export function convert(userDocument){
  if(userDocument == null) return null

  return {
    dbid: userDocument._id,
    name: userDocument.name,
    discord_id: userDocument.discord_id,
    rank: userDocument.rank,
    products: userDocument.products.map(val => val.toString()),
    invoices: null,
    tickets: null
    // TODO Impl when deps are implemented
  }
}

/**
 * 
 * @param {String} dbid
 * @returns {import("./types/UserResult").IUserResult}
 */
export function convertByDBID(dbid){
  const userDocument = userModel.findById(dbid)

  if(userDocument == null) return null

  return convert(userDocument)
}