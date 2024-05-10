const fs = require("fs");

fs.appendFileSync("./test.text", new Date().getDate().toLocaleString());
