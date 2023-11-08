const {sendResponse} = require('../../responses/index');



exports.handler = async (event, context) => {

    try {
        const text = event.queryStringParameters.sentence.replace(/\+/g, ' ');

        const wordsummary = (str) => {

            return str.split(' '); 
        }

        if (!text) {
            return sendResponse(400, {message: "No text was sent"});
        }
        const list = wordsummary(text);
        const count = list.length;

    

        return sendResponse(200, {sucess: true, count: (count), list: (list)});
    } catch (error) {
        console.error(error);
        return sendResponse(500, {messege: "wrong url input bitch?", error: error.message})
    }

    


}