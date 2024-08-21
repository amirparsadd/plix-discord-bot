import { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } from "discord.js";
import { products } from "../../data/products.js";

const SPARKLE_EMOJI_ID = "1275206916242542594"

export function categoriesSelectMenu(customId = "IGNORE"){
  const categorySelect = new StringSelectMenuBuilder()
    .setPlaceholder("یک دسته بندی انتخاب کنید")
    .setCustomId(customId)
  
  products.forEach(category => {
    categorySelect.addOptions(
      new StringSelectMenuOptionBuilder()
        .setEmoji(SPARKLE_EMOJI_ID)
        .setLabel(category.category)
        .setValue(category.id))
  });

  return categorySelect
}

export function categoriesSelectMenuActionRow(){
  return new ActionRowBuilder()
    .addComponents([categoriesSelectMenu()])
}