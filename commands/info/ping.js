const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "ping",
    aliases: ["latency", "pong"],
    description: "Returns the bot's ping!",
    run: async(client, message) => {
        const msg = await message.channel.send(`🏓 Pinging...`)
        const embed = new MessageEmbed()
        
        .setDescription(`Reset: ${Math.floor(msg.createdAt - message.createdAt)}ms`)
        .setColor('BLUE')
        await message.channel.send(embed)
            msg.delete()
    }
}
