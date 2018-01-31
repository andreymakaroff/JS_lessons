let array = ['Oleg', 'Co', 'Ilia', 'Yan', 'Genya'];

let allInOne = (array, number) => {
  let filterArray = array.filter((name) => {
    return name.length >= number;
  });

  let modifyArray = filterArray.map((name) => {
    return {name: name, length: name.length}
  });

  return modifyArray;
};

let allInOneByReducer = (array, number) => {
  let modifyArray = array.reduce((acc, item) => {
    let obj = {name: item, length: item.length};

    if(item.length >= number){
      return acc.concat(obj);    //.push не работает
    }else{
      return acc;
    }

    // item.length >= number ? (acc.concat(obj)) : acc;  // не пойму почему не работает (через тернарный)

  }, []);
  return modifyArray;
};

let priceList = [{price: 12}, {price: 50}, {price: 13}];
let sum = (priceList) => {
  let total = priceList.reduce(function(a, b) {
    return a + b.price;
  }, 0);
  return total;
};

console.log(allInOne(array,4));
console.log(allInOneByReducer(array,4));
console.log(sum(priceList));