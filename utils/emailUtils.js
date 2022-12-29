
function removeEmptyRows(text) {
    return text.replace("\n", "");
}

function getSentiment(text) {
    const sentiments = ['positive', 'negative', 'neutral'];
    const textToLowerCase = text.toLowerCase();
    const result = sentiments.filter(sent => textToLowerCase.includes(sent))[0];
    return result;
}

function getAwaitingResponse(text) {
    if (text.toLowerCase().includes('true')) return true;
    return false;
}

module.exports = { removeEmptyRows, getSentiment, getAwaitingResponse }