import { config } from "dotenv";
import poll from "./commands/poll.js";
import raffle from "./commands/raffle.js";
import interactionCreate from "./events/interactionCreate.js";
import { Client, Routes, REST, GatewayIntentBits } from "discord.js";

config();

const CLIENT_ID = process.env.BOT_ID;
const GUILD_ID = process.env.GUILD_ID;
const TOKEN = process.env.BOT_TOKEN;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
  ],
});

const rest = new REST({
  version: "10",
}).setToken(TOKEN);

client.on("ready", () => {
  console.log(`${client.user.username} bot is online!`);
});

client.on("interactionCreate", (interaction) => interactionCreate(interaction));

async function init() {
  const commands = [poll, raffle];

  console.log("Started refreshing application commands");
  await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
    body: commands,
  });
  client.login(TOKEN);
}

init();
