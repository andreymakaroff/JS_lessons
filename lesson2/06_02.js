// 01

// 2

const utils = {
    numbers: [1,2,3,4],
    prefix: 'number',
    getOdd() {return this.numbers.map( (number) =>  this.prefix + ' - ' + number )},
};

// 3

const getDate = () => new Date();

const getDay = () => {
    const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return days[new Date().getDay()];
};

const getListCopy = list => [...list];


// 02

//1

const getObject = ( name = "User", age = 25 ) => ({name, age});

//2

const obj = {
    str:'Hi my name is Andrey!',
    getLength(){
        return this.str.length;
    },
    reverse(){
        return [...this.str].reverse().join('');
    },
};

//3

const getOneObject = (...arrg) => Object.assign(...arrg);

//03

//2

class Component  {
    constructor( tagName = 'div' ) {
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }
    setText( text ) {
        this.node.textContent = text;
    };
}
const comp = new Component('span');

