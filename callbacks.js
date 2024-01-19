console.log("1");

getNum((err, result) => {
  if (err != null) {
    console.log("Oops theres an error :", err);
  } else {
    console.log(result);
  }
});

console.log("3");

function getNum(phone) {
  setTimeout(() => {
    phone("Sorry network unavailable!", null);
  }, 4000);
}

/*

*/
