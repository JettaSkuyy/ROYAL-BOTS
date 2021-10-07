let Discord = require('discord.js');

module.exports = {
  name: "hi",
  aliases: ['hello','hlw','hola'],
  usage: "hi",
  description: "says hello",
  run: async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
      .setTitle(":wave: uWu")
      .setDescription(`Hello ${message.author.username} ✧w✧`)
      .setColor('#f01390')
      .setFooter(`{prefix}help and ${client.user.username} will help u uWu`)
  message.channel.send(embed)
  }
}