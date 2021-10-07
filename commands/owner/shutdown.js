const owner = ["396906512469196811"];
module.exports = {
  name: "shutdown",
  description: "Run A Whole Code With This Command!",
  category: "owner",
  usage: "eval <code>",  
run: async(client, message, args) => {
        if (message.author.id != owner) {
      return message.channel.send("The Commands Only Owner")
        }
  await message.channel.send(`☑️ Bot is now turned off !!`)
        process.exit()
    }
}
    