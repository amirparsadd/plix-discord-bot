import { getCdnUrl } from "../../utils/cdn";

export function _embedStatics(){
  return {
    author: {
      name: "RoboPlix",
      icon_url: getCdnUrl("roboplix.png")
    },
    footer: {
      text: "Made With 💙 By PlixSMP Developers"
    }
  }
}