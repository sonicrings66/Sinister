const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'revive',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
message.delete(); 
let l = message.mentions.members.first() 


if(!l) message.reply(`:x: **Please Mention someone to Revive!** :x:`)
else {

let Revive = [
"https://media1.tenor.com/images/10bb901d44937544512191951e87a089/tenor.gif?itemid=7208628",
"https://media.tenor.com/images/f78cd58e61e4ebec69afba07b22b0d5a/tenor.gif",
"https://media1.tenor.com/images/673361484df2bd017689e1334bee2358/tenor.gif?itemid=8641672",                   
];

let embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('Revived!!')
.setDescription(`${message.author} Had Revive ${l}Am Alive Bitches`)
.setImage(`${Revive[Math.floor(Math.random() * Revive.length)]}`)
.setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())
message.channel.send({embeds: [embed]})
}
}
}