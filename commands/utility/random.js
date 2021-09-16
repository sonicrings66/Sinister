const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'random',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
        message.delete()
{
message.channel.send("0")
.then(X => 
{
setInterval(() => 
{
const IPL = 10
var Chars = '123456789';
var IP = '';
for ( var i = 0; i < IPL; i++ ) 
{
IP += Chars.charAt(Math.floor(Math.random() * Chars.length));
}
console.log(IP)
X.edit(IP)
}, 1000);

})
}
}}