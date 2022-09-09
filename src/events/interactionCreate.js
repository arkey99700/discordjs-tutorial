import importDynamic from "../utils/importDynamic.js";

const interactionCreate = async function (interaction) {
  const { commandName } = interaction,
    subcommandGroupName = interaction.options.getSubcommandGroup(false),
    subcommandName = interaction.options.getSubcommand(false);

  importDynamic("handlers", {
    baseCommand: commandName,
    subGroup: subcommandGroupName,
    subCommand: subcommandName,
  }).then((command) => command.default(interaction));
};

export default interactionCreate;
