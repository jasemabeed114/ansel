const Discord = require("discord.js");
const bot = new Discord.Client();
const settings = require("../your_settings.json");
const Welcome = require("discord-welcome");

 

Welcome(bot, {

    privatemsg : "Selamat Datang  Di Capsul_Fly Silahkan Ambil Role anda Untuk membuka Server,\nNikmati Room yang kami Sediakan Dan jangan Lupa Baca Rules Server Kami Ya Kak, Salam Booyah",

    publicmsg : "Selamat DatangSurvivor @MEMBER Semoga Betah, Jangan Lupa Isi Biodata yah.... Di #📚ʙɪᴏᴅᴀᴛᴀ-ᴛᴀᴍᴜ Ambil Role Kalian Di #⊱✿⊰ᴀᴍʙɪʟ-ʀᴏʟᴇ pray @​everyone @here",

    publicchannel : "563396744780447757"

    });

bot.login(settings.token);