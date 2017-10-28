'use strict';

var shuffle = require('lodash/shuffle');

let responses = [
    'Did somebody say cheezburger?',
    'I can has cheezeburger?',
    'sup?',
    'What do we want? Cheezburger. When do we wants it? NAO. :burger: :musical_note:'
];

var randomResponses = [];

function getRandomResponse() {

    if(!randomResponses.length > 0) {
        randomResponses = shuffle(responses);
    }

    return randomResponses.shift();
}

module.exports = function(bot) {

    bot.registerListener('hamburger', function(bot, message, slackbotCallback) {

        var resp = {};
        let pattern = new RegExp('hamburger');

        if (!message.text.match(pattern)) {
            return;
        }

        resp.text = getRandomResponse();
        slackbotCallback(null, resp);
    });

};
