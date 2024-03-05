const fs = require("fs");

const { createReadStream, createWriteStream } = fs;

/*
fs.readFile("./hunting.mp4", { encoding: "binary" }, (err, fileContent) => {
  if (err) {
    console.log("Error reading file content!!", err.message);
  } else {
    console.log("File copied to RAM");
    setTimeout(() => {
      fs.writeFile(
        "./hunting-copy.mp4",
        fileContent,
        { encoding: "binary" },
        (err) => {
          if (err) {
            console.log("Error writting new file ", err.message);
          } else {
            console.log("File copied sucessfully!!!!");
          }
        }
      );
    }, 20000);
  }
});
*/
/*
const rs = createReadStream("./hunting.mp4", {
  highWaterMark: 200 * 1024 * 1024,
});

const ws = createWriteStream("./hunting-copy.mp4");

ws.on("drain", () => {
  console.log("Funnel Drained, resuming source again!!!");
  rs.resume();
});

rs.on("data", (chunk) => {
  console.log("read a chunk >> ", chunk.length, " bytes");
  const isNotFull = ws.write(chunk, (err) => {
    if (err) {
      console.log("Error witing chunk to destination ", err.message);
    } else {
      console.log("Chunk written successfully!");
    }
  });
  if (isNotFull == false) {
    console.log("Funnel full pausing source ....");
    rs.pause();
  }
})
  .on("error", (err) => {
    console.log("Error >> ", err.message);
  })
  .on("end", () => {
    console.log("Done reading !!");
  });
*/

const input = process.stdin;

const { PassThrough, Transform } = require("stream");

let liters = 0;

class Transformer extends Transform {
  constructor() {
    super();
  }
  _transform(chunk, enc, cb) {
    chunk = chunk.toString();
    chunk = chunk.replace(/a/g, "z");
    this.push(chunk);
    cb();
  }
  /*
  _flush(cb) {
    this.push();
    cb();
  }
  */
}

const gauge = new PassThrough();
const tr = new Transformer();
gauge.on("data", (chunk) => {
  console.log(chunk.toString());
});

//input.pipe(tr).pipe(gauge);

createReadStream("./primer.js").pipe(tr).pipe(gauge);
//input.pipe(gauge);
