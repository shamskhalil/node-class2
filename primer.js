//var let const
//var i = 10;

/*
for (let i = 0; i < 5; i++) {
  var j = "shams";
  console.log(i, j);
}

function t() {
  var j = "shams";
  console.log(j);
}
t();
console.log(j + " Khalil");


"use strict";

k = 23;
p = k + 2345;
console.log(k, p);

sham = 567;
console.log(sham);
*/
let arr = [1, 2, 3, "shams", true, { name: "shams", sex: "male" }];
console.log(arr);

let Person = {
  name: "Khalil",
  sex: "Male",
  printMe: function () {
    console.log(`My name is ${this.name} and my gender is ${this.sex}`);
  },
};
Person.printMe();
Person.city = "Kaduna";
console.log(Person["city"]);
