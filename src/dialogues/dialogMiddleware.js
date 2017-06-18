import stressRefresher from "./stressRefresher";
import getName from "./getName";

function dialogues(bot, builder) {
    stressRefresher(bot, builder);
    getName(bot, builder);
}

export default dialogues;
