import { userModel } from "../models/User.js"

/**
 * 
 * @param {import("mongoose").HydratedDocument<import("../models/types/User").IUser>} userDocument
 * @returns {import("./types/UserResult").IUserResult}
 */
export function convert(userDocument){
  if(userDocument == null) return null

  return {
    dbid: userDocument._id.toString(),
    name: userDocument.name,
    discord_id: userDocument.discord_id,
    rank: userDocument.rank,
    products: userDocument.products.map(val => val.toString()),
    invoices: userDocument.invoices.map(val => val.toString()),
    tickets: userDocument.tickets.map(val => val.toString())
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

export async function getUserByDiscordID(id){
  const userDocument = await userModel.findOne({ discord_id: id })

  convert(userDocument)
}

export async function createUser(discord_id, _additional) {
  try {
    const userDocument = await userModel.create({discord_id, ..._additional})

    return convert(userDocument)
  }catch(err){
    console.error("an error occured when creating a user\n" + err)
    return null
  }
}

export async function createUserWithName(discord_id, name) {
  const userDocument = await createUser(discord_id, { name })

  return userDocument
}