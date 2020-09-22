// Task 1 / Lesson 4

// let My_Str = prompt('Enter a text');
// let My_New_Str = "";
// for (let i = My_Str.length ; i >= 0; i--) 
// {
//     My_New_Str = My_New_Str + My_Str.charAt(i)
// };
// alert (My_New_Str);


// Task 2 / Lesson 4

let num1 = parseInt(prompt('enter the first number'));
let num2 = parseInt(prompt('enter the second number'));
let maxNum = num1>num2 ? num1 : num2;
let minNum = num1>num2 ? num2 : num1;
for (let i = minNum ; i < maxNum ; i++) {
        for(let j = 2; j<i ; j++) {
        if (i % j == 0) {alert ("there is no prime numb)}
                break}
 
}



























// let num1 = parseInt(prompt('enter number 1'));
// let num2 = parseInt(prompt('enter number 2'));
// let min_value = num1 > num2 ? num2 : num1;
// let max_value = num1 > num2 ? num1 : num2;
// let count = 0;
// let x = 0;
// for (let i = min_value ; i <= max_value ; i++); {
//     x += i;
// }
// console.log ('x ' +x);
// console.log ('count ' +count);
// console.log (x/(max_value-min_value+1));

