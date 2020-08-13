const command = require('./command')

module.exports = class test extends command {

	static match (msg) {
		return msg.content.startsWith('!test')
	}

	static action (msg) {
		let args = msg.content.split(' ')
		args.shift()
		msg.reply('https://www.google.fr/#q=' + args.join('%20'))
	}
}
