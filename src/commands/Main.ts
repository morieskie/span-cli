import fs from "fs";
import {createInterface} from "readline";
import {FileHandler} from "../handlers/FileHandler";
import {RankingHandler} from "../handlers/RankingHandler";

const readline = createInterface(process.stdin, process.stdout);

readline.question('Enter absolute file path to load ie "/Users/morieskie/app/src/sample/sample.txt": ', (path) => {
    fs.stat(path, function(err, stat) {
        if (err == null) {
            const fileHandler = new FileHandler(path);
            new RankingHandler(fileHandler.league);
        } else if (err.code === 'ENOENT') {
            console.log('File doesn\'t exists')
        } else {
            console.log('Some other error: ', err.code);
        }
    });
    readline.close();
});