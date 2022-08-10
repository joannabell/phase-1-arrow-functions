/*index.js
1) has a function expression called divide
2) divide divides 2000 by 100
3) has an arrow function called square
4) square arrow function takes one parameter and multiplies it times itself
5) has an arrow function called add
6) add arrow function takes two parameters and adds them together */

function divide() {
    return 2000 / 100;    
}

/*const square = (num) => {
    return num * num;
}*/

const square = n => n * n;

const add = (num1, num2) => {
    return num1 + num2;
}
