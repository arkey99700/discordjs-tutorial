import { SlashCommandBuilder } from "discord.js";

const raffle = new SlashCommandBuilder()
  .setName("raffle")
  .setDescription(
    "Create, participate in and, if necessary, end raffles manually"
  )
  .addSubcommand((subcommand) =>
    subcommand
      .setName("create")
      .setDescription("Create a raffle")
      .addStringOption((option) =>
        option
          .setName("title")
          .setDescription("Title of the raffle")
          .setRequired(true)
      )
      .addStringOption((option) =>
        option
          .setName("description")
          .setDescription("Description of the raffle")
      )
  )
  .addSubcommand((subcommand) =>
    subcommand
      .setName("enter")
      .setDescription("Enter a raffle!")
      .addStringOption((option) =>
        option
          .setName("raffle_title")
          .setDescription("Title of the title you want to join")
          .setRequired(true)
          .setAutocomplete(true)
      )
  );

export default raffle.toJSON();
