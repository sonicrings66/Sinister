
const { Client, Message, MessageEmbed, Discord } = require('discord.js');
const db = require('quick.db')
module.exports = {
    name: 'xp',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => 
    {
        message.delete()
	let xp = db.get(`xp_${message.author.id}, ${message.guild.id}`)
	let xpmess = new Discord.MessageEmbed()
	.setTitle(`${message.author.tag}'s xp:`)
	.setDescription(`${message.author.username} has \`${xp}\` xp!`)
	.setFooter("you get more xp per message!")
	.setColor("ORANGE")
	message.channel.send({embeds: [xpmess]})}}