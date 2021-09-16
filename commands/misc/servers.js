const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'servers',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
message.delete();  
client.guilds.cache.forEach((guild) => {
message.channel.send(
`${guild.name} has a total of ${guild.memberCount} members`
)
})
}} 