/** * @param {import('discord.js').Client} client */
export default async (client) => {
    console.log(`${client.user.tag} is online!`);

    client.user.setPresence({ status: "idle" })
    client.user.setActivity({ name: "Your SMPs", type: 3 })
}