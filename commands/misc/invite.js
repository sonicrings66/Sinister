const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'invite',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
message.delete()
let embed = new Discord.MessageEmbed()
.setTitle("Sinister Info")
.setColor("GREEN")
.setThumbnail('https://yt3.ggpht.com/ytc/AAUvwnhzCjL4LptToysLVQtIc3LMJfo9raiiifP9hCmVfg=s900-c-k-c0x00ffffff-no-rj')
.setDescription("[Invite Sinister](https://discord.com/api/oauth2/authorize?client_id=885483288653860925&permissions=8&scope=bot%20applications.commands)")
.setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())                   
message.channel.send({embeds: [embed]})        
}}