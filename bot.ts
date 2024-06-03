import { Bot } from "https://deno.land/x/grammy@v1.24.0/mod.ts";
import { addReplyParam } from "https://deno.land/x/grammy_autoquote@v2.0.6/mod.ts";

const botToken = Deno.env.get("BOT_TOKEN");
const bot = new Bot(botToken);

bot.command("start", async (ctx) => {
  ctx.reply("Hello there");
});

bot.hears(/https:\/\/(?:www\.)?instagram\.com\/reel\/(\w+)(?:\/\?.+)?/i, async (ctx) => {
  ctx.api.config.use(addReplyParam(ctx));

  const reelId = ctx.match[1];

  ctx.reply(`https://ddinstagram.com/reel/${reelId}`);
});

console.info("Starting bot...");
bot.start();
