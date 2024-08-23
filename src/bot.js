import 'dotenv/config';

import { Client, IntentsBitField, REST, Routes } from 'discord.js';
import { CommandKit } from 'commandkit';

import { dirname as dn } from 'node:path';
import { fileURLToPath } from 'node:url';
import setupDatabase from './database/index.js';
import { setupProducts } from './data/products.js';

const dirname = dn(fileURLToPath(import.meta.url));

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

new CommandKit({
    client,
    eventsPath: `${dirname}/events`,
    commandsPath: `${dirname}/commands`,
    validationsPath: `${dirname}/validators`
});

// Must be wrapped in async
(async () => {
  setupProducts()
  setupDatabase() //? Mongoose Can Work Before Initializing so why dont we increase bot run time speed by not waiting for DB to connect
  await client.login(process.env.TOKEN);
})();