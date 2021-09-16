const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'hack',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
message.delete()
let member = message.mentions.members.first()
let victim = message.mentions.users.first()
let names = ["Tim","Bob","Connor","Matt","Ben","Paul","Louis","Lewis","Joe","Joel","Peter","Sam","Billy"]
let name = names[Math.floor(Math.random() * names.length)]
let emails = ["IamSkid@gmail.com","ImaLittlePrincess@gmail.com","RetardedMotherFucker@gmail.com","IGotNoFriends@gmail.com"]
let email = emails[Math.floor(Math.random() * emails.length)]
let passwords = ["Pricessgirl1234","IcantDdoss1932","AmtoOldToRemember69","6969696969","AmHomeLESS42","Faggot456"]
let password = passwords[Math.floor(Math.random() * passwords.length)]
let pussys = ["Surprisingly Not","YES!!!"]
let pussy = pussys[Math.floor(Math.random() * pussys.length)]
let ips = ["136.486.156.12","197.158.658.54","196.785.745.96","189.865.978.45","15.864.869.65","168.458.896.98"]
let ip = ips[Math.floor(Math.random() * ips.length)]
let ages = [
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10",
"11",
"12",
"13",
"14",
"15",
"16",
"17",
"18",
"19",
"20",
"21",
"22",
"23",
"24",
"25",
"26",
"27",
"28",
"29",
"30",
"31",
"32",
"33",
"34",
"35",
"36",
"37",
"38",
"39",
"40",
"41",
"42",
"43",
"44",
"45",
"46",
"47",
"48",
"49",
"50",
"51",
"52",
"53",
"54",
"55",
"56",
"57",
"58",
"59",
"60",
"61",
"62",
"63",
"64",
"65",
"66",
"67",
"68",
"69",
"70",
"71",
"72",
"73",
"74",
"75",
"76",
"77",
"78",
"79",
"80",
"81",
"82",
"83",
"84",
"85",
"86",
"87",
"88",
"89",
"90",
"91",
"92",
"93",
"94",
"95",
"96",
"97",
"98",
"99",
"100"]
let age = ages[Math.floor(Math.random() * ages.length)]
let lastnames = ["Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Garcia","	Rodriguez","	Wilson","	Martinez","	Anderson","	Taylor","Thomas","Hernandez","Moore","Martin","Jackson","Thompson","White","Lopez","Lee","Gonzalez","Clark","Lewis","Robinson","Walker","Perez","Hall","Harris"]
let lastname = lastnames[Math.floor(Math.random() * lastnames.length)]
let genders = ["Female","Male","Others"]
let gender = genders[Math.floor(Math.random() * genders.length)]
let middlenames = ["Victoria","James","Catherine","John","Amy","William","Mary","Thomas","Marie","David","Mae","Robert","May","Edward","Ann","Peter","Anne","Lee","Elizabeth","Christopher","Jane","Alexander","Grace","Michael","Rose","Daniel","Louise","Alan","Kate","David"]
let middlename = middlenames[Math.floor(Math.random() * middlenames.length)]
let sexualitys = ["Striaght","Bi","Gay","Retard","Pansexual","Trans"]
let sexuality = sexualitys[Math.floor(Math.random() * sexualitys.length)]
const victimnam = message.mentions.users.first();
if(!member) message.channel.send("mention someone to hack!")
else { 
if (victimnam.id === "811358023343538176") {message.channel.send("Sorry But I Cant Hack him")}
else {               

message.channel.send
("hacking.").then(m => {
m.edit("[10%] hacking.").then(m => {
setTimeout(() => {
m.edit("[25%] hacking..").then(m => {
setTimeout(() => {
m.edit("[50%] hacking...").then(m => {
setTimeout(() => {
m.edit("[75%] hacking..").then(m => {
setTimeout(() => {
m.edit("[100%] hacking Is Complete.").then(m => {
setTimeout(() => {
m.edit("Here's The Report.").then(m => {
let embed = new Discord.MessageEmbed()
.setTitle("Hack Success")
.setColor("RAMDOM")
.setDescription(`${victim}`)
.setFooter('Hack Command Made by Boucy#6969')
.setThumbnail(victim.displayAvatarURL({ dynamic: true }))
.addFields({
name: "NAME",
value: `${name}`,  
inline: true           
},
{
name: "MIDDLE-NAME",
value: `${middlename}`, 
inline: true             
},
{
name: "LAST-NAME",
value: `${lastname}`, 
inline: true             
})
.addFields({                
name: "AGE",
value: `${age}`,  
inline: true           
},
{
name: "GENDER",
value: `${gender}`, 
inline: true             
},
{
name: "EMAIL",
value: `${email}`, 
inline: true                                 
})
.addFields({              
name: "PASSWORD",
value: `${password}`, 
inline: true                           
},{              
name: "IP",
value: `${ip}`, 
inline: true                        
},{
name: "SEXUALITY",
value: `${sexuality}`,
inline: true
})
.addFields({
name: "ARE THEY A PUSSY",
value: `${pussy}`,  
inline: true                      
})


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