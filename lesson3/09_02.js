// 01

// 3
class Component {
  constructor(tagName = 'div') {
    this.node = document.createElement(tagName);
  }

  setText(text) {
    this.node.textContent = text;
  };
}

class InputComponent extends Component {
  constructor(tagName) {
    super(tagName);
    this.node.placeholder = 'Enter text';
  }

  setText(text) {
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

class Triangle extends Figure {
  constructor(angles, name = 'triangle') {
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

class Table {
  static getCells(row, cell) {
    return row * cell;
  }

  constructor(row = 3, columns = 3) {
    let templateRow = () => {
      let arrayRow = [];
      for (let i = 0; i < this.columns; i++) {
        arrayRow.push('');
      }
      return arrayRow;
    };
    let table = () => {
      let arrayTable = [];
      for (let i = 0; i < row; i++) {
        arrayTable.push(templateRow());
      }
      return arrayTable;
    };

    this.row = row;
    this.columns = columns;
    this.table = table();
  }

  setText(rowIndex, columnsIndex, text) {
    this.table[rowIndex][columnsIndex] = text;
    // console.log(this.table) ;
    return true;
  }

  getText(rowIndex, columnsIndex) {
    return this.table[rowIndex][columnsIndex];
  }

  getTotalCells(row = this.row, columns = this.columns) {
    return row * columns;
  }

  getInfo() {
    return {
      cells: this.getTotalCells(),
      rows: this.row,
      columns: this.columns,
    };
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

class NamedTable extends Table {
  constructor(row, columns, name = 'table') {
    super(row, columns);
    this.name = name;
  }

  setName(name) {
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


//02 ----------------------------------------- PROMISES-------------------------------------------------------------

//1

const promiseCreator = (seconds, resultStr) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(resultStr)
    }, seconds);
  });
};

// promiseCreator(500, 'Ok!').then(console.log);



//2
class Prom {
  constructor(){
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}

// tests
// const inst = new Prom();
// inst.promise.then(data => console.log(data)).catch(data => console.log(data));
// inst.resolve('test resolve');
// inst.reject('test reject');


//3
// https://codepen.io/andreymakaroff/pen/MQrBaY?editors=1111

//4
// https://codepen.io/andreymakaroff/pen/zRpLJd

//5
// https://codepen.io/andreymakaroff/pen/wypxZB?editors=1111
