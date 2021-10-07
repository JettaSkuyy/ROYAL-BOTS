const glob = require("glob"),
  path = require("path"),
  config = require("../../config.json");

module.exports = async (client) => {
  const commandFiles = glob.sync("./slash/**/**/*.js");
  for (const file of commandFiles) {
    const command = require(path.resolve(file));

    client.slash.set(command.name, command);
    const data = {
      name: command.name,
      description: command.description || "Empty Description",
      options: command.options ? command.options : [],
    };
    //global command creation :D
    config.dev
      ? client.guilds.cache.get("886925232651243560").commands.create(data)
      : client.application.commands.create(data);
  }
};