const { MessageEmbed, Discord } = require('discord.js');
const { MessageButton } = require('discord-buttons')

module.exports = {    
name: 'vote',
aliases: [],
description: 'wana invite bot?',
run: async(client, message, args) => { 

const kdor = new MessageEmbed()        
.setThumbnail(client.user.displayAvatarURL())
        .setAuthor("Royal Bot#6051", client.user.displayAvatarURL())
        .setDescription(`Voting Infomation
Voting on Royal bot lists sites really helps support Suggester. [Support Server](https://discord.gg/8hZkZAbpnn) with the votes you accumulate!
Wheren to Vote
You Can Vote on sites:
➪  [top.gg](https://top.gg/bot/787260574551375903)
➪ [Discordbotlist](https://discordbotlist.com/bots/royal-bot)
➪ [Bots For Discord](https://discords.com/bots/bot/787260574551375903)`)
        .setColor('BLUE')
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp();    
   
const juii = new MessageButton()        
.setStyle('url')        
.setURL('https://top.gg/bot/787260574551375903')        
.setLabel('Top.gg')        

const bok = new MessageButton()

.setStyle('url')
.setURL('https://discordbotlist.com/bots/royal-bot')
.setLabel('Discordbotlist')

const kduy = new MessageButton()        
.setStyle('url')        
.setURL('https://discords.com/bots/bot/787260574551375903')        
.setLabel('Bots For Discord')        
message.channel.send(kdor, { buttons: [juii, bok, kduy] })    
}}