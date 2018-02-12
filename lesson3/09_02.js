// 01

// 3
class Component {
    constructor( tagName = 'div') {
        this.node = document.createElement(tagName);
    }
    setText (text) {
        this.node.textContent = text;
    };
}

class InputComponent extends Component{
    constructor( tagName ) {
        super(tagName);
        this.node.placeholder = 'Enter text';
    }
    setText (text) {
        this.node.value = text;
    };
}


//4

class Figure {
    constructor(angles = 1) {
        this.angles = angles;
        this.abstract = true;
    }

    getInfo() {
        return {
            angles: this.angles,
            abstract: this.abstract
        }
    };
}
class Triangle extends Figure{
    constructor(angles, name = 'triangle'){
        super(angles);
        this.name = name;
        this.abstract = false;
    }
    getInfo() {
        const props = super.getInfo();
        props.name = this.name;
        return props;
    };
}



//5

class Table{
    static getCells(row, cell){
        return row*cell;
    }

    constructor ( row = 3, columns = 3 ) {
        let templateRow = () => {
            let r = [];
            for (let i = 0; i < this.columns; i++) {
                r.push('');
            }
            return r
        };
        let table = () => {
            let t = [];
            for (let i = 0; i < row; i++) {
                t.push(templateRow());
            }
            return t
        };

        this.row = row;
        this.columns = columns;
        this.table = table();
    }
    setText( rowIndex, columnsIndex, text) {
        this.table[rowIndex][columnsIndex] = text;
        // console.log(this.table) ;
        return true;
    }
    getText( rowIndex, columnsIndex) {
        return this.table[rowIndex][columnsIndex];
    }
    getTotalCells ( row = this.row, columns = this.columns ) {
        return row*columns;
    }
    getInfo() {
        return {
            cells: this.getTotalCells(),
            rows: this.row,
            columns: this.columns,
        }
    }

}

// tests

// const table1 = new Table(2,2);
// console.log(table1.getTotalCells());
// console.log(table1.setText(1, 0, 'test'));
// console.log(table1.getText(1, 0));
// console.log(table1.getText(1, 1));
// console.log(table1.getInfo());
// console.log(Table.getCells(5, 5));



//6

class NamedTable extends Table{
    constructor(row, columns, name = 'table' ){
        super(row, columns);
        this.name = name;
    }
    setName(name){
        let validName = (name === undefined || name === '') ? this.name : name;
        this.name = validName;
        return true;
    }
    getInfo(row, columns, name) {
        const props = super.getInfo();
        props.name = this.name;
        return props;
    }
}

// tests

// const table2 = new NamedTable(2,2,'cool table');
// console.log(table2.getInfo());
// console.log(table2.setName('super table'));
// console.log(table2.setName());
// console.log(table2.getInfo());


//02  PROMISES

//1

const promiseCreator = (seconds, resultStr) => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {resolve(resultStr)}, seconds);
    });
    return promise;
};

const promiseCreator = (seconds, resultStr) =>  new Promise((resolve) => setTimeout(() => {resolve(resultStr)}, seconds));

//2


// const promise = new Promise( function(resolve, reject){...} );

const promise = new Promise(function(resolve, reject) {
    resolve(  someValue  );
});

promise.then(function (value) {
    console.log(value);
});




//---
// const promise = new Promise(function (resolve, reject){
//     setTimeout( function () { resolve('some value')}, 1000 );
// });
//
// Создать функцию, которая возвращает промис.  Функция принимает два аргумента - время, через которое промис должен выполниться, и значение, с которым промис будет выполнен.
//
//     function promiseCreator(...) {...}
// const prom = promiseCreator(500, 'Ok!');
// prom.then(console.log);
// Ok!


const promiseCreator = (seconds, resultStr) => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {resolve(resultStr)}, seconds);
    });
    return promise;
};

const promiseCreator = (seconds, resultStr) =>  new Promise((resolve) => setTimeout(() => {resolve(resultStr)}, seconds));

const prom = promiseCreator(500, 'Ok!');
prom.then(console.log);