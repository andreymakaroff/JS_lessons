const generateNumber = (min = 1, max = 10) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

module.exports = generateNumber;