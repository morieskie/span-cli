# League Ranking App

This is a CLI application which required a file input and the data containing the scores of each gamae in a league. The app will read the file and supply ranking for the winning base on:

* A draw (tie) is worth 1 point and a win is worth 3 points. A loss is worth 0 points. If two or more teams have the same number of points, they should have the same rank and be printed in alphabetical order (as in the tie for 3rd place in the sample data).

## Project details:

This project was built using [Node](https://nodejs.org/) version v18.3.0, [TypeScript](https://typescriptlang.org) version v18.3.0 and Javascript with ES2016 and above

# Structure



```
.
├── dist
│   ├── commands
│   │   └── Main.js
│   ├── handlers
│   │   ├── FileHandler.js
│   │   └── RankingHandler.js
│   └── models
│       ├── Game.js
│       └── Team.js
├── package-lock.json
├── package.json
├── readme.md
├── sample
│   └── data.txt
├── src
│   ├── commands
│   │   └── Main.ts
│   ├── handlers
│   │   ├── FileHandler.ts
│   │   └── RankingHandler.ts
│   └── models
│       ├── Game.ts
│       └── Team.ts
├── test
│   ├── InputTest.ts
│   └── RankingTest.ts
└── tsconfig.json

```

## Starting CLI

Run  `npm start` and then provide the path to where file is located

## Code build

Run `npm run build` to generate the dist folder with updated code. 

## Running unit tests

Run `npm test` to execute the unit tests via [Mocha](https://mochajs.org) and [Chai](https://www.chaijs.com).