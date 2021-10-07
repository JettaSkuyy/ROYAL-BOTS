const {
    MessageEmbed
} = require("discord.js");
const {
    stripIndents
} = require("common-tags");

const config = require("../../config.json")
const devname = config.devname
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;
module.exports = {
    name: "help",
    aliases: ["h"],
    cooldown: 3,
    category: "INFORMATION COMMANDS",
    description: "Returns all commands, or one specific command info",
    useage: "help [Command]",
    run: async (client, message, args) => {
        const roleColor =
            message.guild.me.displayHexColor === "#000000"
                ? "#ffffff"
                : message.guild.me.displayHexColor;

        if (!args[0]) {
            let categories = [];

            readdirSync("./commands/").forEach((dir) => {
                const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
                    file.endsWith(".js")
                );

                const cmds = commands.map((command) => {
                    let file = require(`../../commands/${dir}/${command}`);

                    if (!file.name) return "No command name.";

                    let name = file.name.replace(".js", "");

                    return `\`${name}\``;
                });

                let data = new Object();

                data = {
                    name: dir.toUpperCase(),
                    value: cmds.length === 0 ? "In progress." : cmds.join(" "),
                };

                categories.push(data);
            });

            const embed = new MessageEmbed()
   .setTitle(`Royal Bot Help`)
   .setDescription(`Please specify a command you want to view help for. To see a list of available commands, use \`!commands <category>\` to view the commands for a specific category or \`!commands all\` to view all available commands.

If you need help beyond what the commands provide, feel free to use \`!support\` and join our support server. We're always happy to help with any troubles you might have.

if Bot has License \`!License\``)             .setThumbnail(client.user.displayAvatarURL())
                .setColor(`BLUE`)
                
            return message.channel.send(embed);
        } else {
            const command =
                client.commands.get(args[0].toLowerCase()) ||
                client.commands.find(
                    (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
                );

            if (!command) {
                const embed = new MessageEmbed()
                    .setTitle(`Invalid command! Use \`${prefix}help\` for all of my commands!`)
                    .setColor(`BLUE`)
                return message.channel.send(embed);
            }

            const embed = new MessageEmbed()
          
  .setTitle(`${command.usage}`)              
                .setDescription(`${command.description}`)
                .addField(
                    "Aliases",
                    command.aliases
                        ? `\`${command.aliases.join("` `")}\``
                        : "No aliases for this command."
                )
                .setFooter("Bot by JohnDavid#0009")
                .setColor(`BLUE`)
            return message.channel.send(embed);
        }
    }
}