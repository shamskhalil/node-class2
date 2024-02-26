function addP(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}

const questions = [
  { a: 1, b: 2 },
  { a: 5, b: 7 },
  { a: 89, b: 90 },
  { a: 45, b: 97 },
];

//IFEE imediately invoked function expression
/*(async () => {
  const start = process.hrtime();
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    let result = await addP(q.a, q.b);
    console.log(result);
  }
  let time = process.hrtime(start);
  time = time[0] + time[1] / 1000000000;

  console.log("took: ", time + "secs");
})();
*/
for (let i = 0; i < questions.length; i++) {
  const q = questions[i];
  addP(q.a, q.b).then((r) => console.log(r));
}
