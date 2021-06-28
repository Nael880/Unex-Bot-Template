const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const memberCount = require('./member-count');

client.on("ready", function(){
  console.log(`${client.user.username} Is Online !`);
  client.user.setActivity("!help", {type: "PLAYING"});

  memberCount(client)
});
client.on("message", message => {
  if (message.content === '!reaction') {
    message.react('😄');
  }
  if (message.content.split('').join('') === '!roll') {
    return message.reply(`Vous avez obtenu : ${Math.floor((Math.random() * 6) + 1)}`);
   }
  if (message.content === '!help') {
    return message.reply('**Voici la liste des commandes :** \n-"!infos" --> Les Infos du bot\n-"!reaction" --> Le bot réagis à ton message :DD\n-"!roll" --> Tire un nombre au hasard');
  }
  if (message.content === '!infos') {
    return message.reply('Bot développé par @Nael880 \nPour toute demande : @Nael880#6104');
  }






  if (message.content === 'Salut') {
    return message.reply('Yo!');
   }
   if (message.content === 'Bonjour') {
    return message.reply('Yo!');
   }
   if (message.content === 'bjr') {
    return message.reply('Yo!');
   }
   if (message.content === 'slt') {
    return message.reply('Yo!');
   }
   if (message.content === 'wsh') {
    return message.reply('Yo!');
   }
});

client.login(process.env.token);