const { Client, Message, MessageEmbed, } = require('discord.js');

module.exports = {
    name: 'rps_rock',
    aliases: ['Rps_rock', 'RPS_rock'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
    message.delete()
    let replies = ["YOU CHOSE ***ROCK***, I CHOSE ***PAPER***. ****PAPER**** WINS!", "YOU CHOSE ***ROCK***, I CHOSE ***SCISSORS***. ****ROCK**** WINS!", "YOU CHOSE ***ROCK***, I CHOSE ***ROCK***. IT'S A TIE!"]
    let user = message.mentions.users.first() || message.author;
    let embed = new Discord.MessageEmbed()
    .setTitle("Rock, Paper, Scissor")
    .addField(replies[Math.floor(Math.random() * replies.length)],'Rock')
    .setColor('RED')
    .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
    .setThumbnail(user.displayAvatarURL({ dynamic: true }))
    message.channel.send({embeds: [embed]})
    }
}