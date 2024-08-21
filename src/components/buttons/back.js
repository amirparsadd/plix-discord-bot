import { ButtonBuilder, ButtonStyle } from "discord.js"

const BACK_EMOJI_ID = "1275785145600966676"

export function backButton(customId = "BACK"){
  const backButton = new ButtonBuilder()
    .setEmoji(BACK_EMOJI_ID)
    .setLabel("بازگشت")
    .setStyle(ButtonStyle.Secondary)
    .setCustomId(customId)

  return backButton
}