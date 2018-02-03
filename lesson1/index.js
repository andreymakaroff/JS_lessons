// 01

// 1
const maxNumbr = ( array ) =>  Math.max( ...array );

// 2
const concatArray = ( array1, array2 ) => [ ...array1, ...array2 ];

// 3
const writeStrings = ( ...str ) => document.write( str.join('') );


//02

//1
const firstAndOther = ( arg1, ...other) => ( { first: arg1, other: other } );

//2

const organisation = {
    name: 'Google',
    info: { employees: 1536, partners: ['Microsoft', 'Facebook', 'Xing'] }
};
const getInfo = ({name = '‘Unknown’', info: { partners: [ partn1, partn2 ] } }) => {
    console.log(`Name: ${name}`);
    console.log(`Partners: ${partn1}, ${partn2}`);
};

//3

const createElement = ( { type = 'p', text = 'Hello' } = {} ) => `<${type}>${text}</${type}>`;


// 03

//1
const sum = (...arguments) => {
    const params = Array.prototype.slice.call(arguments);
    if (!params.length) return 0;
    return params.reduce( (prev, next) => prev + next );
};
