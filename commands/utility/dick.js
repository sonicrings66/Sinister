const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'dick',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
message.delete()
let member = message.mentions.members.first()
let victim = message.mentions.users.first()
let dicks = ["Theres Nothing There", "8=D","8===D","8==================D"]
let dick = dicks[Math.floor(Math.random() * dicks.length)]

const victimnam = message.mentions.users.first();
if(!member) message.channel.send("mention someone!")
else { 
if (victimnam.id === "811358023343538176") {message.channel.send("Sorry But his dick is to big to calculise")}
else {               

message.channel.send
("Calculating Dick Size.").then(m => {
m.edit("[10%] Calculating Dick Size.").then(m => {
setTimeout(() => {
m.edit("[25%] Calculating Dick Size..").then(m => {
setTimeout(() => {
m.edit("[50%] Calculating Dick Size...").then(m => {
setTimeout(() => {
m.edit("[75%] Calculating Dick Size..").then(m => {
setTimeout(() => {
m.edit("[100%] Dick Size Found.").then(m => {
setTimeout(() => {
m.edit("Here's The Anwser.").then(m => {
let embed = new Discord.MessageEmbed()
.setTitle("Dick Size")
.setDescription(`${victim}`)
.setFooter('Command Made by Boucy#6969')
.setThumbnail(victim.displayAvatarURL({ dynamic: true }))
.addFields({name:"Size",
value: `${dick}`

})
.setColor("RED")


message.channel.send({embeds: [embed]})
}) 

}, 5500);
})
}, 2800);
})
}, 4500);
})
}, 5000);
}) 
}, 5000);
});
}, 5000)
}
}
}}