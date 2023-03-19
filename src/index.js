const { Client, Collection } = require('discord.js');
const { Colors, BetterConsoleLogger } = require('discord.js-v14-helper');
const fs = require('fs');
require('dotenv').config();
const config = require('./config/main');

const client = new Client(config.client.constructor);

client.commands = new Collection();
client.interactions = new Collection();

module.exports = client;

new BetterConsoleLogger(`Take your GitHub management to the next level!`)
	.setTextColor(Colors.Blue)
	.log(true);

fs.readdirSync('./src/handlers').forEach((handler) => {
	new BetterConsoleLogger('[INFO] Handler loaded: ' + handler)
		.setTextColor(Colors.Bright_yellow)
		.log(true);

	require('./handlers/' + handler)(client, config);
});

require('./error/main')();

client.login(config.client.token);
