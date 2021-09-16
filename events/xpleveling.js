const client = require('../index')
const db = require('quick.db')
client.on("messageCreate", message => {   
	let level2 = `Congrats, **${message.author.tag}**, you leveled up to level **2**\n\ncode by Sans#0622!`
    let level3 = `Congrats, **${message.author.tag}**, you leveled up to level **3**\n\ncode by Sans#0622!`
	let level4 = `Congrats, **${message.author.tag}**, you leveled up to level **4**\n\ncode by Sans#0622!`
	let level5 = `Congrats, **${message.author.tag}**, you leveled up to level **5**\n\ncode by Sans#0622!`
	//you can add more by copying and pasting
	if(!message.author.bot) {
	let content = message.content
	if(!content) {
	return;
	} else {
	db.add(`xp_${message.author.id}, ${message.guild.id}`, 5)
	}

let xp = db.get(`xp_${message.author.id}, ${message.guild.id}`)
	if(xp === 50) {
	let content = message.content
	if(content) {
	db.set(`level_${message.author.id}, ${message.guild.id}`, 2)
	message.channel.send(level2)
	}
}
	if(xp === 100) {
	let content = message.content
	if(content) {
	db.set(`level_${message.author.id}, ${message.guild.id}`, 3)
	message.channel.send(level3)
	}
}
if(xp === 200) {
	let content = message.content
	if(content) {
	db.set(`level_${message.author.id}, ${message.guild.id}`, 4)
	message.channel.send(level4)
	}
}
if(xp === 350) {
	let content = message.content
	if(content) {
	db.set(`level_${message.author.id}, ${message.guild.id}`, 5)
	message.channel.send(level5)
	}
}
}})