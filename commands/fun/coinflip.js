const { Client, Message, MessageEmbed, } = require('discord.js');

module.exports = {
    name: 'coinflip',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
message.delete()
let user = message.mentions.users.first() || message.author;
let embed = new Discord.MessageEmbed()
.setTitle("Heads & Tails")
.addField(":x: | PICK AN OBJECT TO PLAY COINFLIP WITH! EXAMPLE: ****%coinflip heads**** | :x:",'50/50')
.setThumbnail(user.displayAvatarURL({ dynamic: true }))
.setColor('RED')
.setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
message.channel.send({embeds: [embed]})
}}


