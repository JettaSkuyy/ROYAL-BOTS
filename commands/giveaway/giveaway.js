const Discord = require('discord.js')

module.exports = {
    name: "giveawayhelp",
    aliases: ["Giveaway"],
    description: "show giveaway cmd",
    run: async(client, message) => {
        const embed = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTitle("**Giveaways  ›  giveaway**")
        .setDescription("Create giveaways, reroll them, list all of the running ones and much more!")
        
.addField("end <message_id>",`
End a running giveaway.`)
.addField("start [mention/id channel] [duration] [winner_amount] [prize]",`
Start the giveaway creation process if no arguments is provided, otherwise create a giveaway in the current channel with the provided arguments.`)
.addField("reroll <message_id>",`
Draw new winners for the provided giveaway.
You can choose how many winners you want to select by providing the winner_amount argument.`)
        .setColor('BLUE')
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp();
        message.channel.send(embed)
    }
}
