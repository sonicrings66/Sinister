const { Client, Message, MessageEmbed, } = require('discord.js');

module.exports = {
    name: "rps_scissors",
    aliases: ['Rps_scissors', 'RPS_scissors'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
message.delete()
let replies = ["YOU CHOSE ***SCISSORS***, I CHOSE ***ROCK***. ****ROCK WINS!****", "YOU CHOSE ***SCISSORS***, I CHOSE ***PAPER***. ****SCISSORS WIN!***", "YOU CHOSE ***SCISSORS***, I CHOSE ***SCISSORS***. ****SCISSORS**** ITS A TIE!"]
let user = message.mentions.users.first() || message.author;
let embed = new Discord.MessageEmbed()
.setTitle("Rock, Paper, Scissor")
.addField(replies[Math.floor(Math.random() * replies.length)],'Scissors')
.setColor('RED')
.setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
.setThumbnail(user.displayAvatarURL({ dynamic: true }))
message.channel.send({embeds: [embed]})
    }
}