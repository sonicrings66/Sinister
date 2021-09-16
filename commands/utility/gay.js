const { Client, Message, MessageEmbed, } = require('discord.js');

module.exports = {
    name: 'gay',
    aliases: ['ur_gay', 'u_faggot'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
let e = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(`U Call People Gay But Look At How Gay U R!!`)
.addField("There is 100% Gayness In U", "Fucking Faggot")
.setImage("https://images.theconversation.com/files/230083/original/file-20180731-136664-10ogeog.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop")
.setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
message.channel.send({embeds: [e]})
}
}