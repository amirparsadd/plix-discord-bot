import { SlashCommandBuilder, User } from "discord.js";
import { createUserWithName, getUserByDiscordID } from "../../database/interactors/User.js";
import accountProfileEmbed from "../../components/embeds/accountProfile.js";

export const data = new SlashCommandBuilder()
  .setName("profile")
  .setDescription("View Your Profile")

/**
 * 
 * @param {import("commandkit").CommandProps} param0 
 */
export async function run({ interaction, client, handler }) {
  await interaction.deferReply();

  /**
   * @type {import("../../database/interactors/types/UserResult.js").IUserResult}
   */
  let account = interaction.account

  await interaction.editReply({ embeds: [accountProfileEmbed(account)] })
}

export const options = {
  devOnly: false,
  deleted: false,
  needsAccount: true
}