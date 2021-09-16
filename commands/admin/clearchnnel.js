const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'cc',
    aliases: ['clearchannel'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
if (message.member.permissions.has('MANAGE_MESSAGES')) {
    message.channel.messages.fetch().then((results) => {
    message.channel.bulkDelete(results)
    })
    }
    }}