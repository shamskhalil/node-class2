const { Socket } = require("net");

const client = new Socket();

client
  .on("data", (data) => {
    console.log("GOT THIS FROM SERVER >>> ", data.toString());
  })
  .on("error", (err) => {
    console.log("Error >> ", err.message);
  });

client.connect(9000, "localhost");

process.stdin.pipe(client);
