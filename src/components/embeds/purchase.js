
import Colors from "../../data/Colors.js";
import { mappedcategories, products } from "../../data/products.js";
import { Translations } from "../../data/Translations.js";
import { _embedStatics } from "./_internals.js";

export default function purchaseEmbed(category){
  
  if(category) {
    let products = []

    mappedcategories[category].products.forEach(product => {

    })
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