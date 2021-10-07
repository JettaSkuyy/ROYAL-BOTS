const {Collection, Client, Discord, User} = require('discord.js')
const { MessageEmbed } = require('discord.js')
require('@weky/inlinereply');
const fs = require('fs')
const ms = require('ms')
const client = new Client();
require('discord-buttons')(client);
const db = require('quick.db')
const moment = require("moment");
const Meme = require("memer-api")
client.memer = new Meme('SHNycJ21l2f')
const config = require('./config.json')
const prefix = config.prefix
client.config = config;
const ffmpeg = require('ffmpeg-static')
client.commands = new Collection();
client.queue = new Map();
client.vote = new Map();
client.aliases = new Collection();
client.util = require("./utila");
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
client.on("warn", info => console.log(info));

client.on("error", console.error)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//we will make the system first otherwise it wont works
client.snipes = new Map();
client.on('messageDelete', function(message, channel) {
      if (message.author.bot) return;
      client.snipes.set(message.channel.id, {
         content: message.content,
         profilephoto: message.author.displayAvatarURL({ dynamic : true }),
         author: message.author.tag,
         date: message.createdTimestamp,
         image: message.attachments.first() ? message.attachments.first().proxyURL : null
      }) // that should be done...
      // now let make utility folder and snipe files
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = client;
const { GiveawaysManager } = require('discord-giveaways'); //npm i discord-giveaways
client.giveaways = new GiveawaysManager(client, {
   storage: './give.json',
   updateCountdownEvery: 5000, // 5000 in seconds is 5 seconds
   default: {
      botsCanWin: false,
      embedColor: '#FF0000',
      reaction: '🎉'
   }
})
////event//////////////////////////////////////////////////////////////////////////////////////////////////////
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      let eventFunction = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      // super-secret recipe to call events with all their proper arguments *after* the `client` var.
      client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
  });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('message', async message => {
  
    const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(prefixMention)) {
    return message.channel.send(`Hii! <@${message.author.id}>, My prefix is \`${prefix}\``); //if you dont know what prefix of your bot, just ping it!
  }
    if(message.author.bot || message.channel.type === "dm") return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.guild) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length == 0) return;
    let command = client.commands.get(cmd)
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) command.run(client, message, args);
   });
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('guildMemberAdd', async member => {
  let welcomeChannel = db.fetch(`welcome_${member.guild.id}`)
    if (welcomeChannel === null) return
    const channel = member.guild.channels.cache.find(ch => ch.id === welcomeChannel);
    let img = db.get(`image_${member.guild.id}`)
  let title = db.fetch(`title_${member.guild.id}`)

  let joinMsg = db.fetch(`joinmsg_${member.guild.id}`)
    if (joinMsg === null) {
        db.set(`joinmsg_${member.guild.id}`, `Welcome {user} to {server}`)
    }
       
    let newJoinMsg = db.fetch(`joinmsg_${member.guild.id}`)
    let content = newJoinMsg
        .replace(/{user}/g, `<@${member.user.id}>`)       .replace(/{server}/g, `${member.guild.name}`)
        .replace(/{servercount}/g, `${member.guild.members.cache.size}`)
  let msgtitle = title
        .replace(/{user}/g, `${member.user.username}`)       .replace(/{server}/g, `${member.guild.name}`)
        .replace(/{servercount}/g, `${member.guild.members.cache.size}`)
      channel.send(`Hello <@${member.user.id}>`)  
    let embed = new MessageEmbed()
  
      .setColor("BLUE")
.setAuthor(`${member.user.tag}`, member.user.displayAvatarURL({dynamic : true}))
      .setTitle(msgtitle)
      .setDescription(content)
        .setImage(img)
      .setThumbnail(member.user.displayAvatarURL({dynamic : true}))
      .setFooter(`${member.user.username} you're the ${member.guild.members.cache.size}rd Members In ${member.guild.name}`, member.user.displayAvatarURL({dynamic : true}))
.setTimestamp()
      if(channel)
      {      channel.send(embed).catch(err => console.log(err))
    }
});
client.login(config.token)
