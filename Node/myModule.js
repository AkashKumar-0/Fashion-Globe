let cnt = 0;
const inc = () => ++cnt;
const dec = () => --cnt;

const getCount = () => cnt;

module.exports = {
  anything: true,
  who: "bill",
  cnt,
  inc,
  dec,
  getCount,
};
