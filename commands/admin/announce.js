const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: `announce`,
    description: `Announce to the channel`,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
message.delete()
if (message.member.permissions.has('ADMINISTRATOR')) {
const anntext = message.content
.slice(''.length)
.trim()
.split(/ +/);
anntext
.shift()
.toLowerCase()
.split(' ')[0];
let embed = new Discord.MessageEmbed()
.setTitle(`Announcement From ${message.author.tag}:`)
.setDescription(`**${anntext.join(' ')}**`)
.setColor('RED');
message.channel.send({embeds: [embed]})
} else {
message.channel.send('only admins can announce stuff');
}

}}