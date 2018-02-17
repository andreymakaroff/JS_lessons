// 1;
const names = {0: 'Vasya', 1: 'Petya', 2: 'Kolya'};

names.length = Object.keys(names).length;

names[Symbol.iterator] = function (index = 0) {
  return {
    next: () => ({
      value: this[index++],
      done: index > this.length
    })
  };
};


for (let val of names) console.log(val);
console.log(names.length);


//2
const obj = {zone: true, word: 'test', skill: 'JS', name: 'John'};

obj[Symbol.iterator] = function (index = 0) {
  const keys = Object.keys(this);
  keys.sort();

  return {
    next: () => ({
      value: this[keys[index++]],
      done: index > keys.length
    })
  };
};

for (let val of obj) console.log(val);


//3

const date = {
  [Symbol.iterator]: function (index = 0) {
    const now = new Date();
    const param = ['FullYear', 'Month', 'Date', 'Hours', 'Minutes', 'Seconds'];

    return {
      next: () => {
        if (index < param.length) {
          return {
            value: `${param[index]} is ${ now [`get${ param[index++] }`]()}`,
            done: false
          };
        } else {
          return {
            done: true
          };
        }
      }
    };
  }
};

for (let val of date) console.log(val);

