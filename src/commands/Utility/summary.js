const { generateAIResponse } = require('../../api/openAi');

module.exports = {
	command_data: {
		name: 'summary',
		description: 'Summarize channel messages.',
		type: 1,
		options: [],
	},
	role_perms: null,
	developers_only: false,
	cooldown: '5s',
	category: 'Utility',
	run: async (client, interaction) => {
		await interaction.reply({
			content: 'Summarizing the conversation, please wait...',
		});

		const channel = client.channels.cache.get(interaction.channelId);

		try {
			const conversationLog = await channel.messages
				.fetch({ limit: 100 })
				.then((messages) => {
					const conversationLog = {
						messages: messages.map((message) => ({
							timestamp: new Date(message.createdTimestamp).toISOString(),
							content: message.content,
							author: message.author.tag,
						})),
					};
					return conversationLog;
				});
			const conversationToSummarize = JSON.stringify(conversationLog);

			const summary = await generateAIResponse([
				{
					role: 'user',
					content: `Por favor, resume el siguiente registro de conversación: ${conversationToSummarize}`,
				},
			]);

			await interaction.editReply({ content: `${summary}` });
		} catch (error) {
			console.log(error);
		}
	},
};
