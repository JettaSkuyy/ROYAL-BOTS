const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "sleep",
  aliases: [],
  usage: "sleep",
  description: "display sleep",
  run: async(client, message, args) => {

superagent.get('https://shiro.gg/api/images/sleep').end((err, response) => {
  const embed = new Discord.MessageEmbed()
  .setTitle(":zzz: Sleep")
  .setDescription(`${message.author.tag} is sleeping tight :3`)
  .setImage(response.body.url)
  .setColor('BLUE')
  .setURL(response.body.url);
message.channel.send(embed);
    })
  }
}