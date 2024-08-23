import { ActivityType, PresenceUpdateStatus } from 'discord.js';

/** * @param {import('discord.js').Client} client */
export default async (client) => {
    client.user.setPresence({ status: PresenceUpdateStatus.Idle })
    client.user.setActivity({ name: "SMP Prices", type: ActivityType.Competing })
}