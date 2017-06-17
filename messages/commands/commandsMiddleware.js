// @flow

function cancelCommand(bot) {
    bot.dialog('cancel', function(session) {
        // Send message to the user and end this dialog
        session.endDialog('Cancelling your last action');
    }).triggerAction({
        matches: /^(cancel|stop|end|terminate)$/
    });
}

function helpCommand(bot) {
    bot.dialog('help', function(session) {
        // Send message to the user and end this dialog
        session.endDialog('I am R2DStress, human bot stress relations. Type start to start a workflow with me!');
    }).triggerAction({
        matches: /^help$/,
        onSelectAction: function(session, args) {
            // Add the help dialog to the dialog stack
            // (override the default behavior of replacing the stack)
            session.beginDialog(args.action, args);
        }
    });
}

function startCommand(bot) {
    bot.dialog('start', function(session) {
        // Send message to the user and end this dialog
        session.beginDialog('/stress15');
    }).triggerAction({
        matches: /^start/,
        onSelectAction: function(session, args) {
            // Add the help dialog to the dialog stack
            // (override the default behavior of replacing the stack)
            session.beginDialog(args.action, args);
        }
    });
}

function setupCommands(bot) {
    cancelCommand(bot);
    helpCommand(bot);
    startCommand(bot);
}

export default setupCommands;
