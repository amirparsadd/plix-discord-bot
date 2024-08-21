import { SlashCommandBuilder } from "discord.js";
import { Values } from "../../data/Values.js";
import errorEmbed from "../../components/embeds/error.js";

export const data = new SlashCommandBuilder()
  .setName("snips-add")
  .setDescription("Create A Snip")
  .addStringOption(option =>
    option
      .setName("name")
      .setDescription("The Name Of The Snip")
      .setRequired(true)
      .setMinLength(3)
      .setMaxLength(16)
  )
  .addStringOption(option =>
    option
      .setName("content")
      .setDescription("The Content Of The Snip")
      .setRequired(true)
      .setMinLength(15)
      .setMaxLength(1000)
  )
  
/**
 * 
 * @param {import("commandkit").CommandProps} param0 
 */
export function run({ interaction, client, handler }) {
  interaction.deferReply()

  /**
   * @type {import("../../database/interactors/types/UserResult").IUserResult}
   */
  const account = interaction.account

  if(Values.userRanks[account.rank] < Values.userRanks.MANAGER){
    return interaction.reply({ embeds: [ errorEmbed("سطح شما کافی نیست!", 4011) ] })
  }
}

export const options = {
  devOnly: false,
  needsAccount: true,
  deleted: false
}