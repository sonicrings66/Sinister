const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'add',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
let l = message.mentions.members.first() 
if(!l) message.reply(`:x: **Please Mention someone!** :x:`)
else {
let member = message.mentions.members.first()
db.add(`money_ ${member.id}`, 1) 
message.channel.send("added 1 to account") 
}      
}
}