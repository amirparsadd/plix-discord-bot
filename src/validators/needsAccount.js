import { getUserByDiscordID } from "../database/interactors/User.js"

/**
 * 
 * @param {import("commandkit").ValidationProps} param0 
 */
export default async function validator({ interaction, commandObj, client, handler }){
  if(commandObj.options.needsAccount === undefined) return false

  const account = await getUserByDiscordID(interaction.user.id)

  if(commandObj.options.needsAccount === true){
    if(!account){
      interaction.reply("You Dont Have An Account!")
      return true
    }
  }else{
    if(account){
      interaction.reply("You Do Have An Account!")
      return true
    }
  }

  interaction.account = account

  return false
}