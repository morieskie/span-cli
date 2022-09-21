import {Game} from "../models/Game";
import fs from "fs";
import {Team} from "../models/Team";

/**
 * Responsible for reading file contents and formatting them to object or JSON
 */
export class FileHandler {
    league: Game[] = [];

    /**
     *
     * @param path
     */
    constructor(private path: string) {
        let text: string = fs.readFileSync(path, "utf8");
        const lines: string[] = text.split("\n");
        for (let i in lines) {
            this.league.push(this.createGame(lines[i]));
        }
    }

    /**
     * Create a Game object instance
     * @param input
     */
    createGame(input: string): Game {
        const [team1, team2] = input.split(', ')
            .map(result => {
                const matches: any = /(?<name>[a-zA-Z\s]+) (?<score>\d)/.exec(result)?.groups;
                return new Team(matches.name, +matches.score);
            });
        this.addPoints(team1, team2);
        return new Game(team1, team2);
    }

    /**
     * Allocates match points to each team
     * @param team1
     * @param team2
     */
    addPoints(team1: Team, team2: Team): void {
        if (team1.score > team2.score) {
            team2.points = 0;
            team1.points = 3;
        } else if (team1.score < team2.score) {
            team2.points = 3;
            team1.points = 0;
        } else {
            team2.points = 1;
            team1.points = 1;
        }
    }
}