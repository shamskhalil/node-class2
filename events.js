const { EventEmitter } = require("events");

class Bread {
  constructor(sugar, milk, butter, floor, yeast) {
    console.log("Mixing : ", sugar, milk, butter, yeast);
  }
  startBaking() {
    console.log("Bread is now on fire");
  }
  stopBaking() {
    console.log("Bread is now ready");
  }
  package() {
    console.log("Packaging bread in nylons");
  }
}

class Cake extends Bread {
  constructor(eggs, sugar, milk, butter, floor, yeast) {
    super(sugar, milk, butter, floor, yeast);
    console.log("added eggs to the mixture");
  }
  doIcing() {
    console.log("applying icing cream to cake");
  }
}

const shamsBread = new Bread("sugar", "nido", "blue band", "floor", "yeast");
shamsBread.startBaking();
shamsBread.stopBaking();
shamsBread.package();
console.log("-----------------------------------------");
const shamsCake = new Cake(
  "eggs",
  "sugar",
  "nido",
  "blue band",
  "floor",
  "yeast"
);
shamsCake.startBaking();
shamsCake.stopBaking();
shamsCake.doIcing();
shamsCake.package();
