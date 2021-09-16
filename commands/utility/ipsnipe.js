const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'joke',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
message.delete()
let MSG = message.content.split(" ");
let ipaddr = MSG.slice(1).join("+");
let QueryD = MSG.slice(1).join(" ");
if (!ipaddr) message.reply("Please specify a search query.")
else{
let GG = new Discord.MessageEmbed()
.setTitle(`Your Search Query: ${QueryD}`)
.setDescription(`https://www.infosniper.net/index.php?ip_address=${ipaddr}&k=&lang=1&cookie=1`)
.setColor("GREEN")
message.channel.send({embeds: [GG]})
}
}
}