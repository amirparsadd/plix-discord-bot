import Colors from "../../data/Colors.js";
import { _embedStatics } from "./_internals.js";

export default function accountCreatedEmbed(){
  return {
    title: "حساب شما راه اندازی  شد <a:Firework:1275198013400154184>",
    description: "کاربر عزیز، حساب کاربری پلیکس اس ام پی شما در دیسکورد راه اندازی شد! هم اکنون می توانید به آسانی از سرویس های ما استفاده کنید.\n\n*سطح شما کاربر معمولی است، لطفا محصولی خریداری کنید تا ارتقاع سطحی داشته باشید*",
    color: Colors.ACCEPT,
    ..._embedStatics()
  }
}