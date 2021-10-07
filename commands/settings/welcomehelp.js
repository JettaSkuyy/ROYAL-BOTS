const { MessageEmbed } = require("discord.js");
const { prefix } = require("../../config.json")
module.exports = {
  name: "welcomehelp",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "help <cmd>",
  category: ":frame_photo: WELCOME",
  run: async (client, message, args) => {
  

      let emx = new MessageEmbed()
        .setDescription(`**Note:** You must set \`welcomechannel\` \`description\`, \`title\` to start welcome and to use test command. 
      Only for \`${prefix}setwelcomechannel\` [ Compulsory ]
      setwelcomechannel <#channel>
      Only for \`${prefix}setdescription\` [ Compulsory ]
      **Tags** : **Info** : **Example**
{user} : Mention user in description : <@396906512469196811>
{server} : Display server name : KillShots Official
      {servercount} : Position to join server : 69th Member
      Only for  \`${prefix}settitle\` [ Compulsory ]
      Only for \`${prefix}setimage\` [ Optional ]
      You have to provide valid link  
       Do \`${prefix}help <command>\` to see aliases of that command`)
        .setImage("https://media.discordapp.net/attachments/795346616651350042/891890429841268756/Edited_20210927_103259.jpg")
       
        .setColor("BLUE")
        .setFooter(`Bot by: JohnDavid#0009`) 
        message.channel.send(emx)
          
          

    }
  }
