let array = ['Oleg', 'Co', 'Ilia', 'Yan', 'Genya'];

const allInOne = (array, number) => {
    const filterArray = array.filter((name) => {
        return name.length >= number;
    });

    const modifyArray = filterArray.map((name) => {
        return {name: name, length: name.length}
    });

    return modifyArray;
};

const allInOneByReducer = (array, number) => {
    const modifyArray = array.reduce((acc, item) => {
        const obj = {name: item, length: item.length};
        item.length >= number ? acc.push(obj) : null;
        return acc;
    }, []);
    return modifyArray;
};

let priceList = [{price: 12}, {price: 50}, {price: 13}];
const sum = (priceList) => {
    const total = priceList.reduce(function(a, b) {
        return a + b.price;
    }, 0);
    return total;
};

console.log(allInOne(array,4));
console.log(allInOneByReducer(array,4));
console.log(sum(priceList));