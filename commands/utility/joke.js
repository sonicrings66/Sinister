const { Client, Message, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    name: 'joke',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args, Discord) => {
    message.delete()
    let jokes = ["What Do You Call A Boomarang that doesn't Come Back? \n\n A Stick", "As I get older, I remember all the people I lost along the way. Maybe a career as a tour guide was not the right choice.", "My wife left a note on the fridge that said, This isn't working. I'm not sure what she's talking about. I opened the fridge door and it's working fine","What's your name, son? The principal asked his student. The kid replied, D-d-d-dav-dav-david, sir. Do you have a stutter? the principal asked. The student answered,  No sir, my dad has a stutter but the guy who registered my name was a real jerk.", "Give a man a plane ticket and he flies for the day. Push him out of the plane at 3,000 feet and he'll fly for the rest of his life.","What is your body count\n for what\n for people you have slept with\n ahh okay I thought you saw my basement\n What\n What"]
    let joke = jokes[Math.floor(Math.random() * jokes.length)]
    let embed = new Discord.MessageEmbed()
    .setTitle("Joke")
    .setDescription(joke)
    message.channel.send({embeds: [embed]})

}
    }