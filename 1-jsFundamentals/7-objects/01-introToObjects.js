//objects are used to store multiple sets of data in the key: value pair format
//in the below example id is the key and 1 is the value in the first example
//in season info you see us nest a array inside a nested object and and another object inside that array

let netflix = {
  id: 1,
  name: "The Office",
  seriesInfo: {
    seasons: 9,
    seasonInfo: [
      {
        season: 1,
        episodes: 6,
        episodeInfo: [
          {
            episode: 1,
            episodeName: "Pilot",
          },
          {
            episode: 2,
            episodeName: "Diversity Day",
          },
        ],
      },
      {
        season: 2,
        episodes: 22,
        episodeInfo: [
          {
            episode: 1,
            episodeName: "The Dundies",
          },
        ],
      },
    ],
  },
};
// console.log("Whole Object:", netflix);
// console.log('just series info:', netflix.seriesInfo)
//(dot notation).notation to pull objects
// console.log("just season info:", netflix.seriesInfo.seasonInfo[0].episodeInfo[0]);

console.log(netflix.seriesInfo.seasonInfo[1].episodeInfo[0].episodeName);

let spaceJam = {
  toonSquad: {
    human: "Michael Jordan",
    rabbit: "Bugs Bunny",
    rabbit2: "Lola Bunny",
    duck: "Daffy Duck",
    tDevel: "Tasmanian Devil",
    bird: "Tweety",
    cat: "Sylvester",
    pig: "Porky Pig",
  },
  monstars: {
    0: "Bupkus",
    1: "Bang",
    2: "Nawt",
    3: "Pound",
    4: "Blanko",
  },
  nbaPlayers: {
    phoenixSuns: "Charles Barkley",
    newJerseyNets: "Shawn Bradley",
    newYorkKnicks: "Patrick Ewing",
    charlotteHornets1: "Larry Johnson",
    charloteeHornets2: "Muggsy Bogues",
  },
};


console.log(Object.keys(spaceJam));
console.log(Object.keys(spaceJam.toonSquad));

//the below two are the same
console.log(spaceJam.monstars[0]);
console.log(spaceJam.nbaPlayers.charlotteHornets1);

console.log(Object.values(spaceJam));

let garden = {
  vegetable: "zucchini", 
  flower: "sun flower",
  fruit: "grape",
  water: true,
  sun: true,
  size: 10
};

let keys = Object.keys(garden);
console.log(keys);
console.log(typeof keys[0]);

//the below two variables are the same
let zucchini = garden.vegetable;
let zucchini = garden["vegetables"];
console.log(zucchini);




let garden = {
  vegetable: "zucchini", 
  flower: "sun flower",
  fruit: "grape",
  water: true,
  sun: true,
  size: 10
};


//in the below example the baking.zucchini is actually adding the string "better make some bread" to what is happening in "baking" created object
//the below two examples are doing the same thing
let baking = {};
//bunch of code is here right now

baking.zucchini = "Better make some bread!";
console.log(baking);


baking["flour"] = "batter up!";
console.log(baking);

console.log(baking[garden["vegetable"]]);