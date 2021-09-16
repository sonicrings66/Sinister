const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'kill',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
message.delete(); 
let l = message.mentions.members.first() 
const victimnam = message.mentions.users.first();
if (victimnam.id === "811358023343538176") {message.channel.send("Sorry I can't let you kill him")}
else {

if(!l) message.reply(`:x: **Please Mention someone to Kill!** :x:`)
else {

let killers = [
"https://media.tenor.com/images/ff6ccd98001f87adee0857d32bc1ceb2/tenor.gif",
"http://i.imgur.com/EnnxMo8.gif",
"https://i.kym-cdn.com/photos/images/newsfeed/001/890/995/e1c.gif",
"http://24.media.tumblr.com/366a28a1476fd01e5dcedcdfba1a9622/tumblr_n2r1u4m0Eq1sfe50ko1_500.gif",
"https://uproxx.com/wp-content/uploads/2012/12/tumblr_me7ivizl4f1r7nsm2o1_500.gif",
"https://gifimage.net/wp-content/uploads/2018/04/killing-gif-5.gif",
"https://media4.giphy.com/media/3oz8xxZ2cE2gB8K1TW/200w.gif?cid=82a1493bc48et6ehqmf170ysajbdv5v3b577lmvzovh7a96c&rid=200w.gif&ct=g",
"https://thumbs.gfycat.com/SingleFeistyHare-size_restricted.gif",
"https://thumbs.gfycat.com/ShadySnappyHorsemouse-max-1mb.gif",
"http://31.media.tumblr.com/5a0dd7a12799f20712047a2f81326421/tumblr_mm8pmtrXbd1s02vreo1_400.gif",                    
];

let embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle(':sob: Super Kill!!')
.setDescription(`${message.author} Killed ${l}! It hurts! :sob:`)
.setImage(`${killers[Math.floor(Math.random() * killers.length)]}`)
.setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())

message.channel.send({embeds: [embed]})
}
}
    }
}