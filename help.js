const Discord = require('discord.js');
const bot = new Discord.Client();
const settings = require("../your_settings.json");
const prefix = settings.prefix;
bot.on("message", message => {
	if (message.content === "/bantuan") {

const Embed = new Discord.RichEmbed() 	.setColor('#0099ff') 	.setTitle('```Menu```') 	.setURL('https://www.youtube.com/c/Anseltsm') 	
.setAuthor('***Ansel Official***', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org') 	.setDescription('``Fitur Bot``') 	
.setThumbnail('https://i.imgur.com/wSTFkRM.png') 	
.addField('``/hapus``', '``menghapus pesan\Contoh /hapus 100 max.100``') 	.addBlankField() 	
.addField('``/avatar``', '``menampilkan avatar \Contoh /avatar @user``', true) 
.addField('``/info``', '``Untuk melihat info level``', true)

.addField('``/quotes``', '``menampilkan Quotes Random``', true) 	.setImage('https://i.imgur.com/wSTFkRM.png') 	
.setTimestamp() 	
.setFooter('```Ansel Official • 2019 • Z Development```', 'https://i.imgur.com/wSTFkRM.png'); message.channel.send(Embed);
}

});
bot.login(settings.token);