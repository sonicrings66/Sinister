const { Client, Message, MessageEmbed, } = require('discord.js');

module.exports = {
    name: 'unlock',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
let embedNo = new Discord.MessageEmbed()
.setDescription("Channel Unlocked.")
.setColor("GREEN")
if(message.member.permissions.has("MANAGE_CHANNELS")) {
message.channel.send({embeds: [embedNo]})
message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
SEND_MESSAGES: true
});
} else {
let embed = new Discord.MessageEmbed()
.setTitle("Error")
.setColor("RED")
.setDescription("You don't have permission to use this command.")
message.channel.send({embed: [embed]})
}
}
}