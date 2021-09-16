const { Client, Message, MessageEmbed, } = require('discord.js');
module.exports = {
    name: 'say',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
            message.delete()
            const whattosay = message.content.slice("".length).trim().split(/ +/);
            whattosay.shift().toLowerCase().split(" ")[0]
            message.channel.send(whattosay.join(" "))
            }
}
