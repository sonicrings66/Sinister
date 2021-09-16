const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'uptime',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
message.delete()
let days = Math.floor(client.uptime / 86400000);
let hours = Math.floor(client.uptime / 3600000) % 24;
let minutes = Math.floor(client.uptime / 60000) % 60;
let seconds = Math.floor(client.uptime / 1000) % 60;
let embed = new Discord.MessageEmbed()
.setTitle("Uptime Of Sinister")
.setDescription(`***Sinister's Uptime:*** ${days}d ${hours}h ${minutes}m ${seconds}s`)
.setColor("RANDOM")
.setFooter(`Requested by ${message.author.tag}`)
.setTimestamp()
message.channel.send({embeds: [embed]})
}
}
