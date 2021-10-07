const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'pat',
    run(client, message, args){
        if (!message.guild) return;
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.pat();
                const embed = new Discord.MessageEmbed()
                .setColor('BLUE')
                
                .setDescription(`${message.author.username} pats`)
                .setImage(GIF.url)
                
                message.channel.send(embed);
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.pat();
            const embed = new Discord.MessageEmbed()
            .setColor('BLUE')
            
            .setDescription(`${message.author.username} pats ${member.user.username}`)
            .setImage(GIF.url)
            
            message.channel.send(embed);
            }
            ping();
        }
    }
}