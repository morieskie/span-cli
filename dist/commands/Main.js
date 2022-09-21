"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const readline_1 = require("readline");
const FileHandler_1 = require("../handlers/FileHandler");
const RankingHandler_1 = require("../handlers/RankingHandler");
const readline = (0, readline_1.createInterface)(process.stdin, process.stdout);
readline.question('Enter absolute file path to load ie "/Users/morieskie/app/src/sample/sample.txt": ', (path) => {
    fs_1.default.stat(path, function (err, stat) {
        if (err == null) {
            const fileHandler = new FileHandler_1.FileHandler(path);
            new RankingHandler_1.RankingHandler(fileHandler.league);
        }
        else if (err.code === 'ENOENT') {
            console.log('File doesn\'t exists');
        }
        else {
            console.log('Some other error: ', err.code);
        }
    });
    readline.close();
});
