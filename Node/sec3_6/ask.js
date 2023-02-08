const collectAns = require("./collectans");
const qns = [
  "whta's your name ",
  "where do you live ",
  "what are u going to do with node.js ",
];

const ansEvents = collectAns(qns, (ans) => {
  console.log("thanku for your ans !");
  console.log(ans);
  process.exit();
});

ansEvents.on("ans", (ans) => console.log(`the ans is ${ans}`));
