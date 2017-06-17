/*-----------------------------------------------------------------------------
This template demonstrates how to use Waterfalls to collect input from a user using a sequence of steps.
For a complete walkthrough of creating this type of bot see the article at
https://docs.botframework.com/en-us/node/builder/chat/dialogs/#waterfall
-----------------------------------------------------------------------------*/
"use strict";
var builder = require("botbuilder");
// this is only valid for Azure Functions exports
// var botbuilder_azure = require("botbuilder-azure");
var path = require('path');
var debug = require('debug')('bot');

// lets the port be set by heroku
var port = process.env.PORT || 3978;
var commandMiddleware = require("./commands/commandsMiddleware");
var dialogMiddleware = require("./dialogues/dialogMiddleware");

var useEmulator = (process.env.NODE_ENV == 'development');
debug(process.env.NODE_ENV);
debug(useEmulator);

var connector = useEmulator ? new builder.ChatConnector() : new builder.ChatConnector({
    appId: process.env['MicrosoftAppId'],
    appPassword: process.env['MicrosoftAppPassword'],
    stateEndpoint: process.env['BotStateEndpoint'],
    openIdMetadata: process.env['BotOpenIdMetadata']
});

var bot = new builder.UniversalBot(connector);
bot.localePath(path.join(__dirname, './locale'));

// TODO
// const INTENTS = {
// };

// First draft of middleware routing for the bots
dialogMiddleware.default(bot, builder);
commandMiddleware.default(bot);

bot.dialog('/', [
    function (session) {
        builder.Prompts.text(session, "Hello... What's your name?");
    },
    function (session, results) {
        session.send("Hi! " + results.response);
        session.send("You can get more info with help, or start a session with me with start!");
    }
]);

var restify = require('restify');
var server = restify.createServer();
server.listen(port, function() {
    debug(`test bot endpoint at http://localhost:${port}/api/messages`);
});
server.post('/api/messages', connector.listen());
