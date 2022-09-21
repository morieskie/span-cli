"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
/**
 * Team class
 */
class Team {
    constructor(name, score, points = 0) {
        this.name = name;
        this.score = score;
        this.points = points;
    }
}
exports.Team = Team;
