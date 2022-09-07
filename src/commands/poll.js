import { SlashCommandBuilder } from "discord.js";

const poll = new SlashCommandBuilder()
  .setName("poll")
  .setDescription(
    "Create a poll with up to ten options. At least one option is required!"
  )
  .addStringOption((option) => {
    return option
      .setName("prompt")
      .setDescription("Prompt of the poll")
      .setRequired(true);
  })
  .addStringOption((option) =>
    option.setName("option1").setDescription("Option").setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("option2")
      .setDescription("Another option")
      .setRequired(false)
  )
  .addStringOption((option) =>
    option
      .setName("option3")
      .setDescription("And another one")
      .setRequired(false)
  )
  .addStringOption((option) =>
    option.setName("option4").setDescription("The Option").setRequired(false)
  )
  .addStringOption((option) =>
    option
      .setName("option5")
      .setDescription("The Best Option")
      .setRequired(false)
  )
  .addStringOption((option) =>
    option
      .setName("option6")
      .setDescription("The Worst Option")
      .setRequired(false)
  )
  .addStringOption((option) =>
    option
      .setName("option7")
      .setDescription("The Mediocre Option")
      .setRequired(false)
  )
  .addStringOption((option) =>
    option
      .setName("option8")
      .setDescription("One Last Option")
      .setRequired(false)
  )
  .addStringOption((option) =>
    option
      .setName("option9")
      .setDescription("Definitely The Last Option")
      .setRequired(false)
  )
  .addStringOption((option) =>
    option.setName("option10").setDescription("Final Option").setRequired(false)
  );

export default poll.toJSON();
