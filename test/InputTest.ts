import {describe} from "mocha";
import {expect} from "chai";
import {join} from "path";
import {FileHandler} from "../src/handlers/FileHandler";

const path = join(__dirname, "../sample/data.txt");
describe('FileHandler Tests', () => {
    const inputReader = new FileHandler(path);

    it('should create a collection of game', () => {
        expect(inputReader.league).to.be.an('array');
    })

    it('should contain properties team1 & team2', () => {
        expect(inputReader.league[0]).to.have.keys(['team1', 'team2']);
    })

    it('should contain properties name, score & points', () => {
        expect(inputReader.league[0].team1).to.have.keys(['name', 'score', 'points']);
    })

    it('should contain properties name, score & points', () => {
        expect(inputReader.league[0].team2).to.have.keys(['name', 'score', 'points']);
    })

    it('should contain have same score', () => {
        expect(inputReader.league[0].team1.score).to.be.eq(inputReader.league[0].team2.score);
    })

    it('should have team1 score > team2 score', () => {
        expect(inputReader.league[1].team1.score).to.be.gt(inputReader.league[1].team2.score);
    })

    it('should have team1 score < team2 score', () => {
        expect(inputReader.league[3].team1.score).to.be.gt(inputReader.league[3].team2.score);
    })

    it('should have same points', () => {
        expect(inputReader.league[0].team1.points).to.be.eq(inputReader.league[0].team2.points);
    })

})