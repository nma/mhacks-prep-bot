// @flow

function cancelCommand(bot) {
    bot.dialog('cancel', function(session) {
        // Send message to the user and end this dialog
        let message = 'Thank you!';
        let messageArray = ["You did great!", "That was nice!", "Feeling recharged!"];
        session.endDialog(`${message} ${messageArray[Math.floor(Math.random() * messageArray.length)]}`);
    }).triggerAction({
        matches: /^(cancel|stop|end|terminate)$/
    });
}

function helpCommand(bot) {
    bot.dialog('help', function(session) {
        // Send message to the user and end this dialog
        session.endDialog('I am R2DStress, human bot stress relations.I can help you relax by helping you concentrate on certain parts of your body, your breathing, or your thoughts. Type “body”, “breathing”, “mindset” according to how you want to start.');
    }).triggerAction({
        matches: /^help$/,
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
}

export default setupCommands;
