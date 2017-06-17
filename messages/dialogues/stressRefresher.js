// import builder from 'botbuilder';

function stressRefresherWorksheet(bot, builder) {
    bot.dialog('/stress15', [
        function (session) {
            builder.Prompts.choice(session, "How do your hands feel right now?", ["Cold", "Clammy", "Fidgety", "Clenched", "Warm", "Dry"]);
        },
        function (session, results) {
            session.userData.hands = results.response.entity;
            builder.Prompts.choice(session, "okay " + results.response.entity + ", How about your shoulders?", ["Tensed", "Relaxed"]);
        },
        function (session, results, next) {
            session.userData.shoulders = results.response.entity;
            if (results.response.entity === "Tensed") {
                session.send("Rotate them forwards and backwards.");
            } else {
                next();
            }
        },
        function (session) gi{
            builder.Prompts.choice(session, "okay " + session.userData.shoulders + ", How about your neck?", ["Tensed", "Relaxed"]);
        },
        function (session, results, next) {
            session.userData.neck = results.response.entity;
            if (results.response.entity === "Tensed") {
                session.send("While keeping shoulders level, lean head to the left, right, forward and backward. Look over left shoulder and right shoulder.");
            } else {
                next();
            }
        },
        function (session) {
            builder.Prompts.choice(session, "okay " + session.userData.neck + ", How about your Jaw?", ["Clenched", "Apart"]);
        },
        function (session, results, next) {
            session.userData.teeth = results.response.entity;
            if (results.response.entity === "Tensed") {
                session.send("Gently move jaw from side to side and keep upper and lower teeth apart.");
            } else {
                next();
            }
        },
        function (session) {
            session.send("Got it... your hands are " + session.userData.hands +
                " your shoulders are " + session.userData.shoulders +
                " and your jaw is " + session.userData.teeth + ". Go relax! [Have a Gif!], [CAT PICTURES], [Inspirational Mumble Jumble!]");
        }
    ]);
}

export default stressRefresherWorksheet;
