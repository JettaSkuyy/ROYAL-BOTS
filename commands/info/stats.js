const discord = require("discord.js");
var cpuStat = require('cpu-stat');
const si = require('systeminformation');
const os = require('os');
const ms = require('ms');
var osutils = require('os-utils');


var avgClockMHzCore2 = cpuStat.clockMHz(2);
    var totalCores = cpuStat.totalCores();
    var platform = os.platform();
    var uptime = os.uptime();
    var totalmem = osutils.totalmem();
    let totalRam = totalmem/1024; // Converting it to GB
    let usedRam = (process.memoryUsage().heapUsed/1024/1024).toFixed();//converted this to MB
    let freeMemCalculate = (usedRam/1024).toFixed(2); //calculating Free Ram in GB
    let freeRam = totalRam - freeMemCalculate;

module.exports = {
  name: "botinfo",
  aliases: ["info", "stats"],
    botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","ATTACH_FILES"],
 
  category: "help",
  description: "INVITE PARAS BOT",
  run: async (client, message, args) => {
    cpuStat.usagePercent(function(err,percent,seconds){
      if(err){
        return console.log(err);
      }
      si.cpu(function(data){

    let embed = new discord.MessageEmbed()
      .setTitle(`__**INFORMATION ABOUT BOT**__`)
      .addField("BOT NAME", `ROYAL BOT#6051`)
      .addField(
        "BOT DEVELOPER ",
        `<:VerifiedBotDev12:841315815063289857> JohnDavid#0009`
      )
      .addField(
        "TOTAL SERVER",
        `${client.guilds.cache.size}`,
        true
      )
      .addField(
        "TOTAL CHANNAL",
        `${client.channels.cache.size}`
      )
      .addField(
        "TOTAL USER",
            `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
        true  )
        .addField("CREATED AT", `${client.user.createdAt.toDateString()}`)
      .addField("BOT LIBRARY", `discord.js v13.0.1`)
      .addField("NODE.JS", `16.7.0`)
    .addField("RAM USAGE",`${usedRam}MB /${totalRam.toFixed(2)}GB`)
    .addField("CPU",`${os.cpus()[0].model}`)
.addField("BOT LINK","https://top.gg/bot/787260574551375903")

      .setColor("#000000")
      .setFooter(`information about bot`);

    message.channel.send(embed);
      })
    })
  }
        }