
// calling the file package
const fs = require("fs");

// Reading the file 

const result = fs.readFileSync("./contacts.text", "utf-8")
console.log(result);