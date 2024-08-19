import { SlashCommandBuilder } from "discord.js";
import accountCreatedEmbed from "../../components/embeds/accountCreated.js";
import { createUserWithName, getUserByDiscordID } from "../../database/interactors/User.js";
import errorEmbed from "../../components/embeds/error.js";

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
export async function run({ interaction, client, handler }) {
  await interaction.deferReply();

  const newUser = await createUserWithName(interaction.user.id, interaction.options.get("name").value)

  if(newUser === null){
    await interaction.editReply({ embeds: [errorEmbed("در ساخت کاربر در دیتابیس مشکلی پیش آمد", 100101)] })
    return
  }

  await interaction.editReply({ embeds: [accountCreatedEmbed()] })
}

export const options = {
  devOnly: false,
  deleted: false,
  dmOnly: true,
  needsAccount: false
}