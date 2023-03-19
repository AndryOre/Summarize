const { GatewayIntentBits, Partials } = require('discord.js');
const { ClientIntents, ClientPartials } = require('discord.js-v14-helper');

module.exports = {
	// Client configuration:
	client: {
		constructor: {
			intents: ClientIntents,
			partials: ClientPartials,
			presence: {
				activities: [
					{
						name: 'GitHub',
						type: 3,
					},
				],
				status: 'online',
			},
		},
		token: process.env.DISCORD_BOT_TOKEN,
		id: process.env.DISCORD_BOT_ID,
	},

	// Database:
	database: {
		mongodb_uri: process.env.MONGODB_URI,
	},

	// Users:
	users: {
		developers: process.env.DISCORD_OWNER_ID,
		owner: process.env.DISCORD_OWNER_ID,
	},

	channels: {
		logging_channel: process.env.LOGGING_CHANNEL_ID,
	},
};
