const { inc, getCount } = require("./myModule");
const myModule = require("./myModule");

// console.log(myModule.getCount());
// console.log("inc", myModule.inc());
// console.log(myModule.getCount());
inc();
inc();
inc();

console.log(`the count is ${getCount()}`);
