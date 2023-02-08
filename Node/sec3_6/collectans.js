const readline = require("readline");
const { EventEmitter } = require("events");
const { emitWarning } = require("process");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const qns = [
  "whta's your name ",
  "where do you live ",
  "what are u going to do ",
];

module.exports = (qns, done) => {
  const ans = [];
  const [firstqns] = qns;
  const emitter = new EventEmitter();

  const qnsAns = (el) => {
    emitter.emit("el", el);

    ans.push(el.trim());

    if (ans.length < qns.length) {
      rl.question(qns[ans.length], qnsAns);
    } else {
      return done(ans);
    }
  };

  rl.question(firstqns, qnsAns);
  return emitter;
};
