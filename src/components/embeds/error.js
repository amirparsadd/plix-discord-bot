import Colors from "../../data/Colors.js";
import { _embedStatics } from "./_internals.js";

export default function errorEmbed(text, code){
  return {
    title: "مشکلی پیش آمد <:dbdown:1275212196707565640>",
    description: `در انجام عملیات درخواست شده مشکلی پیش آمد، ${text}\n\n\`Error Code:${code}\``,
    color: Colors.DENY,
    ..._embedStatics()
  }
}