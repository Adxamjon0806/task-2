const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const allHashes = [];

function calculateSHA3256(filePath) {
  let fileData = fs.readFileSync(filePath);
  fs.readFile(filePath, (err, data) => {
    fileData = data;
  });
  const algoritm = crypto.createHash("SHA3-256");
  const hash = algoritm.update(fileData);
  return hash;
}

function gettingFiles(directoryPath) {
  const urlToFolderOfFiles = directoryPath + "/task 2";
  const files = fs.readdirSync(urlToFolderOfFiles);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fullPath = path.join(urlToFolderOfFiles, file);
    allHashes.push(calculateSHA3256(fullPath));
  }
  return allHashes;
}

gettingFiles(__dirname);
const sorted = allHashes.sort();
const strOfAll = sorted.join("") + "adxamjon0806@gmail.com";
const algoritmOfAll = crypto.createHash("SHA3-256");
const hashOfAll = algoritmOfAll.update(strOfAll).digest("hex");
console.log(hashOfAll);
