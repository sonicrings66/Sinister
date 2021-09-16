const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'nuke',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.reply("you don't have the permission for that.");
if (!message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.channel.send("I don't have the permission for that.");

message.channel.clone({position: message.channel.rawPosition }).then(ch => { ch.send('Channel nuked'); })
message.channel.delete();
}}