const fs = require('fs');

const foopath = require.resolve('../src/foo');
const footext = fs.readFileSync(foopath, 'utf-8');
console.log(footext);
