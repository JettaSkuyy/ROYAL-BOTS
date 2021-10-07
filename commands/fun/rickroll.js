let Discord = require('discord.js');

module.exports = {
  name: "nitro",
  aliases: ['genratenitro', 'rickroll'],
  usage: "rickroll",
  description: "rickroll",
  run: async (client, message, args) => {
 let nitro = new Discord.MessageEmbed()
 .setTitle("**Nitro Generator**")
 .setDescription("<:11pm_Bboost_1:865177462676914206>__Nitro Code__\n[Click Here](https://www.youtube.com/watch?v=dQw4w9WgXcQ) To Redeem Your Nitro!<:11pm_Bboost_1:865177462676914206>")
 .setColor("RED")
 .setFooter("Free Nitro! Wohoo")
 message.channel.send(nitro)
  }
}