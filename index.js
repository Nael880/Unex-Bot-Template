const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');

client.on("ready", function(){
  console.log(`${client.user.username} Is Online !`);
  client.user.setActivity("!help", {type: "PLAYING"});

});
client.on("message", message => {
  if (message.content === '!reaction') {
    message.react('😄');
  }
  if (message.content.split('').join('') === '!roll') {
    return message.reply(`Obtained : ${Math.floor((Math.random() * 6) + 1)}`);
   }
  if (message.content === '!help') {
    return message.reply('Set Up your command list here');
  }
  if (message.content === '!infos') {
    return message.reply('Unex Bot template by Nael880');
  }

});

client.login(process.env.token);