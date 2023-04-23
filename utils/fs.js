const fs = require( "fs" )

function readFile(fileName) {
  return JSON.parse(fs.readFileSync(`./db/${fileName}`, "utf-8"));
}

function writeFile(fileName, data) {
  return fs.writeFileSync(`./db/${fileName}`, JSON.stringify(data, null, 4));
}

module.exports = {readFile, writeFile}