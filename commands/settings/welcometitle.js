const Discord = require('discord.js')
const fs = require('fs');
const db = require('quick.db')
module.exports = {
    name: "welcometitle",
    aliases: ["settitle"],
    description: "set Text on welcome",
    run: async(client, message, args) => {
        if (!args.length) {
            return message.channel.send({
                embed: {
                    title: 'Missing Arguments',
                    description: `> **Variables**
                    > **Members**
                    > \`{user}\` - The member's name
                    > \`{server}\` - The server's name
                    > \`{servercount}\` - The server counter
                    `,
                    fields: [{
                        name: 'Set Join Message',
                        value: '`welcomemessage <joinMsg>`',
                        inline: true
                    }, {
                        name: 'Default Value',
                        value: 'Welcome {user}! We now have {servercount} member!'
                    }, {
                        name: 'Currect Value',
                        value: `\`\`\`\n${db.fetch(`title_${message.guild.id}`)}\n\`\`\``
                    }],
                    color: "PINK"
                }
            })
        }
        let newJoinMessage = args.join(" ")
        db.fetch(`title_${message.guild.id}`)
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({
            embed: {
                title: "Missing Permissions"
            }
        })
        let title = args.join(" ")
        db.set(`title_${message.guild.id}`, title)
        await message.channel.send({
            embed: {
                title: "Success!",
                color: "BLUE",
                description: `I have set the join value to \`${title}\`. If you want to preview it, please emit the event!`
            }
        })
    }
          }