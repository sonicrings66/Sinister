const {Client, Message, MessageEmbed} = require('discord.js')
const db = require('quick.db')
module.exports = {
	name: 'afk',
	 /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
	run: async (client, message, args, ) => {
		client.on("messageCreate", message => {
			if(db.has(message.author.id + '%afk')){
			message.channel.send(`Welcome Back Bruv ${message.author}`)
			db.delete(message.author.id + '%afk')
			db.delete(message.author.id + '%messageafk')
			}
			if (message.content.startsWith('%afk')) {
			message.channel.send('Sick Bruv Ur Afk Is On In A Bit My G')
			// then here you use the database :
			db.set(message.author.id + '%afk','true')
			db.set(message.author.id + '%messageafk', message.content.split(' ').slice(2))
			}
			if (message.content.includes('%afk off')) {
			db.delete(message.author.id + '%afk')
			db.delete(message.author.id + '%messageafk')
			}
			// If one of the mentions is the user
			message.mentions.users.forEach(user =>{
			if (message.author.bot) return false;
			
			if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
			if(db.has(user.id + '%afk')) message.channel.send(`${message.author} My Man Is Currently Afk If U Urgent Dm Him Bruv`)
			})})}}