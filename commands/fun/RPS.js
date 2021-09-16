const { Client, Message, MessageEmbed, } = require('discord.js');

module.exports = {
    name: 'rps',
    aliases: ['Rps', 'RPS'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
message.delete()
let user = message.mentions.users.first() || message.author;
let embed = new Discord.MessageEmbed()
.setTitle("Rock, Paper, Scissor")
.addField(":x: | PICK AN OBJECT TO PLAY RPS WITH! EXAMPLE: ****%rps rock**** | :x:","RPS")
.setColor('RED')
.setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
.setThumbnail(user.displayAvatarURL({ dynamic: true }))
message.channel.send({embeds: [embed]})
    }
}