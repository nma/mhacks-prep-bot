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
debug(`emulator: ${useEmulator}`);

var connector = useEmulator ? new builder.ChatConnector() : new builder.ChatConnector({
    appId: process.env['MicrosoftAppId'],
    appPassword: process.env['MicrosoftAppPassword'],
    stateEndpoint: process.env['BotStateEndpoint'],
    openIdMetadata: process.env['BotOpenIdMetadata']
});

var bot = new builder.UniversalBot(connector);
bot.localePath(path.join(__dirname, './locale'));

// TODO figure out intents and their meaning
// const INTENTS = {
// };

// First draft of middleware routing for the bots
dialogMiddleware.default(bot, builder);
commandMiddleware.default(bot);

bot.on('conversationUpdate', function (update) {
    debug(update);
});

bot.dialog('/', function(session) {
    session.send('Hello, friend!');
});

var restify = require('restify');
var server = restify.createServer();
server.listen(port, function() {
    debug(`${useEmulator ? 'test' : 'prod' } bot endpoint at http://localhost:${port}/api/messages`);
});
server.post('/api/messages', connector.listen());
