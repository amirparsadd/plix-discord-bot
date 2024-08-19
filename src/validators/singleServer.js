/**
 * 
 * @param {import("commandkit").ValidationProps} param0 
 */
export default async function validator({ interaction, commandObj, client, handler }){
  if(interaction.guild == null) return false
  
  if(interaction.guild.id != process.env.SERVER){
    await interaction.reply("This Bot Only Works In Plix SMP!")
    await interaction.guild.leave()
    return true
  }
  return false
}