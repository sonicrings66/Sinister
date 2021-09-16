const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'thanks',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
let victim = message.mentions.users.first()
if(!victim) message.reply("Mention someone to thank.")
else{
let embed = new Discord.MessageEmbed()
.setTitle("THANKED")
.setDescription(`${victim} Was Thanked By ${message.author}`)
.setColor("RANDOM")
.setTimestamp()
message.channel.send({embeds: [embed]})     
}
}}