"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankingHandler = void 0;
/**
 * Responsible for ranking team for all matches on the league
 */
class RankingHandler {
    /**
     *
     * @param league
     */
    constructor(league = []) {
        this.league = league;
        this.teams = [];
        /**
         * Populates teams property
         * @param team
         */
        this.addTeamToList = (team) => {
            const index = this.teams.findIndex(t => t.name === team.name);
            if (index === -1) {
                this.teams.push(team);
            }
            else {
                this.teams[index].points += team.points;
            }
        };
        this.execute();
        console.log(this.toText());
    }
    /**
     *
     */
    execute() {
        this.league.forEach((game) => {
            this.addTeamToList(game.team1);
            this.addTeamToList(game.team2);
        });
        this.teams.sort(this.compare);
    }
    /**
     * Formats array to output text
     */
    toText() {
        let key = 1;
        let text = '';
        this.teams.map((t, index) => {
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
    compare(a, b) {
        let result = b.points - a.points;
        if (result === 0 && a.name < b.name) {
            result = -1;
        }
        else if (result === 0 && a.name > b.name) {
            result = 1;
        }
        return result;
    }
}
exports.RankingHandler = RankingHandler;
