const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'simprate',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args,  Discord) => {
message.delete()
let victim = message.mentions.members.first() 
let member = message.mentions.members.first()
const victimnam = message.mentions.users.first();
let simprate = [ "0", "2", "5", "7", "10", "13", "15", "19", "20", "21", "25", "28", "30", "33", "35", "38", "40", "42", "45", "47", "50", "52", "55", "56", "60", "64", "65", "66", "70", "72", "75", "79", "80", "83", "85", "87", "90", "94", "95", "99", "100" ]
if(!member) message.channel.send("mention someone to rate!")
else { 
if (victimnam.id === "811358023343538176") {message.channel.send("Please Try Again")}
else {
let embed = new Discord.MessageEmbed()
.setTitle("simpers simprate")
.setDescription(`${victim}s simprate is ${simprate[Math.floor(Math.random() * simprate.length)]}%`)
.setFooter("simping is bad")
.setColor("RANDOM")
message.channel.send({embeds: [embed]})
}
}
}
}