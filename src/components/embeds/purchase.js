
import Colors from "../../data/Colors.js";
import { mappedcategories, products } from "../../data/products.js";
import { Translations } from "../../data/Translations.js";
import { ProductType } from "../../database/models/Product.js";
import { _embedStatics } from "./_internals.js";

export default function purchaseEmbed(category){
  
  if(category) {
    let products = []

    category.products.forEach(product => {
      products.push({
        name: `> ${getEmojiByProductType(product.type)} ${product.name} ||${product.id}||`,
        value: `${product.info}\n<:rialaccent:1275435963723550811> ${product.price}`
      })
    })

    return {
      title: `${category.category} <:shoppingcartaccent:1275427780238245978>`,
      description: "محصول مورد نظر خود را انتخاب کنید",
      fields:  products,
        color: Colors.SECONDARY,
        ..._embedStatics()
      }
  }
    
  let categories = []

  products.forEach(category => {
    categories.push({
      name: `> <a:Sparkle:1275206916242542594> ${category.category} ||${category.id}||`,
      value: `**${category.desc}**\n${category.additional}`
    })
  });

  return {
  title: "خرید محصولات <:shoppingcartaccent:1275427780238245978>",
  description: "برای خرید محصول یک دسته بندی انتخاب کنید",
  fields: categories,
    color: Colors.PRIMARY,
    ..._embedStatics()
  }
}

export function getEmojiByProductType(productType){
  switch (productType) {
    case ProductType.DOMAIN:
      return "<:product_domain:1275779399400034415>"
    case ProductType.MINECRAFT:
      return "<:product_minecraft:1275779360795922494>"
    case ProductType.SERVICES:
      return "<:product_services:1275779348065947759>"
    case ProductType.TEAMSPEAK:
      return "<:prodcut_teamspeak:1275779375324860539>"
  }
}