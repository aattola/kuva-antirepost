const looksSame = require('looks-same');
const path = require('path');
const Sse4Crc32 = require("sse4_crc32");
const fs = require("fs");

const eka = path.resolve(__dirname + '/kuvat/aaponkuva.png')
const toka = path.resolve(__dirname + '/kuvat/lassenkuva.png')

// looksSame(eka, toka, function (error, data) {
//   if (error) return console.log(error)
//   console.log(data)
//   console.log(data.equal)
//   // equal will be true, if images looks the same
// });

const stream = Sse4Crc32
  .fromStream(fs.createReadStream(eka))
  .on('finish', () => console.log(`CRC-32C: ${stream.crc}`))

const stream2 = Sse4Crc32.fromStream(fs.createReadStream(toka)).on(
  "finish",
  () => console.log(`CRC-32C: ${stream2.crc}`)
);
