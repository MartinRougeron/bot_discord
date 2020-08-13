
const Discord = require('discord.js')
const bot = new Discord.Client()
const test = require('./command/test')
const help = require('./command/help')

bot.on('guildMemberAdd', function (member) {
	member.creatDM().then(function (channel) {
		channel.send('Yo ' + member.displayName + ', si ca a marcher c incroyable car j ai pas test.\r c le discord ou je vais faire de la merde avec des bot pour le fun voila tout :wink:\r fait !help pour voir les commandes')
	})
})

bot.on('message', function (message) {
	var pref = '!'
	test.parse(message)
	help.parse(message)
	if (message.content === '!renaud') {
		message.channel.send('ce gros pd')
	}
	if (message.content === pref + try) {
		message.channel.send({embed: {
			title: "total de msg envoyé",
			description : "message total : " + userData
		}})
	}
})

bot.login('NzQzMjUwNzI4OTMxNDI2MzM2.XzR8Lg.ZOh5Ox-atjzbGyNUVyUpjwU9aX4')
