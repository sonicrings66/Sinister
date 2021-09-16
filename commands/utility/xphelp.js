const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'xphelp',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
let paps = new Discord.MessageEmbed()
.setTitle(`Help Screen For Papyrus:`)
.addField("Level Commands:", "`xp` `level`")
.setFooter("By Sans#0622")
message.channel.send({embeds: [paps]})
    }
}