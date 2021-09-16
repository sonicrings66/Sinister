const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'howgayis',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
message.delete();  
const victimnam = message.mentions.users.first();
if (victimnam.id === "811358023343538176") {message.channel.send("Sorry But he is not gay")}
else {
let victim = message.mentions.users.first()
let rand = Math.round(Math.random() * 110 + 1);
if (!victim) console.log("")

else {
let embed = new Discord.MessageEmbed()
.setTitle(`GAYRATE`)
.setDescription(`${victim} is ${rand}% GAY! :rainbow_flag:`)
.setColor("#BFFF00")
.setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())
message.channel.send({embeds: [embed]})
}
}
}}