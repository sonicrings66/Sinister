const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help_admin',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
    message.delete()
const staff = new Discord.MessageEmbed()
.setTitle(`${client.user.username}'s Admin Commands`)
.setThumbnail("https://yt3.ggpht.com/ytc/AAUvwnhzCjL4LptToysLVQtIc3LMJfo9raiiifP9hCmVfg=s900-c-k-c0x00ffffff-no-rj")
.addFields({
name:`\`%unmute\``, 
value:`unmute user`,
inline: true
})
.addFields({
name:`\`%mute\``, 
value:`mute user`,
inline: true
})
.addFields({
name:`\`%warn\``,
value:`warn user`,
inline: true 
})
.addFields({
name:`\`%kick\``, 
value:`kick user`,
inline: true  
})
.addFields({
name:`\`%ban\``,
value:`ban user`,
inline: true
})
.addFields({
name:`\`%cc\``,
value:`Clear Channel`,
inline: true
})
.addFields({
name:`\`%giverole\``,
value:`Give User Role`,
inline: true
})
.addFields({
    name: `\`%removerole\``,
    value: `Remove User Role`,
    inline: true
})
.addFields({
name:`\`%nuke\``,
value:`Nuke's Channel`,
inline: true
})
.addFields({
name:`\`%slowmode\``, 
value:`Slow Channel`,
inline: true
})
.addFields({
name:`\`%announce\``, 
value:`Announce Whatever (Only Works On My Channel)`,
inline: true
})
.addFields({
name:`\`%unlock\``,
value:`unlock Channel`,
inline: true
})
.addFields({
name:`\`%lock\``,
value:`Lock Channel`,
inline: true
})
.addFields({
name:`\`%spam\``, 
value:`Spam Text's`,
inline: true
})
.addFields({
name:`\`%purge\``, 
value:`Type A NUmber In To Delete \na Certain Amount Of Texts`,
inline: true
})
.setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())
.setColor("RANDOM")
return message.channel.send({embeds: [staff] });
}
}