import { CommandInteraction } from "discord.js";

export const data = {
  name: 'ping',
  description: 'Pong!',
}

/**
 * 
 * @param {import("commandkit").CommandProps} param0 
 */
export function run({ interaction, client, handler }) {
  interaction.reply(`:ping_pong: Pong! ${client.ws.ping}ms`);
}

export const options = {
  devOnly: false,
  deleted: false,
  needsAccount: true
}