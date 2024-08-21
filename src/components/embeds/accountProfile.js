
import Colors from "../../data/Colors.js";
import { Translations } from "../../data/Translations.js";
import { _embedStatics } from "./_internals.js";

/**
 * 
 * @param {import("../../database/interactors/types/UserResult.js").IUserResult} account 
 * @returns 
 */
export default function accountProfileEmbed(account){
  return { 
    title: "حساب کاربری شما",
    description: `سطح کاربری شما **${Translations.userRanks[account.rank]}** است`,
    fields: [
      {
        name: "محصولات <:shoppingcartaccent:1275427780238245978>",
        value: `> ${account.products.length}`,
        inline: true
      },
      {
        name: "صورت حساب ها <:invoiceaccent:1275435334166908991>",
        value: `> ${account.invoices.length}`,
        inline: true
      },
      {
        name: "موجودی <:rialaccent:1275435963723550811>",
        value: `> ${account.balance} تومان`,
        inline: true
      },
      {
        name: "نام کاربری <:useraccent:1275439428717776917>",
        value: `> ${account.name}`,
        inline: false
      }
    ],
    color: Colors.PRIMARY,
    ..._embedStatics()
  }
}