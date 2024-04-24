const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter First No.? : ", (num1) => {
  rl.question("Enter Second No.? : ", (num2) => {
    rl.question("Enter Operation (+,-,*,/) : ", (operation) => {
      let result;
      const random = Math.random();
      let op;
      const obj = {
        "+": "-",
        "-": "+",
        "*": "/",
        "/": "**",
      };
      if (random < 0.1) {
        result = `Result : ${eval(`${num1}${operation}${num2}`)}`;
      } else {
        op = obj[operation];
        result = `Result : ${eval(`${num1}${op}${num2}`)}`;
      }

      console.log(`Your Ans is : ${result} `);
      rl.close();
    });
  });
});
