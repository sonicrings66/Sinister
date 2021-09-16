const { Client, Message, MessageEmbed, } = require('discord.js');

module.exports = {
    name: 'serverinfo',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
message.delete();  
let embed = new Discord.MessageEmbed()
.setColor("WHITE")
.setAuthor(`Info for ${message.guild}`, message.guild.iconURL({ dynamic: true }))
.addField(`🤵 **Owner**`, `≫ \`${message.guild.ownerId}\``, true)
.addField(`💬 **Text channels**`, `≫ \`${message.guild.channels.cache.size}\``, true)
.addField(`📜 **Roles**`, `≫ \`${message.guild.roles.cache.size}\``, true)
.addField(`😎 **Emotes**`, `≫ \`${message.guild.emojis.cache.size}\``, true)
.addField(`✅ **Verification Level**`, `≫ \`${message.guild.verificationLevel}\``, true)
.addField(`🌍 **Region**`, `≫ \`${message.guild.region}\``, true)
.addField(`👤 **Total**`, `≫ \`${message.guild.memberCount}\``, true)
.setThumbnail(message.guild.iconURL({ dynamic: true }))
.setFooter(`SERVER ID: ${message.guild.id}, Created • ${message.guild.createdAt.toDateString()}`)

message.channel.send({embeds: [embed]})
}
}
