const client = require('../index')
const clc = require('cli-color')
const privateMessage = require('../private-message');
const { prefix } = require('../index');

const activities_list = [
	"%help",
	"www.pornhub.com",
	"Fuck Da Police",
	"Grand theft Auto 6",
	"COD",
	"Devoloped By Boucymatt",
	"Watching U And Ur Mum",
	"Hide Ur Wife I Got A Knife"
	];
	client.on('ready', async (message) => {
		const user  = client.users.cache.get("469916082195660814");
		const user1  = client.users.cache.get("811358023343538176");
		console.clear(); // CLEARS THE CONSOLE!
		console.log(clc.red('                                                  -----------------'))
		console.log(clc.redBright('                                              ╔═╗╔╦╗╔╗╔╔╦╗╔═╗╔╦╗╔═╗╔═╗')) // PRINTS THE MAGENTA COLORED TEXT IN CONSOLE!
		console.log(clc.red('                                              ╚═╗ ║ ║║║ ║ ╚═╗ ║ ║╣ ║ '))// PRINTS THE YELLOW COLORED TEXT IN CONSOLE!
		console.log(clc.redBright('                                              ╚═╝╚╩╝╝╚╝╚╩╝╚═╝ ╩ ╚═╝╩')) // PRINTS THE MAGENTA COLORED TEXT IN CONSOLE!
		console.log(clc.red('                                                  -----------------'))
		console.log('')
		console.log(clc.cyanBright('Thank you so much for using Sinister!')) // PRINTS THE CYAN COLORED TEXT IN THE CONSOLE!
		console.log('-------------------------------') 
		console.log(clc.cyanBright('Version 2!')) // PRINTS THE CYAN COLORED TEXT IN THE CONSOLE!╣ ╩ ╚ ═ ╝ ╦ ╗ ╔ ║
		console.log('-------------------------------') 
		console.log(clc.cyanBright(`use ${prefix}` + ' to use your Commands!')) // PRINTS THE CYAN COLORED TEXT IN THE CONSOLE!
		console.log('-------------------------------') 
		console.log(clc.cyanBright(`your guardian angel is ${user.username} and ${user1.username}`)) // PRINTS THE CYAN COLORED TEXT IN THE CONSOLE!
		console.log('-------------------------------')
	
		setInterval(() => 
		{
		const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
		client.user.setActivity(activities_list[index], { type: 'WATCHING' }); 
		}, 10000);

		
	
	privateMessage(client, 'ping', 'Pong!')
	
	client.users.fetch('469916082195660814').then((user)=> {
	user.send('Am Alive')
	})
	}); return