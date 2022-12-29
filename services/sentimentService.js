const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

const EmailDTO = require('../dtos/emailSummarizerDTO');
const emailUtils = require('../utils/emailUtils');

class SentimentService {

    constructor() {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY || "",
        });
        this.openai = new OpenAIApi(configuration);
    }

    async sentimet(emailText) {

        const sentimentCompletion = this.openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Classify the sentiment in these email:\n\n1 ${emailText}`
        });

        const summryCompletion = this.openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${emailText}tl;dr:`
        });

        const responseCompletion = this.openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Return  'true' if this is question and 'false' if it is not: ${emailText}`
        });

        const response = await Promise.all([summryCompletion, sentimentCompletion, responseCompletion]);

        const summary = emailUtils.removeEmptyRows(response[0].data.choices[0].text);
        const sentiment = emailUtils.getSentiment(response[1].data.choices[0].text);
        const awaitingResponse = emailUtils.getAwaitingResponse(response[2].data.choices[0].text);

        return new EmailDTO(summary, sentiment, awaitingResponse);
    }
}

module.exports = SentimentService;

