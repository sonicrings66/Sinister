const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'userinfo',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
message.delete();  
let user = message.mentions.users.first() || message.author;
let member = message.mentions.members.first() || message.member;
const victimnam = message.mentions.users.first();
if (victimnam.id === "811358023343538176") {message.channel.send("Sorry I can't get his info")}
if (victimnam.id === "469916082195660814") {message.channel .send("Nice Try Bitch")}
else {
let e = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(`${user.tag}`, `${user}`, true)
.addField("ID:", `${user.id}`, true)
.addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
.addField("Status:", `${user.presence.status}`, true)
.addField("In Server", message.guild.name, true)
.addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
.addField("Bot:", `${user.bot}`, true)
.addField("Roles:", member.roles.cache.map(roles => `${roles}`).join(', '), true)
.setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
.setThumbnail(user.displayAvatarURL({ dynamic: true }))
message.channel.send({embeds: [e]});
}
}
}
