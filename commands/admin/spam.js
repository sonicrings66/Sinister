const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'spam',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
message.delete()
if (message.member.permissions.has("ADMINISTRATOR")) {
let sentence = message.content.split(" ");
sentence.shift();
sentence = sentence.join(" ");
for(let i =0;i<= 2000;i++)
message.channel.send(`${sentence}`)
} else {
message.reply("Only Owner And Admin Can Use This")
} 
}}