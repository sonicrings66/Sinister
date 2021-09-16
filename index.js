
// Require the necessary discord.js classes
const { Client, Intents, Collection, MessageEmbed, message} = require('discord.js');
const Discord = require('discord.js')
const { token } = require('./config.json');
const privateMessage = require('./private-message');
const bufferUtil = require('bufferutil');
const crypto = require('crypto');

const buffer = crypto.randomBytes(10);
const mask = crypto.randomBytes(4);

bufferUtil.unmask(buffer, mask)
const db = require('quick.db')
const client = new Client({ intents: [
	"GUILDS",
	"GUILD_MEMBERS", 
	"GUILD_BANS",
	"GUILD_INTEGRATIONS",
	"GUILD_WEBHOOKS",
	"GUILD_INVITES",
	"GUILD_VOICE_STATES",
	"GUILD_PRESENCES",
	"GUILD_MESSAGES",
	"GUILD_MESSAGE_REACTIONS",
	"GUILD_MESSAGE_TYPING",
	"DIRECT_MESSAGES",
	"DIRECT_MESSAGE_REACTIONS",
	"DIRECT_MESSAGE_TYPING"]
});
module.exports = client;


// Mongo Connection
const { mongooseConnectionString } = require("./config.json");
const mongoose = require("mongoose");
mongoose.connect(mongooseConnectionString, {
    useUnifiedTopology: true,
}).then(console.log('Connected to mongodb!'))

module.exports = client;

client.commands = new Collection()
client.config = require('./config.json')
client.prefix = client.config.prefix
client.aliases = new Collection()
client.slash_commands = new Collection();

require('./handler/slash_commands');
require('./handler')(client);

// Login to Discord with your client's token
client.login(token);