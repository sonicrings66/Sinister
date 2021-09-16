const { Client, Message, MessageEmbed, } = require('discord.js');

module.exports = {
    name: 'help_misc',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
        message.delete()
const misc = new Discord.MessageEmbed()
.setTitle(`${client.user.username}'s Misc Commands`)
.setThumbnail("https://yt3.ggpht.com/ytc/AAUvwnhzCjL4LptToysLVQtIc3LMJfo9raiiifP9hCmVfg=s900-c-k-c0x00ffffff-no-rj")
.addFields({
name:`\`%servers\``, 
value:`How Many Servers Sinister In`,
inline: true
})
.addFields({
name:`\`%serverinfo\``, 
value:`Server's Information`,
inline: true
})
.addFields({
name:`\`%pingg\``, 
value:`Ping Lantancy`,
inline: true
})
.addFields({
name:`\`%ipsearch\``, 
value:`Search An Ip`,
inline: true
})
.addFields({
name:`\`%mute\``, 
value:`mute user`,
inline: true
})
.addFields({
name:`\`%thanks\``, 
value:`Thank A User`,
inline: true
})
.addFields({
name:`\`%avatar\``, 
value:`Get A User's Avatar`,
inline: true
})
.addFields({
name:`\`%botinfo\``, 
value:`Info On Sinister`,
inline: true
})
.addFields({
name:`\`%ping\``, 
value:`Sinister Will Say Don't Ping Or Test Me Cunt`,
inline: true
})
.addFields({
name:`\`%afk\``, 
value:`Away From Keyboard`,
inline: true
})
.addFields({
name:`\`%userinfo\``, 
value:`User's Info For The Server`,
inline: true
})
.addFields({
name:`\`%uptime\``, 
value:`See How Long Sinister's Been Online For`,
inline: true
})
.addFields({
name:`\`%timer\``, 
value:`Set A Timer`,
inline: true
})
.addFields({
name:`\`%google\``, 
value:`Google Search`,
inline: true
})
.addFields({
name:`\`%selfharm\``, 
value:`A Link on Info About Selfharm`,
inline: true
})
.addFields({
name:`\`%nitro\``, 
value:`Discord Nitro`,
inline: true
})
.addFields({
name:`\`%invite\``, 
value:`Invite Sinister`,
inline: true
})
.setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())
.setColor("RANDOM")
return message.channel.send({embeds: [misc]});
}
}