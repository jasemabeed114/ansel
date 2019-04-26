const Discord = require("discord.js") 
const settings = require("./your_settings.json");
const antispam = require("./antispam.js");
const level = require("./level.js");
const spam = require("./spam.js");
const quotes = require("./quotes.js");
const hapus = require("./command/hapus.js");
require ("./command/help.js");
require("./command/wlc.js");
require ("./command/avatar.js");
///require ("./command/daily.js");
///const help = require("./command/help.js");
///require("./command/commands.js");
require ("./command/bot.js");
///require ("./command/music.js");
const bot = new Discord.Client()
bot.on('ready', async => {
console.log("Rainbow Selesai" + "\n" + bot.user.tag + "\n" + "Server Count: "  + bot.guilds.size + "\n" + "Cached users: " + bot.users.size + "\n" + "Enjoy!")
bot.user.setActivity("Ansel Server", {type: "LISTENING"});

let activNum = 0;
setInterval(function() {
	if (activNum === 0) {
		bot.user.setActivity("BOT INDONESIA🇮🇩", {type: "LISTENING"});
		activNum = 1;
	 } 
	 if(activNum === 1) {
		bot.user.setActivity("Digunakan 7 Server!",{type: "STREAMING"});
		activNum = 2;
		if(activNum === 2) {
			bot.user.setActivity("Total 5864 Member!", {type: "WATCHING"});
		}else return;
		activNum = 0;
		
		}
}, 12000);

});



bot.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(command === settings.prefix + settings.rainbowcommand) {
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [0])
        if(!rolez) return message.channel.send(settings.messageresponse.rolenotfound).catch(err=> message.channel.send("No response"))
        if(!message.guild.member(bot.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send(settings.messageresponse.missingperm).catch(err=> message.channel.send("no response"))
        var colors = settings.rainbowrole
        var rolestart = setInterval(function() {
            var colorsz = colors[Math.floor(Math.random() * colors.length)];
            rolez.setColor(colorsz)
        }, settings.rainbowdelay); 
            message.channel.send(settings.messageresponse.success).catch(err=> message.channel.send("No response"))

    }
    if(command === settings.prefix + settings.rainbowstop) {
            setTimeout(function () {
           process.exit()
            }, 1000);
           
                       message.channel.send(settings.messageresponse.rainbowstop).catch(err=> message.channel.send("No response"))
                       }
});
bot.login(settings.token).catch(err=> console.log("Incorrect Token was provided"))