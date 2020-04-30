//notes copied from teacher
let myTv = {
    screenSize: 27,
    screenType: "plasma",
    refreshRate: 140,
    manufacturer: "Sony",
  };
  ​
  let yourTv = {
    screenSize: 60,
    screenType: "lcd",
    refreshRate: 60,
    manufacturer: "Samsung",
  };
  ​
  function TV(screenSize, screenType, refreshRate, manufacturer) {
    this.screenSize = screenSize;
    this.screenType = screenType;
    this.refreshRate = refreshRate;
    this.manufacturer = manufacturer;
  ​
    this.getDescription = () =>
      `A ${this.screenSize}" ${this.refreshRate}hz ${this.screenType} ${this.manufacturer} TV.`;
  }
  ​
  myTv.refreshRate;
  ​
  let firstTv = new TV(80, "led", 80, "LG");
  ​
  console.log(firstTv.getDescription());
  ​
  class TV {
    constructor(screenSize, screenType, refreshRate, manufacturer) {
      this.screenSize = screenSize;
      this.screenType = screenType;
      this.refreshRate = refreshRate;
      this.manufacturer = manufacturer;
    }
  ​
    getDescription() {
      return `A ${this.screenSize}" ${this.refreshRate}hz ${this.screenType} ${this.manufacturer} TV.`;
    }
  }



//below here were my notes above is copied from the teacher
let myTv = {
    screenSize: 27,
    screenType: "plasma",
    refreshRate: 140,
    manufacturer: "Sony",
};

let yourTv = {
    screenSize: 60,
    screenType: "lcd",
    refreshRate: 60,
    manufacturer: "samsung"
};

function TV(screenSize, screenType, refreshRate, manufacturer) {
    this.screenSize = screenSize;
    this.screenType = screenType;
    this.refreshRate = refreshRate;
    this.manufacturer = manufacturer;
}


myTv.refreshRate

let firstTv = new TV(80, "led", 80, "LG");

console.log(firstTv.screenType);

//below pulls all info instead of one

let myTv = {
    screenSize: 27,
    screenType: "plasma",
    refreshRate: 140,
    manufacturer: "Sony",
};

let yourTv = {
    screenSize: 60,
    screenType: "lcd",
    refreshRate: 60,
    manufacturer: "samsung"
};

function TV(screenSize, screenType, refreshRate, manufacturer) {
    this.screenSize = screenSize;
    this.screenType = screenType;
    this.refreshRate = refreshRate;
    this.manufacturer = manufacturer;
    this.getDescription = () => `A ${this.screenSize}" ${this.screenType} ${this.refreshRate}hz ${this.manufacturer} TV.`;
}

myTv.refreshRate;

let firstTv = new TV(80, "led", 80, "LG");
console.log(firstTv.getDescription());



let myTv = {
    screenSize: 27,
    screenType: "plasma",
    refreshRate: 140,
    manufacturer: "Sony",
};

let yourTv = {
    screenSize: 60,
    screenType: "lcd",
    refreshRate: 60,
    manufacturer: "samsung"
};

function TV(screenSize, screenType, refreshRate, manufacturer) {
    this.screenSize = screenSize;
    this.screenType = screenType;
    this.refreshRate = refreshRate;
    this.manufacturer = manufacturer;
    this.getDescription = () => `A ${this.screenSize}" ${this.screenType} ${this.refreshRate}hz ${this.manufacturer} TV.`;
}

myTv.refreshRate;

let firstTv = new TV(80, "led", 80, "LG");
console.log(firstTv.getDescription());

let myTv = {
    screenSize: 27,
    screenType: "plasma",
    refreshRate: 140,
    manufacturer: "Sony",
};

let yourTv = {
    screenSize: 60,
    screenType: "lcd",
    refreshRate: 60,
    manufacturer: "samsung"
};

class TV {
    constructor (screenSize, screenType, refreshRate, manufacturer) {
        this.screenSize = screenSize;
        this.screenType = screenType;
        this.refreshRate = refreshRate;
        this.manufacturer = manufacturer;
    }

    getDescription() {
        return `A ${this.screenSize}" ${this.screenType} ${this.refreshRate}hz ${this.manufacturer} TV.`;
    }
}