const { Client, Message, MessageEmbed, } = require('discord.js');

module.exports = {
    name: 'hi',
    aliases: ['Hi', 'hello', 'Hello'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
let e = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(`Use %help`)

.setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
message.channel.send({embeds: [e]});   
}
}