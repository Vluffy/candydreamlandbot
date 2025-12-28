import { Client, GatewayIntentBits } from "discord.js";
import words from "./words.json" assert { type: "json" };

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages
  ]
});

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  const mentioned = message.mentions.has(client.user);
  const content = message.content.toLowerCase();

  if (mentioned && content.includes("stuffi")) {
    const codeword =
      randomFrom(words.list1) +
      randomFrom(words.list2) +
      randomFrom(words.list3);

    try {
      await message.author.send(
        `🍬 **CandyDreamer Codewort:**\n\`${codeword}\``
      );
    } catch {
      console.log("❌ DM konnte nicht gesendet werden");
    }
  }
});

client.login(process.env.BOT_
             TOKEN);
