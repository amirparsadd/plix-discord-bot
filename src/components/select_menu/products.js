import { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } from "discord.js";
import { getEmojiByProductType } from "../embeds/purchase.js";

/**
 * 
 * @param {import("../../data/types/Products").ICategory} category 
 */
export function productsSelectMenu(category, customId = "IGNORE"){
  const productSelect = new StringSelectMenuBuilder()
    .setPlaceholder("یک محصول انتخاب کنید")
    .setCustomId(customId)
  
  category.products.forEach(product => {
    productSelect.addOptions(
      new StringSelectMenuOptionBuilder()
        .setEmoji(getEmojiByProductType(product.type))
        .setLabel(product.name)
        .setValue(product.id))
  });

  return productSelect
}

export function productsSelectMenuActionRow(category){
  return new ActionRowBuilder()
    .addComponents([productsSelectMenu(category)])
}