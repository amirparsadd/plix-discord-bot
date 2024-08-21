import { ActionRowBuilder, ButtonBuilder, ButtonStyle, CommandInteraction, Message, SlashCommandBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } from "discord.js";
import purchaseEmbed, { getEmojiByProductType } from "../../components/embeds/purchase.js";
import { mappedcategories, products } from "../../data/products.js";
import { categoriesSelectMenuActionRow } from "../../components/select_menu/categories.js";
import { productsSelectMenuActionRow } from "../../components/select_menu/products.js";
import { backButton } from "../../components/buttons/back.js";

export const data = new SlashCommandBuilder()
  .setName("buy")
  .setDescription("Buy Products From Us!")

/**
 * 
 * @param {import("commandkit").CommandProps} param0 
 */
export async function run({ interaction, client, handler }) {
  sendCategories(interaction)
}

/**
 * 
 * @param {import("discord.js").Interaction} interaction 
 * @returns {Message}
 */
async function sendCategories(interaction){
  const response = await interaction.reply({ embeds: [ purchaseEmbed() ], components: [ categoriesSelectMenuActionRow() ], fetchReply: true });

  await handleCategoriesResult(response)
}

async function handleCategoriesResult(message) {
  try {
    const result = await message.awaitMessageComponent({ time: 30_000 })
    
    const response = await sendProducts(result, mappedcategories[result.values[0]])

    return await handleProducts(response)
  } catch (err) {}
}

/**
 * 
 * @param {import("discord.js").Interaction} interaction 
 * @param {import("../../data/types/Products.js").ICategory} category 
 */
async function sendProducts(interaction, category) {
  const backButtonRow = new ActionRowBuilder()
    .addComponents(backButton())
  
  return await interaction.reply({ embeds: [ purchaseEmbed(category) ], components: [ productsSelectMenuActionRow(category), backButtonRow ], fetchReply: true })
}

/**
 * 
 * @param {Message} message 
 */
async function handleProducts(message) {
  try {
    const result = await message.awaitMessageComponent({ time: 60_000 })
  
    if(result.customId === "BACK"){
      sendCategories(result)
    }
  } catch (err) {}
}

export const options = {
  devOnly: false,
  deleted: false,
  dmOnly: true,
  needsAccount: true
}