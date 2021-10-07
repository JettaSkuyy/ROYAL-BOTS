const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "lick",
  aliases: [],
  usage: "lick",
  description: "display lick",
  run: async(client, message, args) => {

if (!message.guild) return;

  if (message.mentions.members.size === 0) {
    async function no_ping() {
    superagent.get('https://shiro.gg/api/images/lick').end((err, response) => {

    const embed = new Discord.MessageEmbed()
      
      .setDescription(`${message.author.username} licks`)
      .setImage(response.body.url)
      .setColor('BLUE')
      
      .setURL(response.body.url);
  message.channel.send(embed);
    })
   }
  no_ping();
  }

  if (message.mentions.members.size !== 0) {
    async function ping() {
    const member = message.mentions.members.first();
    superagent.get('https://shiro.gg/api/images/lick').end((err, response) => {

    const embed = new Discord.MessageEmbed()
      
      .setDescription(`${message.author.username} licks ${member.user.username}`)
      .setImage(response.body.url)
      .setColor('BLUE')
      
      .setURL(response.body.url);
  message.channel.send(embed);
    })
   }
  ping();
  }
  
  }
}