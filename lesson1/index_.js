const array = ['Oleg', 'Co', 'Ilia', 'Yan', 'Genya'];
const array2 = ['sss', 'aa',...array];



// const num = ['1', '5','77'];
// console.log(Math.max(...num));


// function foo(num, ...props) {
//     console.log(num);
//     console.log(props);
// }
//
// foo(num,...array)

function getBaseInfo( { name = 'John', age = 18} = {}) {
    return `name - ${name}; age - ${age}`;
}

// console.log(getBaseInfo({name: 'andre'}));
console.log(getBaseInfo());