const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

const openAi = new OpenAIApi(configuration);

async function generateAIResponse(conversationToSummarize) {
	const result = await openAi.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages: conversationToSummarize,
	});
	return result.data.choices[0].message.content;
}

module.exports = { generateAIResponse };
