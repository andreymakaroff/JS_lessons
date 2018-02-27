const path = require('path');

const fileName = path.basename(__filename);

const getDate = () => new Date();
const hours = getDate().getHours();
const min = getDate().getMinutes();
const date = getDate().getDate();
const mounth = getDate().getMonth();
const year = getDate().getFullYear();

//const a = getDate().toLocaleString();  // 2018-2-27 01:38:54  не наш фомат)

console.log(`${hours}:${min} ${date}-${mounth}-${year}   fileName:${fileName}`);


