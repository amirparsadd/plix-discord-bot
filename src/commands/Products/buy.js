import { ActionRowBuilder, CommandInteraction, Message, SlashCommandBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } from "discord.js";
import purchaseEmbed from "../../components/embeds/purchase.js";
import { products } from "../../data/products.js";

export const data = new SlashCommandBuilder()
  .setName("buy")
  .setDescription("Buy Products From Us!")

/**
 * 
 * @param {import("commandkit").CommandProps} param0 
 */
export async function run({ interaction, client, handler }) {
  const categorySelect = new StringSelectMenuBuilder()
    .setPlaceholder("یک دسته بندی انتخاب کنید")
    .setCustomId("IGNORE")
  
  products.forEach(category => {
    categorySelect.addOptions(new StringSelectMenuOptionBuilder()
    .setEmoji("1275206916242542594")
    .setLabel(category.category)
    .setValue(category.id))
  });

  const selectionRow = new ActionRowBuilder()
    .addComponents([categorySelect])

  /**
   * @type {Message}
   */
  const response = await interaction.reply({ embeds: [ purchaseEmbed() ], components: [selectionRow]});

  try{
    const result = await response.awaitMessageComponent({ time: 30_000 })

    result.reply(result.values[0])
  } catch (err){
    interaction.followUp("خیلی طولش دادی! دوباره کامند رو بزن")
  }
}

export const options = {
  devOnly: false,
  deleted: false,
  dmOnly: true,
  needsAccount: true
}