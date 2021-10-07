const Discord = require('discord.js');
const config = require('../../config.json');
const db = require('quick.db')
const moment = require("moment")
require('moment-duration-format')


module.exports = {
    
        name: 'profile',
        description: 'Shows information about user',
        aliases: ["whois", "userinfo"],
        usage: '',
        accessableby: "",
    
    run: async (client, message, args) => {
        
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        let durumm;
        let durum = user.presence.status
        
        let roles = user.roles.cache.map(x => x).filter(z => z.name !== "@everyone")
        let messagecount = await db.get(`${message.guild.id}.${user.id}.messageCount`)
        
        if(!messagecount) messagecount = 0
        
        if(roles.length > 100) {
          roles = "There is so much roles to show."
        }
        
        let safe = message.author.createdTimestamp
        
        if(safe > 604800017) {
          safe = "`Reliable` <a:online12:894207610834788373>"
        } else {
          safe = "`Suspicious` <a:dark25:894207665188790333>"
        }
        
        
          if(durum === "online") durumm = `Online <a:online12:894207610834788373> `
          if(durum === "offline") durumm = `Offline <a:bcoffline:894207913982312458> `
          if(durum === "idle") durumm = `Idle <a:idle:894207799691714570>`
          if(durum === "dnd") durumm = `Do not disturb <a:dark25:894207665188790333>  `
          
          let lastMessage
          let lastMessageTime
          let nitroBadge = user.user.avatarURL({dynamic: true})
          let flags = user.user.flags.toArray().join(``)
          
          if(!flags) {
            flags = "User doesn't have any badge"
          }
        
         flags = flags.replace("HOUSE_BRAVERY", "• <:HouseofBravery:894203934267289630> \`HypeSquad Bravery\`")
         flags = flags.replace("EARLY_SUPPORTER","• <:BadgeEarlySupporter:894208654633467944> \`Early Supporter\`")
      
    flags = flags.replace("EARLY_VERIFIED_DEVELOPER","• <:verified12:894208902038691851> \`Verified Bot Developer\`") 
 
         flags = flags.replace("VERIFIED_DEVELOPER","• <:verified12:894208902038691851> \`Verified Bot Developer\`")        
         flags = flags.replace("HOUSE_BRILLIANCE","• <:BadgeHypeSquadBrilliance:894204170100437022> \`HypeSquad Brilliance\`")
         flags = flags.replace("HOUSE_BALANCE","• <:HouseofBalance:894203984682827897> \`HypeSquad Balance\`")
         flags = flags.replace("DISCORD_PARTNER","• <:BadgeDiscordPartner:894209421759115305> \`Partner\`")
         flags = flags.replace("HYPESQUAD_EVENTS","• <a:CH_IconHypesquadShiny:894209788878135296> \`Hypesquad Event\`")
         flags = flags.replace("DISCORD_CLASSIC","• <:BadgeNitro:894155379724935168> \`Discord Classic\`")
      
          if(nitroBadge.includes("gif")) {
           flags = flags + `
      • <:3670_NitroBoost:894210727332687893>  \`Nitro\``
          }
          
          let voice = db.get(`${message.guild.id}.${user.user.id}.voicetime`)
          let stat =  user.presence.activities[0]
          let custom
          
        if(user.presence.activities.some(r => r.name === "Spotify")) {
           custom = "Listening to Spotify"
         } else if(stat && stat.name !== "Custom Status") {
           custom = stat.name
         } else {
           custom = "Nothing"
         }
      
          if(user.presence.activities.some(r => r.name !== "Spotify") && stat && stat.state !== null) {
            stat = stat.state
          } else {
            stat = "Nothing"
          }
         
          
          if(!voice) {
            voice = "0 hours, 0 minutes and 0 seconds"
          } else {
            voice = moment.duration(voice).format("h [ hours,] m [ minutes and] s[ seconds]")
          }
      
         if(user.lastMessage) {
           lastMessage = user.lastMessage.content
           lastMessageTime = moment(user.lastMessage.createdTimestamp).format('MMMM Do YYYY, H:mm:ss a')
         } else {
           lastMessage = "None"
           lastMessageTime = "None"
         }
          
          const embeddd = new Discord.MessageEmbed()
          .setColor(`BLUE`)
          .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
          .setDescription(`__**User Info**__
      **•** \`ID:\` **${user.id}**
      **•** \`Profile:\` **${user}**
      **•** \`Bot:\` **${user.user.bot ? 'Yes' : 'No'}**
      **•** \`Created At:\` **${moment(user.user.createdAt).format('MMMM Do YYYY, H:mm:ss a')}**
      __**Member Info**__
      **•** \`Nickname:\` **${user.displayName ? user.displayName : 'yok'} **
      **•** \`Joined At:\` **${moment(user.joinedAt).format('MMMM Do YYYY, H:mm:ss a')}**
      **•** \`Activity:\` **${custom}**
      __**Roles:**__
      ${roles}
      __**Messages Info**__
      **•** \`Last Message:\` **${lastMessage}**
      **•** \`Last Message At:\` **${lastMessageTime}**
      **•** \`Message's Count:\` **${messagecount}**
      __**Badge Information**__
      ${flags} 
      
      __**Safety Check**__
      • ${safe}`)
          .setThumbnail(user.user.avatarURL({dynamic: true}))
          .setTimestamp()
          .setFooter(client.user.username, client.user.displayAvatarURL())
      message.react ('838102178378809355')
          message.channel.send(embeddd)

    }
}