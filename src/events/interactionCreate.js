import { bold, italic } from "discord.js";

const interactionCreate = async function (interaction) {
  if (interaction.isChatInputCommand() && interaction.commandName === "poll") {
    const emojiList = [
      "1️⃣",
      "2️⃣",
      "3️⃣",
      "4️⃣",
      "5️⃣",
      "6️⃣",
      "7️⃣",
      "8️⃣",
      "9️⃣",
      "🔟",
    ];
    let reply = italic(bold(`${interaction.options.get("prompt").value}`));

    for (let i = 1; i < interaction.options.data.length; i++) {
      reply += `\n${i}. ${interaction.options.data[i].value}`;
    }

    const message = await interaction.reply({
      content: reply,
      fetchReply: true,
    });

    for (let i = 1; i < interaction.options.data.length; i++) {
      await message.react(emojiList[i - 1]);
    }
  }
};

export default interactionCreate;
