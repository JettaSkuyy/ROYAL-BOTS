
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "avatar",
  cooldown: 0,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const user =
      message.mentions.users.first() ||
      client.users.cache.get(args[0]) ||
      message.author;

    const avatarPng = user.avatarURL({ dynamic: true, format: "png", size: 1024 });
    const avatarJpg = user.avatarURL({ dynamic: true, format: "jpg", size: 1024 });
    const avatarWebp = user.avatarURL({ dynamic: true, format: "webp", size: 1024 });

    const embed = new MessageEmbed()
      .setColor(`BLUE`)
      .setTitle(`Avatar from: ${user.username}`)
      .setDescription(`**➥** PNG:\n[**__Png__**](${avatarPng})\n**➥** JPG:\n[**__Jpg__**](${avatarJpg})\n**➥** WEBP:\n[**__Webp__**](${avatarWebp})`)
      .setImage(avatarWebp)
      .setTimestamp()
      .setFooter(
        `• Author: ${message.author.tag}`,
        message.author.displayAvatarURL({ dynamic: false, size: 1024 })
      );
    await message.channel.send(embed);
  },
};