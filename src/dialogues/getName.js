import debug from 'debug';

function getName(bot, builder) {
    const log = debug('bot:getName');

    bot.dialog('/getName', [
        function (session) {
            if (!session.userData.name) {
                log('no name found');
                builder.Prompts.text(session, "Hello... What's your name?");
            } else {
                session.endDialog();
            }
        },
        function (session, results) {
            session.userData.name = results.response;
            log(`got name ${results.response}`);
            session.send(`Hi! ${results.response}! Now that we are getting familiar with each other, you can start a de-stress session with me by typing start!`);
        }
    ]);

}

export default getName;
