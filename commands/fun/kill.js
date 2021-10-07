const Discord = require('discord.js');
const API = require('anime-images-api')
const images_api = new API() 



module.exports = {
    name: "kill",
    description: "Kill a user lmao",
    usage: "<@user>",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: [],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3  
     */
      run: async(client, message, args) => {

//Returning a resolved Promise
if (!message.guild) return;
            if (message.mentions.members.size === 0) {
            async function no_ping() {
const GIF = await images_api.sfw.kill();
        const Wink = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} kills`)
        .setImage(GIF.image)
        
        .setColor(`BLUE`)
        message.channel.send(Wink);
}
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const member = message.mentions.members.first();
            const GIF = await images_api.sfw.kill();
const Wink = new Discord.MessageEmbed()
.setTitle(`${message.author.username} kills ${member.user.username}`)
.setImage(GIF.image)
.setColor(`BLUE`)
message.channel.send(Wink);
            }
            ping();
        }
    }
}
