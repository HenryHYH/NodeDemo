var fs = require('fs');

var data = fs.readFileSync("text.txt");
console.log(data.toString());

console.log("End sync");

fs.readFile("text.txt", function (err, data) {
    if (err)
        console.error(err);

    console.log(data.toString());
});

console.log("End async");
