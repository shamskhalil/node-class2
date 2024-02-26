const { promisify } = require("util");

const dividePromisify = promisify(divide);
const addPromisify = promisify(add);

function divide(a, b, cb) {
  setTimeout(() => {
    if (b == 0) {
      cb("Error: Divison by zero is not allowed", null);
    } else {
      cb(null, a / b);
    }
  }, 2000);
}

function add(a, b, cb) {
  setTimeout(() => {
    cb(null, a + b);
  }, 2000);
}

//1. using es6 promise class
function dividePromise(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b == 0) {
        reject("Error: Divison by zero is not allowed");
      } else {
        resolve(a / b);
      }
    }, 2000);
  });
}
//2. using nodes promisify

//add(2, 3, function (err, res) {
//  if (err) console.log(err);
//  else console.log("result : ", res);
//});

function addP(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}

addP(3, 5)
  .then((r) => {
    console.log(r);
  })
  .catch((err) => {
    console.log(err);
  });
