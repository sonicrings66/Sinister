const { Client, Message, MessageEmbed, } = require('discord.js');

module.exports = {
    name: 'coinflip_heads',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
    message.delete()
    let user = message.mentions.users.first() || message.author;
    let replies = ["YOU CHOSE ***HEADS***,IT WAS ***TIALS***. ****YOU**** LOSE!", "YOU CHOSE ***HEADS***,IT WAS ***HEADS***. ****YOU**** WIN!"]
    let embed = new Discord.MessageEmbed()
    .setTitle("Heads & Tails")
    .addField(replies[Math.floor(Math.random() * replies.length)],'Heads')
    .setThumbnail(user.displayAvatarURL({ dynamic: true }))
    .setColor('RED')
    .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
    message.channel.send({embeds: [embed]})
    }
}
