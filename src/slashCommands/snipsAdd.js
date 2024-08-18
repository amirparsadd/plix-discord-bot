const {
  client
} = require('../configuration/bot');

const {
  SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('snips-add')
    .setDescription(
      'Adds a Snip To The Snip List'
    )
    .addStringOption(option => option.setName('name').setDescription('The Name Of The Snip').setRequired(true))
    .addStringOption(option => option.setName('content').setDescription('The Content Of The Snip').setRequired(true)),
  
  /**
   * 
   * @param {import('discord.js').ChatInputCommandInteraction} interaction 
   */
  async execute(interaction) {
    try {
      interaction.reply(`${interaction.options.get("name").value} ${interaction.options.get("content").value}`)
    } catch (e) {
      console.log(`There was an error with the undefined command: ${e}`);
    }
  },
};