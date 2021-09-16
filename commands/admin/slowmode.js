const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'slowmode',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
message.delete();  
if (message.member.permissions.has("MANAGE_CHANNELS")) {
let sentence = message.content.split(" ");
sentence.shift();
sentence = sentence.join(" "); 
if(sentence != null){
message.channel.setRateLimitPerUser(sentence);
}

message.reply(`This chat now has a slowmode of ${sentence} seconds!`)
} else {
message.reply("You don't have perms to do that...")
} 
}}