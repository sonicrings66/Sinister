const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'restart',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
message.delete()
if (message.author.id == '811358023343538176', '469916082195660814'){ 

message.channel.send("Bot Has Been Restarted");
setTimeout(() => {

process.exit();
}, 55);
}
else {
message.channel.send("Only The Owner Can Use This Command")
}
}}