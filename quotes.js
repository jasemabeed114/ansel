const config = require("./config.json");
const settings = require("./your_settings.json");
var quotes = config.quotes;
var prefix = settings.prefix;
var command = "quotes";

var InfiniteLoop = require('infinite-loop');
var il = new InfiniteLoop;

function randomQuote() {
	return quotes[Math.floor(Math.random() * quotes.length)];
};
il.add(randomQuote, []);

il.run();

console.log(randomQuote());

var Discord = require("discord.js");
var bot = new Discord.Client();
bot.on("message", (message) => {
  if (message.content.startsWith(prefix+command)) {
    message.channel.sendMessage(randomQuote());
  }
});

bot.on("message", message => {
  if (message.content === "ping") {
    message.channel.sendMessage("Pong!");
  }
});

bot.login(settings.token);