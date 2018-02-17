// 1;
// const names = {0: 'Vasya', 1: 'Petya', 2: 'Kolya'};
//
// names.length = Object.keys(names).length;
//
// names[Symbol.iterator] = function (index = 0) {
//     return {
//         next: () => ({
//             value: this[index++],
//             done: index > this.length
//         })
//     }
// };
//
//
// for (let val of names) console.log(val);

// console.log(names.length);




// function* simpleGen (msg) {
//     yield msg + 'one';
//     yield msg + 'two' ;
// }
//
// const it = simpleGen('The text is:');


//.3

function getLengthStr(str= '') {
    let length = 0;

    try {
        length = str.length
    } catch (error){
        console.log(error)
    } finally {
        console.log('ura')
        //в любом случае
    }

    return str.length;
}

console.log(getLengthStr());
// console.log(it.next());
// console.log(it.next());

