const {sendResponse} = require('../../responses/index');



exports.handler = async (event, context) => {

    const body = JSON.parse(event.body);
    const text = body.text;

    const wordList = (str) => {
        return str.split(" ");
    }

    if (!body) {
        return sendResponse(400, {message: "No text was sent"});
    }
    const listOfWords = wordList(text);

    

    return sendResponse(200, {listOfWords});
}