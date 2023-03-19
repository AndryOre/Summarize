module.exports = {
	customId: 'helloReply',
	run: async (client, interaction) => {
		return interaction.reply({
			content: 'Hello world!',
		});
	},
};
