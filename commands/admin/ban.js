
const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'ban',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
        message.delete()
if (message.member.permissions.has("BAN_MEMBERS")){
const anntext = message.content
.slice(''.length)
.trim()
.split(/ +/);
anntext
.shift()
.toLowerCase()
.split(' ')[0];
let member = message.mentions.members.first()
if(!member) message.channel.send("mention someone to ban!")
else { 
    member.ban().then(mem => {
    message.channel.send(`Banned **${anntext.join(' ')}**! `)
    })
    }
    } else {
    message.reply("You don't have the permission to do that...")
    }
}}