const { MessageEmbed, Discord } = require('discord.js');
const { MessageButton } = require('discord-buttons')
const db = require("quick.db")
 const ms = require('parse-ms');
const { truncate } = require("fs"); 
module.exports = {    
name: 'commands',
aliases: [""],
description: 'wana invite bot?',
run: async(client, message, args) => { 
    let cmd = args[0];
  if(!cmd) {
    const help = new MessageEmbed()
   .setColor(`BLUE`) 
    .setDescription("Please specify a category to view a list of commands from or all to view all commands. You can chose one of the following categories:\nPlease specify a category to view a list of commands from or `all` to view all commands. You can chose one of the following categories:\n`Role-Management`, `Roleplay-(NSFW)`, `NSFW`, `Help`, `Random`, `Moderation`, `Music`, `Games`, `Roleplay`, `Profile`, `Settings`, `Chat-Management`, `Giveaways`")
    message.channel.send(help);
  }
  if(cmd.toLowerCase() === 'role-management') {
    const role = new MessageEmbed()
    .setColor(`BLUE`)
    .setTitle(`:gear: Role-Management Commands`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription("`reactionroles`, `removerole <user> <role>`, `addrole`, `delrole`, `setmuterole`, `disablemuterole`\n\nTo view further information on how to use any of the commands, use `!help <command>`.")
    message.channel.send(role);
  }
  if(cmd.toLowerCase() === 'roleplay-(nsfw)') {
    const roleplaynf = new MessageEmbed()
    .setTitle(`:performing_arts: Roleplay (NSFW) Commands`)
    .setColor(`BLUE`)
      .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`\`fuck\`, \`blowjob\`, \`spank\`, \`titties\`

To view further information on how to use any of the commands, use \`!help <command>.\``)
    message.channel.send(roleplaynf);
  }
if(cmd.toLowerCase() === 'nsfw') {
const nsfw = new MessageEmbed()
.setColor(`BLUE`)
.setTitle(`:underage: NSFW Commands`)
  
.setThumbnail(client.user.displayAvatarURL())

.setDescription("`4k`, `anal`, `cumart`, `cumslut`, `boobs`, `ass`, `blowjob`, `bondage`, `femdom`, `feet`, `gasm`, `gif`, `hanal`, `hboobs`, `hentai`, `hneko`, `holo`, `keta`, `pussy`, `kitsu`, `kuni`, `nude`, `girlsolo`\n\nTo view further information on how to use any of the commands, use \`!help <command>.\`")
  
message.channel.send(nsfw);
}
if(cmd.toLowerCase() === 'help') {
  const help2 = new MessageEmbed()
  .setColor(`BLUE`)
  .setTitle(`:question: Help Commands`)
.setThumbnail(client.user.displayAvatarURL())
  .setDescription("`help [commands]`, `support`, `bug [message]`\n\nTo view further information on how to use any of the commands, use \`!help <command>.\`")
  message.channel.send(help2);
}
  if(cmd.toLowerCase() === 'random') {
    const random = new MessageEmbed()
    .setColor(`BLUE`)
    .setTitle(`:dvd: Random Commands`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription("`ship ([user])`, `calc ([amount])`, `e`, `pi`, `random [MIN. NUM] [MAX. NUM]`, `remind`, `avatar ([user])`, `ping`, `invite`, `info`, `user ([user])`, `server`, `github ([name)]`, `google ([name])`, `playstore ([game])`, `imdb ([movie])`, `screenshots`, `afk ([reason])`, `permissions`, `rank ([user])`\n\nTo view further information on how to use any of the commands, use \`!help <command>.\`")
    message.channel.send(random);
  }
if(cmd.toLowerCase() === 'moderation') {
  const mod = new MessageEmbed()
  .setColor(`BLUE`)
  .setTitle(`:hammer: Moderation Commands`)
  .setThumbnail(client.user.displayAvatarURL())
  .setDescription("\`ban\`, \`kick\`, \`clear\`, \`hackban\`, \`lock\`, \`unlock\`, \`mute\`, \`removerole\`, \`resetwarn\`, \`setnickname\`, \`slowmode\`, \`unmute\`, \`voicekick\`, \`warn\`, \`warnings\`, \`poll\`\n\nTo view further information on how to use any of the commands, use \`!help <command>.\`")
  message.channel.send(mod);
}
if(cmd.toLowerCase() === 'music') {
  const music = new MessageEmbed()
  .setColor(`BLUE`)
  .setTitle(`:musical_note: Music Commands`)
.setThumbnail(client.user.displayAvatarURL())
  .setDescription("`autoplay`, `drop`, `jump`, `loop`, `nowplaying`, `pause`, `play ([URL])`, `queue`, `resume`, `skip`, `stop`, `volume ([VOLUME])`\n\nTo view further information on how to use any of the commands, use \`!help <command>.\`")
  message.channel.send(music);
}
if(cmd.toLowerCase() === 'games') {
const games = new MessageEmbed()
  .setColor(`BLUE`)
  .setTitle(`:video_game: Games Commands`)
  .setThumbnail(client.user.displayAvatarURL())
  .setDescription("\`balance ([user])\`, \`daily\`, \`transfer ([user])\`, \`flip [amount] [heads/tails]\`, \`top\`, \`rep ([user])\`, \`weekly\`, \`work\`, \`spin\`, \`dice\`, \`slots\`, \`blackjack\`\n\nTo view further information on how to use any of the commands, use \`!help <command>.\`")
  message.channel.send(games);
}
if(cmd.toLowerCase() === 'roleplay') {
  const roleplay = new MessageEmbed()
.setColor(`BLUE`)
  .setTitle(`:performing_arts: Roleplay Commands`)
  .setThumbnail(client.user.displayAvatarURL())
  .setDescription("`kiss`, `hug`, `kill`, `gay`, `slap`, `die`, `pat`, `cry`, `waifu`, `smile`, `poke`, `feed`, `neko`, `sad`, `baka`, `nekogif`, `pfp`, `wallpapers`, `cuddle`, `nom`, `omg`, `pout`, `rickroll`, `punch`, `sleep`, `smug`, `thanks`, `tickle`, \`jail\`, \`achievement\`, \`love\`, \`triggered\`, \`avatarfusion\`, \`panda\`, \`affect\`, \`rip\`, \`meme\`, `blush`, `8ball`, `tweet [user] [text]`\n\nTo view further information on how to use any of the commands, use \`!help <command>.\`")
  message.channel.send(roleplay);
}
  if(cmd.toLowerCase() === 'profile') {
    const profile = new MessageEmbed()
    .setColor(`BLUE`)
    .setTitle(`:pencil: Profile Commands`)
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription("\`profile\`, \`setinfo [about]\`, \`level [user]\`, \`marry [user]\`, \`divorce [user]\`\n\nTo view further information on how to use any of the commands, use \`!help <command>.\`")
    message.channel.send(profile);
  }
  if(cmd.toLowerCase() === 'settings') {
    const settings = new MessageEmbed()
    .setColor(`BLUE`)
    .setTitle(`🛠️ Settings Commands`)
.setThumbnail(client.user.displayAvatarURL())
.setDescription("\`welcomehelp\`, \`setwelcomechannel [channel/I'd]\`, \`setdescription\`, \`settitle\`, \`setimage [IMAGE/URL]\`\n\nTo view further information on how to use any of the commands, use \`!help <command>.\`")
    message.channel.send(settings);
  }
  if(cmd.toLowerCase() === 'chat-management') {
    const chat = new MessageEmbed()
    .setColor(`BLUE`)
    .setTitle(`📃 Chat-Management Commands`)
.setThumbnail(client.user.displayAvatarURL())
.setDescription(`\`chatclear [user] [amount]\`

To view further information on how to use any of the commands, use \`!help <command>\`.`)
    message.channel.send(chat);
  }
if(cmd.toLowerCase() === 'giveaways') {
const gw = new MessageEmbed()
  .setColor(`BLUE`)
  .setTitle(`<:giveaways:885144170308714586> Giveaway`)
  .setThumbnail(client.user.displayAvatarURL())
  .setDescription(`\`giveawayhelp\`, \`start [channel/id] [winner] [duration] [price]\`, \`reroll [message'id]\`, \`end [message'id]\`\n\nTo view further information on how to use any of the commands, use \`!help <command>.\``)
  message.channel.send(gw);
}
if(cmd.toLowerCase() === 'all') {
const all = new MessageEmbed()
  .setThumbnail(client.user.displayAvatarURL())
        .setTitle("🦖 Royal Bot Commands")
        .addField('❓ Help',`Royal Bot is a powerful Discord bot which offers many features such as Moderation, invite tracking, giveaways, music, roleplay, economy and more.

[Support Server](https://discord.gg/8hZkZAbpnn) - [Invite Me](https://discordapp.com/oauth2/authorize?client_id=787260574551375903&scope=bot&permissions=2146958847) - [Vote Me](https://top.gg/bot/787260574551375903)`)
        .addField("🛠️ Settings", `\`welcomehelp\`, \`setwelcomechannel [channel/I'd]\`, \`setdescription\`, \`settitle\`, \`setimage [IMAGE/URL]\`, \`support\`, \`bug ([message])\``, true)
        
        .addField("<:giveaways:885144170308714586> Giveaway", `\`giveawayhelp\`, \`start [channel/id] [winner] [duration] [price]\`, \`reroll [message'id]\`, \`end [message'id]\``, true)
  .addField('🔘 Buttons',"`snake`, `wyr`")
        .addField('🎮 Games',"\`balance ([user])\`, \`daily\`, \`transfer ([user])\`, \`flip [amount] [heads/tails]\`, \`top\`, \`rep ([user])\`, \`weekly\`, \`work\`, \`spin\`, \`dice\`, \`slots\`, \`blackjack\`")
  .addField('⚙️ Role-management',"`reactionroles`, `removerole <user> <role>`, `addrole`, `delrole`, `setmuterole`, `disablemuterole`")
  .addField('📝 Profile',`\`profile\`, \`setinfo [about]\`, \`level [user]\`, \`marry [user]\`, \`divorce [user]\``)
        .addField('📀 Random',"`ship ([user])`, `calc ([amount])`, `e`, `pi`, `random [MIN. NUM] [MAX. NUM]`, `remind`, `avatar ([user])`, `ping`, `invite`, `info`, `user ([user])`, `server`, `github ([name)]`, `google ([name])`, `playstore ([game])`, `imdb ([movie])`, `screenshots`, `afk ([reason])`, `permissions`, `rank ([user])`")

  .addField('🎵 Music',"`drop`, `jump`, `loop`, `nowplaying`, `pause`, `play ([URL])`, `queue`, `resume`, `skip`, `stop`, `volume ([VOLUME])`")
        .addField('🔞 NSFW',"||`4k`, `anal`, `cumart`, `cumslut`, `boobs`, `ass`, `blowjob`, `bondage`, `femdom`, `feet`, `gasm`, `gif`, `hanal`, `hboobs`, `hentai`, `hneko`, `holo`, `keta`, `pussy`, `kitsu`, `kuni`, `nude`, `girlsolo`||")
        .addField('🔨 Moderation',`\`ban\`, \`kick\`, \`clear\`, \`hackban\`, \`lock\`, \`unlock\`, \`mute\`, \`removerole\`, \`resetwarn\`, \`setnickname\`, \`slowmode\`, \`unmute\`, \`voicekick\`, \`warn\`, \`warnings\`, \`poll\``)
        
        .addField('🎭 Roleplay',"`kiss`, `hug`, `kill`, `gay`, `slap`, `die`, `pat`, `cry`, `waifu`, `smile`, `poke`, `feed`, `neko`, `sad`, `baka`, `nekogif`, `pfp`, `wallpapers`, `cuddle`, `nom`, `omg`, `pout`, `rickroll`, `punch`, `sleep`, `smug`, `thanks`, `tickle`, \`jail\`, \`achievement\`, \`love\`, \`triggered\`, \`avatarfusion\`, \`panda\`, \`affect\`, \`rip\`, \`meme\`, `blush`, `8ball`, `tweet [user] [text]`")
        .addField('🎭 Roleplay (NSFW)',"||`fuck`, `blowjob`, `spank`, `titties`||")
        
        .addField('📃 Chat-management',`\`chatclear [user] [amount]\`\n\nTo view further information on how to use any of the commands, use \`R.help <command>\``)
          
        
        .setColor('BLUE')                 
message.channel.send(all);
  
}
  
}
  
}






