const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'timer',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, Discord) => {
        message.delete()
        const args = message.content.split(' ').splice(1);
        if(!args[0]) return message.channel.send('please include a valid time');
        if(isNaN(args[0])) return message.channel.send('please include a valid number');
        if(!args[1]) return message.channel.send('you have to include something for me to remind you with')
        setTimeout(() => {
        const msg = args.splice(1).join(' ');
        message.channel.send(`${message.author}, ${msg}`)
        }, parseInt(args[0], 10) * 1000)
        }
    }