/**
 * 
 * @param {import("commandkit").ValidationProps} param0 
 */
export default async function validator({ interaction, commandObj, client, handler }){
  if(commandObj.options.dmOnly !== true) return false

  if(interaction.guild != null){
    await interaction.reply({ content: "This Command Is Only Available In DMs", ephemeral: true })
    return true
  }

  return false
}