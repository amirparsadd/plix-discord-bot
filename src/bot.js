import 'dotenv/config';

import { Client, IntentsBitField, REST, Routes } from 'discord.js';
import { CommandKit } from 'commandkit';

import { dirname as dn } from 'node:path';
import { fileURLToPath } from 'node:url';
import setupDatabase from './database/index.js';
import { mappedProducts, setupProducts } from './data/products.js';

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

// this looks like compiled code but trust me its needed to work
(async () => {
  setupProducts()
  await setupDatabase()
  await client.login(process.env.TOKEN);
})();