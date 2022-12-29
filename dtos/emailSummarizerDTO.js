class EmailSummarizerDTO {

    constructor(summary, sentiment, awaitingResponse) {
        this.summary = summary;
        this.sentiment = sentiment;
        this.awaitingResponse = awaitingResponse;
    }
}

module.exports = EmailSummarizerDTO;

