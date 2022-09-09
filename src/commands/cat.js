import { SlashCommandBuilder } from "discord.js";

const poll = new SlashCommandBuilder()
  .setName("cat")
  .setDescription("Get a random cat picture or a random cat fact!")
  .addSubcommand((subcommand) =>
    subcommand.setName("fact").setDescription("Get a random cat fact!")
  )
  .addSubcommand((subcommand) =>
    subcommand
      .setName("pic")
      .setDescription(
        "Get a random cat picture! Caution: the amount of cats is limited!"
      )
  );

export default poll.toJSON();
