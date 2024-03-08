const { createServer } = require("net");

const db = [
  { username: "shamskhalil", password: "123456" },
  { username: "john", password: "doe" },
];

const accessToken = [];

const server = createServer((clientSocket) => {
  process.stdin.pipe(clientSocket);

  clientSocket
    .on("data", (data) => {
      data = data.toString().replace(/\n/g, "");
      processCmd(data, clientSocket);
    })
    .on("error", (err) => {
      console.log("Theres an error >> ", err.message);
    });
});

server.listen(9000, "0.0.0.0");
console.log("server listening on port 9000 & iface  all interfaces");

function processCmd(token, clientSocket) {
  token = "" + token.toLowerCase();
  if (token.startsWith("login")) {
    console.log("Processing login ....");
    const cmd = token.split(" ")[0];
    const params = token.split(" ")[1];
    const username = params.split(",")[0];
    let password = params.split(",")[1];
    const pass = checkUser(username, password);
    if (pass) {
      clientSocket.write(`${username}, you have logged in successfully!\n`);
      let tk = createAccessToken();
      accessToken.push(tk);
      clientSocket.write(`${username}, You access token is : ${tk}`);
    } else {
      clientSocket.write(`Invalid username or password, pls try again!`);
    }
  } else if (token.startsWith("logout")) {
    console.log("Processing logout ....");
    const cmd = token.split(" ")[0];
    const params = token.split(" ")[1];
    const username = params.split(",")[0];
    const tk = params.split(",")[1];
    if (accessToken.includes(tk)) {
      clientSocket.write(
        `Bye ${username}, you have been logged out, have a nice day!`
      );
      const pos = accessToken.indexOf(tk);
      if (pos >= 0) {
        accessToken.splice(pos, 1);
      }
    } else {
      clientSocket.write(`Invalid token or you are not logged in!!!!`);
    }
  } else if (token.startsWith("add")) {
    console.log("Processing add ....");
    const cmd = token.split(" ")[0];
    const params = token.split(" ")[1];
    const a = parseInt(params.split(",")[0]);
    let b = parseInt(params.split(",")[1]);
    const tk = params.split(",")[2];
    if (accessToken.includes(tk)) {
      clientSocket.write(`Sum of ${a} and ${b} is ${a + b}`);
    } else {
      clientSocket.write(`Invalid token or you are not logged in!!!`);
    }
  } else if (token.startsWith("mul")) {
    console.log("Processing mul ....");
    const cmd = token.split(" ")[0];
    const params = token.split(" ")[1];
    const a = parseInt(params.split(",")[0]);
    let b = parseInt(params.split(",")[1]);
    clientSocket.write(`Product of ${a} and ${b} is ${a * b}`);
  } else {
    clientSocket.write(
      `Invalid command, pls send either logi, logout, add or mul commands!!!`
    );
  }
}

function checkUser(username, password) {
  for (let i = 0; i < db.length; i++) {
    let obj = db[i];
    if (obj.username == username && obj.password == password) {
      return true;
    }
  }
  return false;
}

function createAccessToken() {
  let dict = "abcdefghijklmnopqrstuvwxyz";
  let token = "";
  for (let i = 0; i < 4; i++) {
    const pos = Math.ceil(Math.random() * 25);
    token = token + dict[pos];
  }
  return token;
}
