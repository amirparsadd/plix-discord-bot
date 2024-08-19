import { SlashCommandBuilder } from "discord.js";

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
  interaction.reply(`test`);
}

export const options = {
  devOnly: false,
  userPermissions: ['Administrator'],
  botPermissions: ["Administrator"],
  deleted: false,
}