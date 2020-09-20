let num1 = parseInt(prompt('enter number 1'));
let num2 = parseInt(prompt('enter number 2'));
let min_value = num1 > num2 ? num2 : num1;
let max_value = num1 > num2 ? num1 : num2;
let count = 0;
let x = 0;
for (let i = min_value ; i <= max_value ; i++); {
    x += i;
}
console.log ('x ' +x);
console.log ('count ' +count);
console.log (x/(max_value-min_value+1));