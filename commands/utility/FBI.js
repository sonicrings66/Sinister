const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'FBI',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        message.delete()
        const text = args.slice(0).join(' ')
        if (!text)  
        message.channel.send("https://tenor.com/view/traffic-fbi-open-up-raid-gif-13450966")
    }
}