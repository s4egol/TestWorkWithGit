
const numberOne = process.argv[2];
const numberTwo = process.argv[3];

function sum(first, second){
    return +first + +second;
}

//function for output result of sum
function output(number1, number2, result){
    console.log(`[${number1} + ${number2} = ${result}]`)
}

function otherOutput(number1, number2, result){
    console.log(`Result of ${number1} + ${number2} - ${result}`);
}

output(numberOne, numberTwo, sum(numberOne, numberTwo));