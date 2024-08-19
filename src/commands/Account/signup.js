import { SlashCommandBuilder } from "discord.js";
import accountCreatedEmbed from "../../components/embeds/accountCreated.js";

export const data = new SlashCommandBuilder()
  .setName("signup")
  .setDescription("Sign Up In The Bot!")
  .addStringOption(option => option
    .setName("name")
    .setDescription("Your Name")
    .setRequired(true)
    .setMinLength(10)
    .setMaxLength(31)
  )

/**
 * 
 * @param {import("commandkit").CommandProps} param0 
 */
export function run({ interaction, client, handler }) {
  interaction.reply({ embeds: [accountCreatedEmbed(null)] })
}

export const options = {
  devOnly: false,
  deleted: false,
  dmOnly: true
}