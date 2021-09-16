const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'kick',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
message.delete()
if (message.member.permissions.has("KICK_MEMBERS")){
const anntext = message.content
.slice(''.length)
.trim()
.split(/ +/);
anntext
.shift()
.toLowerCase()
.split(' ')[0];
let member = message.mentions.members.first()
if(!member) message.channel.send("mention someone to Kick!")
else { 
    member.kick().then(mem => {
    message.channel.send(`Kicked **${anntext.join(' ')}**! `)
    })
    }
    } else {
    message.reply("You don't have the permission to do that...")
    }
}}