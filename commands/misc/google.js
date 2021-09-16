const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'google',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
message.delete()
let MSG = message.content.split(" ");
let Query = MSG.slice(1).join("+");
let QueryD = MSG.slice(1).join(" ");
if (!Query) message.reply("Please specify a search query.")
else{
let GG = new Discord.MessageEmbed()
.setTitle(`Your Search Query: ${QueryD}`)
.setDescription(`**Search Result** - [Click Here](https://www.google.com/search?q=${Query})`)
.setColor("GREEN")
.setFooter("LAZY BOIII")
message.channel.send({embeds: [GG]})
}
}}