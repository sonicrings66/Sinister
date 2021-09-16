const { Client, Message, MessageEmbed, Discord } = require('discord.js');
const db = require('quick.db')
module.exports = {
    name: 'level',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
let level = db.get(`level_${message.author.id}, ${message.guild.id}`)
if(level === null) level = 1
let levelemb = new Discord.MessageEmbed()
.setTitle(`${message.author.tag}'s Level:`)
.setDescription(`${message.author.username} is on level \`${level}\` `)
.setFooter('keep earning xp to level up!')
.setColor("YELLOW")
message.channel.send({embeds: [levelemb]})

}
}