import {describe} from "mocha";
import {expect} from "chai";
import {join} from "path";
import {FileHandler} from "../src/handlers/FileHandler";
import {RankingHandler} from "../src/handlers/RankingHandler";

describe('FileHandler Tests', () => {

    const path = join(__dirname, "../sample/data.txt");
    const inputReader = new FileHandler(path);
    const rankingHandler = new RankingHandler(inputReader.league);

    it('should match the following results: \n' +
        '1. Tarantulas, 6 pts\n' +
        '2. Lions, 5 pts\n' +
        '3. FC Awesome, 1 pt\n' +
        '3. Snakes, 1 pt\n' +
        '5. Grouches, 0 pts\n', () => {
        expect(rankingHandler.toText()).to.contain(`1. Tarantulas, 6 pts
2. Lions, 5 pts
3. FC Awesome, 1 pt
3. Snakes, 1 pt
5. Grouches, 0 pts`)
    })
});