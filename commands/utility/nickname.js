const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'nickname',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
message.delete();  
let nicknames = ["dumbass", "retard", "prick", "lord cunt"];
message.channel.send(
`${
nicknames[Math.floor(Math.random() * nicknames.length)]
} is you new name`
);
}
}