const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'slap',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
        message.delete(); 
let l = message.mentions.members.first() 
const victimnam = message.mentions.users.first();
if (victimnam.id === "811358023343538176") {message.channel.send("Sorry I can't let you slap him")}
else {

if(!l) message.reply(`:x: **Please Mention someone to Slap!** :x:`)
else {

let slappers = [
"https://media0.giphy.com/media/y6dyjA5vmkUgw/200.gif",
"https://i.imgur.com/9VYE13A.gif",
"https://media3.giphy.com/media/frl83VjGgVnXy/200.gif",
"https://i.imgur.com/uIIarOX.gif",
"https://pa1.narvii.com/6589/056785e52ef9199f756bc76f9023a8ebc8f9aa1a_hq.gif",
"https://media.tenor.com/images/58c0296a459beaf9c5720c383fc1afec/tenor.gif",
"http://1.bp.blogspot.com/-IyuqkR3Tjnw/T2CcWDJMjOI/AAAAAAAAK5c/JGogWBFubOE/s1600/dont-mess-with-cat.gif",
"https://25.media.tumblr.com/tumblr_md5dnszJT31rjcjxuo1_500.gif",
"https://33.media.tumblr.com/c545be54a18cbf5add1d3d87237eacb7/tumblr_na8fkqWpqk1s3lkzpo1_500.gif",
"https://media2.giphy.com/media/keVd9WsqHg93O/giphy.gif",
"https://forgifs.com/gallery/d/235060-2/Living-statue-justice-slap.gif"     
];

let embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle(':sob: Ohhh, a super slap!!')
.setDescription(`${message.author} slapped ${l}! It hurts! :sob:`)
.setImage(`${slappers[Math.floor(Math.random() * slappers.length)]}`)
.setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())
message.channel.send({embeds: [embed]})
}
}
}}