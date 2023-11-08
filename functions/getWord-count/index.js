const {sendResponse} = require('../../responses/index');



exports.handler = async (event, context) => {

    const text = event.queryStringParameters.sentence.replace(/\+/g, ' ');

    const wordCount = (str) => {
        return str.split(" ").length;
    }

    if (!text) {
        return sendResponse(400, {message: "No text was sent"});
    }

    console.log(text);
    const count = wordCount(text);

    

    return sendResponse(200, {sucess: true, message: (count)});


}