const { createServer } = require("net");

const server = createServer((clientSocket) => {
  process.stdin.pipe(clientSocket);

  clientSocket
    .on("data", (data) => {
      console.log("Clients says > ", data.toString());
    })
    .on("error", (err) => {
      console.log("Theres an error >> ", err.message);
    });
});

server.listen(9000, "0.0.0.0");
console.log("server listening on port 9000 & iface  all interfaces");
