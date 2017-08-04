
const numberOne = process.argv[2];
const numberTwo = process.argv[3];

function sum(first, second){
    return +first + +second;
}

console.log(`[${numberOne} + ${numberTwo} = ${sum(numberOne, numberTwo)}]`)