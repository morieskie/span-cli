import {Team} from "../models/Team";
import {Game} from "../models/Game";

/**
 * Responsible for ranking team for all matches on the league
 */
export class RankingHandler {
    teams: Team[] = [];

    /**
     *
     * @param league
     */
    constructor(private league: Game[] = []) {
        this.execute();
        console.log(this.toText());
    }

    /**
     *
     */
    execute(): void {
        this.league.forEach((game: Game) => {
            this.addTeamToList(game.team1);
            this.addTeamToList(game.team2);
        })

        this.teams.sort(this.compare);
    }

    /**
     * Populates teams property
     * @param team
     */
    addTeamToList = (team: Team): void => {
        const index = this.teams.findIndex(t => t.name === team.name)
        if (index === -1) {
            this.teams.push(team)
        } else {
            this.teams[index].points += team.points;
        }
    }

    /**
     * Formats array to output text
     */
    toText(): string {
        let key: number = 1;
        let text = '';
        this.teams.map((t: Team, index: number) => {
            if (index - 1 >= 0) {
                key = (this.teams[index].points === this.teams[index - 1].points ? index - 1 : index) + 1;
            }
            text += `${key}. ${t.name}, ${t.points} pt${t.points === 1 ? '' : 's'}\n`;
        });
        return text;
    }

    /**
     * Compare entries by integer or by alphabet should
     * @param a
     * @param b
     */
    compare(a: Team, b: Team): number {
        let result = b.points - a.points;
        if (result === 0 && a.name < b.name) {
            result = -1
        } else if (result === 0 && a.name > b.name) {
            result = 1;
        }

        return result;
    }
}