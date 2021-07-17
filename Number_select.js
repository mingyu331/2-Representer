const num = 22;
const min = 1000;
const max = 4900;
const fs = require('fs');

let numbers = [];
for (let i = 0; i < num; i++) {
    numbers.push(min + Math.floor((max - min) * Math.random()));
}

fs.writeFileSync(".\\representer\\numbers.json", JSON.stringify(numbers));