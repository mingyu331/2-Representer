const num = 22
const min = 1000
const max = 4900

for (let i = 0; i < num; i++) {
    console.log(min + Math.floor((max - min) * Math.random()));
}