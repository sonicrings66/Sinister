const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'pingg',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
        message.delete()
        const embed = new Discord.MessageEmbed()
    .setTitle("🏓 Pong!")
    .setDescription(`**${client.ws.ping}ms** Latency!`)
    .setColor("RANDOM")
    .setFooter(
    `Requested by ${message.author.username}`,
    message.author.displayAvatarURL()
    );
    message.channel.send({embeds: [embed] });
}
}