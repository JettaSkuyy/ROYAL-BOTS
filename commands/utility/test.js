const { MessageEmbed, Discord } = require('discord.js');
const { MessageButton } = require('discord-buttons')

module.exports = {    
name: 'support',
aliases: [],
description: 'wana invite bot?',
run: async(client, message, args) => { 

const embed = new MessageEmbed()        
.setThumbnail(client.user.displayAvatarURL())
        .setAuthor("Royal Bot#6051", client.user.displayAvatarURL())
        .setDescription(`Invite me to your Server - [Click Here](https://discordapp.com/oauth2/authorize?client_id=787260574551375903&scope=bot&permissions=2146958847)
Need Support? or found any bug - [Click Here](https://discord.gg/8hZkZAbpnn)
Want to Support us more? Vote me on Top.gg - [Click Here](https://top.gg/bot/787260574551375903)`)
        .setColor('BLUE')
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp();    
   
const inv = new MessageButton()        
.setStyle('url')        
.setURL('https://discord.com/oauth2/authorize?client_id=787260574551375903&scope=bot&permissions=2146958847')        
.setLabel('Invite me!')        

const bb = new MessageButton()

.setStyle('url')
.setURL('https://top.gg/bot/787260574551375903')
.setLabel('Vote Me')

const ss = new MessageButton()        
.setStyle('url')        
.setURL('https://discord.gg/8hZkZAbpnn')        
.setLabel('Support Server!')        
message.channel.send(embed, { buttons: [inv, ss, bb] })    
}}