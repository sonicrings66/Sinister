const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'removerole',
	run: async (client, message, args) => {
		message.delete();

		if (!message.member.permissions.has('MANAGE_ROLES')) return message.channel.send('You do not have MANAGE_ROLES permission').then((m) => m.delete({ timeout: 5000 }));

		if (!args[0] || !args[1]) return message.channel.send('Incorrect usage, It\'s `<username || user id> <role name || id>').then((m) => m.delete({ timeout: 5000 }));

		
			const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
			const roleName = message.guild.roles.cache.find((r) => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

			const alreadyHasRole = member._roles.includes(roleName.id);

			if (alreadyHasRole) {

			const embed = new MessageEmbed()
				.setTitle(`Role Name: ${roleName.name}`)
				.setDescription(`${message.author} has successfully removed the role ${roleName} to ${member.user}`)
				.setColor('f3f3f3')
				.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
				.setFooter(new Date().toLocaleString());
            
			return member.roles.remove(roleName).then(() => message.channel.send({embeds: [embed]}));
		}
	}
}