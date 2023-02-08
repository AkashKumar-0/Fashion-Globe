// const path = require("path");

/**
 * @path getting the file name andfir name
 * to run use @node_global
 */
// console.log(__dirname);
// console.log(__filename);

// console.log(`file name is ${path.basename(__filename)}`);

// for (let key in global) console.log(key);

/**
 * collect information from terminal
 */

/* console.log(process.argv);
//  in terminal -❯ node global --user Eve --greeting "hello from node"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function grab(flag) {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
}
let greeting = grab("--greeting");
let user = grab("--user");

console.log(greeting);
console.log(user);
*/

/*
process.stdout.write("hello \n \n ");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const qns = [
  "what's your name ?",
  "what would you rather be doing?",
  "what is your favourate animal?",
];

const ans = [];
function ask(i) {
  process.stdout.write(`\n\n\n ${qns[i]}`);
  process.stdout.write(` > `);
}
process.stdin.on("data", function (data) {
  ans.push(data.toString().trim());
  if (ans.length < qns.length) {
    ask(ans.length);
  } else process.exit();
});

process.on("exit", function () {
  process.stdout.write("\n\n\n");
  process.stdout.write(` Go ${ans[0]} you can finish writing ${ans[1]} later`);
});
ask(ans.length);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const waitTime = 3000;
// console.log(`setting a ${waitTime / 1000} second delay`);
// const timeFinished = () => {
//   clearInterval(interval);
//   console.log("done");
// };

// setTimeout(timeFinished, waitTime);

// const waitInterval = 500;
// let CurTime = 0;

// const incTime = () => {
//   CurTime += waitInterval;
//   console.log(`waiting ${CurTime / 1000} seconds`);
// };
// const interval = setInterval(incTime, waitInterval);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const path = require("path");

const util = require("util");

const v8 = require("v8");

const dirUploads = path.join(__dirname, "www", "files", "uploads");

// console.log(path.basename(__filename));
// console.log(dirUploads);

// util.log(path);
// console.log(path);

/**
 * @util.log it gives output same as console.log with timestamp
 */
// util.log(dirUploads);

// util.log(path.basename(__filename));

/**
 * @v8 {memory size by our app and many more}
 */
// util.log(v8.getHeapStatistics());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//collecting information from readline

// const readline = require("readline");
// const { doesNotMatch } = require("assert");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const qns = [
//   "whta's your name ",
//   "where do you live ",
//   "what are u going to do ",
// ];

// function collectAns(qns, done) {
//   const ans = [];

//   const qnsAns = (el) => {
//     ans.push(el.trim());

//     if (ans.length < qns.length) rl.question(qns[ans.length], qnsAns);
//     else return done(ans);
//   };
//   rl.question(qns[0], qnsAns);
// }

// collectAns(qns, (ans) => {
//   console.log("thanku for your ans !");
//   console.log(ans);
//   process.exit();
// });

/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// const events = require("events");
// const { Readable } = require("stream");

// let emitter = new events.EventEmitter();

// emitter.on("customEvent", (msg, user) => {
//   console.log(msg, user);
// });
// /**
//  * emiiter.emit is a powerful tool that allows us to decouple logic and handle asynchronicity in js
//  */
// emitter.emit("customEvent", "hello world", "linux");

// process.stdin.on("data", (data) => {
//   const input = data.toString().trim();
//   if (input === "exit") {
//     emitter.emit("customEvent", "goobye", "process");
//     process.exit();
//   }
//   emitter.emit("customEvent", data.toString().trim(), "terminal");
// });

/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
