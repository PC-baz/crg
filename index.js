//bot
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`http://localhost:${port}`));
const Discord  = require('discord.js');
const token = '';
const bot = new Discord.Client();
//prefix
const prefix = '-';
//bot online event
bot.on('ready', () => {

    console.log("bot is online(press ^C to restart or close)");
    bot.user.setActivity("-help | crg bot")
})

bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ")
    if (message.content.startsWith(prefix)) {
        if (args[0] === "help") {
            const help = new Discord.MessageEmbed()
            .setTitle("help:")
            .addField("list of commands:", "-info")
            message.channel.send(help)
        }
        if (args[0] === "info") {
            const info = new Discord.MessageEmbed()
            .setTitle("server info:")
            .addField("Invite", "https://discord.gg/7kwM69Hs")
            .addField("server stats", "20")
            .addField("server Owner", "❄⛄mahdiyarcrg⛄❄")
            .addField("bot stats", "supported by: nodejs v16.13.1 LTS\nprogrammed with: discord JS v13.5.0\ncreated by: PC_baz")
            message.channel.send(info)
        }
    }
    
})

//bot login verify
bot.login(token)