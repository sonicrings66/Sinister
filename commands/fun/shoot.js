const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'shoot',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
        message.delete(); 
let l = message.mentions.members.first() 
const victimnam = message.mentions.users.first();
if (victimnam.id === "811358023343538176") {message.channel.send("Sorry I can't let you shoot him")}
else {

if(!l) message.reply(`:x: **Please Mention someone to Shoot!** :x:`)
else {

let shooters = [
"https://media.giphy.com/media/f2fVSJWddYb6g/giphy.gif",
"https://bestanimations.com/media/guns/701799475soldier-firing-rifle-animated-gif-2.gif",
"https://media3.giphy.com/media/9umH7yTO8gLYY/giphy.gif",
"https://i.gifer.com/LtWG.gif",
"https://media4.giphy.com/media/RXbc4wDSqYs3m/giphy.gif",
"https://i.chzbgr.com/original/7912091392/h94242690/wow-so-murica-much-shoot",
"https://i.pinimg.com/originals/ea/00/4b/ea004b2bbabef628f904b2cb7ab18a14.gif",
"https://i.chzbgr.com/full/6958223104/h1FD90C65/dont-try-to-shoot-ninjas"
];

let embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle(':sob: Get Shot!!')
.setDescription(`${message.author} Just Shot ${l}! It hurts! :sob:`)
.setImage(`${shooters[Math.floor(Math.random() * shooters.length)]}`)
.setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())

message.channel.send({embeds: [embed]})
}
}
}}