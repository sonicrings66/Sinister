const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        message.delete()
        const text = args.slice(0).join(' ')
        if (!text)  
        message.channel.send({ content: 'Dont Ping Or Test Me Cunt' })
    }
}