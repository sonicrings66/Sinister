const { Client, Message, MessageEmbed, } = require('discord.js');

module.exports = {
    name: 'botinfo',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
let embed = new Discord.MessageEmbed()
.setTitle("Bot Info")
.setColor("RANDOM")
.setDescription("Info:")
.addField(`Bot made by Boucy#6969`, 'rick rolls 1 month free')
.addField(`Bot owner id: 811358023343538176`, 'when the impostor is sus')
.addField(`Latency is:`, `${Date.now() - message.createdTimestamp}ms`)
.addField(`API Latency is:`, `${Math.round(client.ws.ping)}ms`)
.addField(`Help command: %help`, 'yay')
.addField(`Coded using Visaul Studio Code`, `JavaScript`)
.setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())
.setTimestamp()
message.channel.send({embeds: [embed]})
}
}