const Discord = require("discord.js");
const client = new Discord.Client()
const antispam = require("discord-anti-spam");
const settings = require("./your_settings.json");

client.on('ready', async => {
	console.log('Anti Spam Aktif')
});



client.on('ready', () => {


	antispam(client, {

		warnBuffer: 3,

		maxBuffer: 5,

		interval: 1000,

		warningMessage: "⚠️WARNING⚠️ SPAM SANKSI BANNED PERMANEN @here",

		maxDuplicatesWarning: 4,

		maxDuplicatesBan: 6,

		deleteMessageAfterBanForPastDay: 7,

		exemptRoles: ["✪✪👑 Member Devisi Free Firee 👑✪✪", "✪✪✪✪  ️Boys Tampan ✪✪✪✪", "✪✪✪✪✪✪ Princess ✪✪✪✪✪✪", ""],

		exemptUser: [],

});


});



client.on('message', msg => {


  client.emit('checkMessage', msg);

}) ///GANTI TOKEN NYA SAMA BOT TOKEN KAMU 
client.login(settings.token);