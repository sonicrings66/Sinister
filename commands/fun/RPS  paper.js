const { Client, Message, MessageEmbed, } = require('discord.js');

module.exports = {
    name: 'rps_paper',
    aliases: ['Rps_paper', 'RPS_paper'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
        message.delete()
let replies = ["YOU CHOSE ***PAPER***, I CHOSE ***ROCK***. ****PAPER**** WINS!", "YOU CHOSE ***PAPER***, I CHOSE ***SCISSORS***. ****SCISSORS**** WIN!", "YOU CHOSE ***PAPER***, I CHOSE ***PAPER***. IT'S A TIE!"]
let user = message.mentions.users.first() || message.author;
let embed = new Discord.MessageEmbed()
.setTitle("Rock, Paper, Scissor")
.addField(replies[Math.floor(Math.random() * replies.length)],'Paper')
.setColor('RED')
.setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
.setThumbnail(user.displayAvatarURL({ dynamic: true }))
message.channel.send({embeds: [embed]})
    }
}