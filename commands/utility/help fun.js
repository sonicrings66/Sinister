const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help_fun',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
    message.delete()
const utility = new Discord.MessageEmbed()
.setTitle(`${client.user.username}'s Fun Commands`)
.setThumbnail("https://yt3.ggpht.com/ytc/AAUvwnhzCjL4LptToysLVQtIc3LMJfo9raiiifP9hCmVfg=s900-c-k-c0x00ffffff-no-rj")
.addFields({
name:`\`%8ball\``,
value:`Ask 8Ball Question's`,
inline: true
})
.addFields({
name:`\`%hack\``,
value:`Hack User`,
inline: true
})
.addFields({
name:`\`%say\``, 
value:`Make The Bot Say What U Want`,
inline: true
})
.addFields({
name:`\`%shoot\``, 
value:`Shoot A User`,
inline: true
})
.addFields({
name:`\`%slap\``, 
value:`Slap A user`,
inline: true
})
.addFields({
name:`\`%kill\``, 
value:`Kill A User`,
inline: true
})
.addFields({
name:`\`%revive\``, 
value:`Revive A User`,
inline: true
})
.addFields({
name:`\`%simprate\``,
value:`Rate's The User's Simpness`,
inline: true
})
.addFields({
name:`\`%reverse\``, 
value:`Reverse Text`,
inline: true
})
.addFields({
name:`\`%meme\``,
value:`Sends A Picture`,
inline: true
})
.addFields({
name:`\`%howgayis\``, 
value:`How Gay A User Is`,
inline: true
})
.addFields({
name:`\`%coinflip\``, 
value:`Play Heads or Tails`,
inline: true
})
.addFields({
name:`\`%ttt\``, 
value:`Play TicTacToe With A User`,
inline: true
})
.addFields({
name:`\`%rps\``, 
value:`Rock, Papaer, Scissors`,
inline: true
})
.addFields({
name:`\`%dm\``, 
value:`Make Siniser Dm A User`,
inline: true
})
.setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())
.setColor("RANDOM") 
return message.channel.send({embeds: [utility]});
}
}