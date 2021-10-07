module.exports = {
  name: "interaction",
 run: async (client, interaction) => {
    if (!interaction.isCommand()) return;
    const command = client.slash.get(interaction.command.name);

    await command.run(
      client,
      interaction,
      interaction.options.map((item) => item.value)
    );
  },
};