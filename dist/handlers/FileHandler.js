"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileHandler = void 0;
const Game_1 = require("../models/Game");
const fs_1 = __importDefault(require("fs"));
const Team_1 = require("../models/Team");
/**
 * Responsible for reading file contents and formatting them to object or JSON
 */
class FileHandler {
    /**
     *
     * @param path
     */
    constructor(path) {
        this.path = path;
        this.league = [];
        let text = fs_1.default.readFileSync(path, "utf8");
        const lines = text.split("\n");
        for (let i in lines) {
            this.league.push(this.createGame(lines[i]));
        }
    }
    /**
     * Create a Game object instance
     * @param input
     */
    createGame(input) {
        const [team1, team2] = input.split(', ')
            .map(result => {
            var _a;
            const matches = (_a = /(?<name>[a-zA-Z\s]+) (?<score>\d)/.exec(result)) === null || _a === void 0 ? void 0 : _a.groups;
            return new Team_1.Team(matches.name, +matches.score);
        });
        this.addPoints(team1, team2);
        return new Game_1.Game(team1, team2);
    }
    /**
     * Allocates match points to each team
     * @param team1
     * @param team2
     */
    addPoints(team1, team2) {
        if (team1.score > team2.score) {
            team2.points = 0;
            team1.points = 3;
        }
        else if (team1.score < team2.score) {
            team2.points = 3;
            team1.points = 0;
        }
        else {
            team2.points = 1;
            team1.points = 1;
        }
    }
}
exports.FileHandler = FileHandler;
