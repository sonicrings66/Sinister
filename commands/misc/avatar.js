const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'avatar',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
message.delete()
let member = message.mentions.members.first()
let victim = message.mentions.users.first()
if(!member) message.channel.send("mention someone to get there avatar!")
else { 
let embed = new Discord.MessageEmbed()
.setTitle("DA AVATAR")
.setImage(`${victim.displayAvatarURL({dynamic : true})}`)
.setColor("RANDOM")
.setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())
message.channel.send({embeds: [embed]})
}
}}