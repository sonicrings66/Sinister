const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'ipsearch',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
message.delete()
let MSG = message.content.split(" ");
let ipaddr = MSG.slice(1).join("+");
let QueryD = MSG.slice(1).join(" ");
if (!ipaddr) message.reply("Please specify a search query.")
else{
let GG = new Discord.MessageEmbed()
.setTitle(`Your Search Query: ${QueryD}`)
.setDescription(`**Search Result** - [Click Here](http://extreme-ip-lookup.com/json/${ipaddr})`)
.setColor("GREEN")
message.channel.send({embeds: [GG]})
}
}}