function convertToF(celsius) {
    let fahrenheit = (celsius*1.8)+32;
    return fahrenheit;
  };

const readline = require('readline');

const r1 = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
 });


r1.question('What is the temperature in fahrenheit?', unit => {
  console.log(Math.round(convertToF(unit)));  
  r1.close();
});
