const argParam = process.argv[2];

function getMessage(name){
    return `Good morning ${name}!`;
}

console.log(getMessage(argParam));