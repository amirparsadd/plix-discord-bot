import { ActionRowBuilder, ButtonBuilder, ButtonStyle, CommandInteraction, Message, SlashCommandBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } from "discord.js";
import purchaseEmbed, { getEmojiByProductType } from "../../components/embeds/purchase.js";
import { mappedcategories, products } from "../../data/products.js";

const SPARKLE_EMOJI_ID = "1275206916242542594"
const BACK_EMOJI_ID = "1275785145600966676"

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
  const categorySelect = new StringSelectMenuBuilder()
    .setPlaceholder("یک دسته بندی انتخاب کنید")
    .setCustomId("IGNORE")
  
  products.forEach(category => {
    categorySelect.addOptions(
      new StringSelectMenuOptionBuilder()
        .setEmoji(SPARKLE_EMOJI_ID)
        .setLabel(category.category)
        .setValue(category.id))
  });

  const categorySelectionRow = new ActionRowBuilder()
    .addComponents([categorySelect])

  const response = await interaction.reply({ embeds: [ purchaseEmbed() ], components: [ categorySelectionRow ], fetchReply: true });

  await handleCategoriesResult(response)
}

async function handleCategoriesResult(message) {
  try {
    const result = await message.awaitMessageComponent({ time: 30_000 })
    
    const response = await sendProducts(result, mappedcategories[result.values[0]])

    return await handleProducts(response)
  } catch (err) {
    message.reply("خیلی طولش دادی، کامندو دوباره بزن")
  }
}

/**
 * 
 * @param {import("discord.js").Interaction} interaction 
 * @param {import("../../data/types/Products.js").ICategory} category 
 */
async function sendProducts(interaction, category) {
  const productSelect = new StringSelectMenuBuilder().setPlaceholder("یک محصول انتخاب کنید").setCustomId("IGNORE")
  
  category.products.forEach(product => {
    productSelect.addOptions(
      new StringSelectMenuOptionBuilder()
        .setEmoji(getEmojiByProductType(product.type))
        .setLabel(product.name)
        .setValue(product.id))
  });

  const productSelectRow = new ActionRowBuilder().addComponents(productSelect)

  const backButtonRow = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        .setEmoji(BACK_EMOJI_ID)
        .setLabel("بازگشت")
        .setStyle(ButtonStyle.Secondary)
        .setCustomId("BACK"))
  
  return await interaction.reply({ embeds: [ purchaseEmbed(category) ], components: [ productSelectRow, backButtonRow ], fetchReply: true })
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
  } catch (err) {
    message.reply("خیلی طولش دادی، کامندو دوباره بزن")
  }
}

export const options = {
  devOnly: false,
  deleted: false,
  dmOnly: true,
  needsAccount: true
}