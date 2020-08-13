const command = require('./command')

module.exports = class help extends command {

	static match (msg) {
		return msg.content.startsWith('!help')
	}

	static action (msg) {
		msg.reply('les commandes deja crées sont :\r-	!test [recherche internet]\r-	!renaud')
	}
}