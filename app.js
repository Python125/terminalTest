function convertToC(fahrenheit) {
    let celsius = (fahrenheit - 32)/1.8;
    return celsius;
  };

const readline = require('readline');

const r1 = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
 });


r1.question('What is the temperature in celsius?', unit => {
  console.log(Math.round(convertToC(unit)));  
  r1.close();
});
