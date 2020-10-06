const R = require('ramda')

const sumOne = (x) => x + 1;
const squareOne = (x) => x * x;
const toStringOne = (x) => x.toString();
const pipeExample = R.pipe(sumOne,squareOne,toStringOne)


console.log(pipeExample(1))