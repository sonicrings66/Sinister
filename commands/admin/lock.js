const { Client, Message, MessageEmbed, } = require('discord.js');

module.exports = {
    name: 'lock',
    UserPerms: ["MANAGE_CHANNELS"],
    BotPerms: ["MANAGE_CHANNELS"],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
        
            let embedl = new Discord.MessageEmbed()
            .setDescription("Channel Locked.")
            .setFooter("Use $unlock to unlock the channel again.")
            .setColor("GREEN")
            if(userperms = "MANAGE_CHANNELS"){
            message.channel.send({embeds: [embedl]})
            message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
            SEND_MESSAGES: false
            })
            } else {
            let embed2 = new Discord.MessageEmbed()
            .setTitle("Error")
            .setColor("RED")
            .setDescription("You don't have permission to use this command.")
            message.channel.send({embeds: [embed2]})
            }
        }
    }