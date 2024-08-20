import { ActivityType, PresenceUpdateStatus } from 'discord.js';

/** * @param {import('discord.js').Client} client */
export default async (client) => {
    console.log(`🤖 ${client.user.displayName} is online!`);

    client.user.setPresence({ status: PresenceUpdateStatus.Idle })
    client.user.setActivity({ name: "SMP Prices", type: ActivityType.Competing })
}