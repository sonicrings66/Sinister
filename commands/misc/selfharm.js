const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'selfharm',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
let embed = new Discord.MessageEmbed()
.setTitle("We're here to support you")
.setImage("https://cdn.discordapp.com/attachments/801054240026001448/839828996010147850/9k.png")
.setDescription(
"Do not self harm. Whatever makes you sad, we're here to support you :) Get help: https://en.wikipedia.org/wiki/List_of_suicide_crisis_lines"
)
.setColor("#FF0000")
.setFooter("Do not harm yourself. Command made by: NINJAHSTERco#5048");
message.channel.send({embeds: [embed]});
}}