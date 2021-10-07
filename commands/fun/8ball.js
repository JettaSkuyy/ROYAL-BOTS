const Discord = require('discord.js');

module.exports = {
 name: "8ball",
 aliases: [],
 usage: "8ball",
 description: "8ball",
 run: async(client, message, args) => {

 let replies = ["Yes","No","Maybe","Not sure","Shut up you rat!","sure, why not","when you grow a braincell, yes","THAT'S A SOLID ****NO****","Nah that sucks tbh"]
  let randomized = replies[Math.floor(Math.random() * replies.length)]
  let sentence = message.content.split(" ");
   sentence.shift();
   sentence = sentence.join(" ");
 if (!sentence) return message.reply("WHAT DO YOU WANT TO ASK 8BALL?")
  let ballEmbed = new Discord.MessageEmbed()
    .setTitle("8Ball")
    .addField("Your Question", `${sentence}`)
    .addField("8Ball:", `${randomized}`)
    .setColor("RANDOM")
    .setFooter(" ")
   message.channel.send(ballEmbed)
 }
}