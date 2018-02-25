// 1;
function* getValue(number) {
  let prevNumber = 1 * number;
  while (true)  {
    if ( prevNumber * number > 1000000000 ){
      throw new Error('Uncaught Error: Value is too big!');
    }
    yield prevNumber *= number;
  }

}

//testing
// const valuer = getValue(5);
// console.log(valuer.next().value);      // 25 (5 * 5)
// console.log(valuer.next().value);      // 125 (25 * 5)
// console.log(valuer.next().value);      // 625 (125 * 5)
// const valuerBig = getValue(5000);
// console.log(valuerBig.next().value);    //25000000
// console.log(valuerBig.next().value);    //Error 'Uncaught Error: Value is too big!'

//2
function* createSeconds() {
  while (true)  {
    let seconds = new Date().getSeconds();
    yield Math.floor(seconds / 10) * 10;
  }
}

const getSec = createSeconds();

// testing
// console.log(getSec.next().value);           // 10 20 30 ...


//3

// https://codepen.io/andreymakaroff/pen/rJrNdR?editors=1010



// 02 Async/Await

//1

// https://plnkr.co/edit/yFIJl0liUU5q6AJfpiBR?p=preview

//2

// https://codepen.io/andreymakaroff/pen/jZpEBR?editors=0011

//3

// https://codepen.io/andreymakaroff/pen/VQEema?editors=0011
