alert ("Level 0 - connection");
console.log ("Level 1 - output");
prompt ("Level 2 - input");
//Declaration of variables:; 
/* 1.  let   -   declaration of ?local? variables, exists only after that row, 
                 may be a number, "text" or boolean....., 
   2.  var   -   declaration of  ?global? Variables, exists for all rows, from the top, 
                 may be a number, "text" or boolean....., 
   3.  const -
*/
 let MayVar1 = 'Level 3    let : declaration of ?local? variables, exists only after that row'; 
 // let-ով ֆունկցիայի ներսում հայտարարելիս, փոփ-ը գոյություն ունի միայն այդ ֆունկ-ի ներսում, իսկ var-ով հայտարարելիս նորից գնում է վերև
console.log (MayVar1);
console.log (MayVar2 = 3); 
var MayVar2 = 'declaration of  ?global? Variables'; 
console.log (MayVar2);

/* null - ???;   can՛t be defined,  undefined 
number + number = number     text + text = text     number + text = TEXT ( ex.  1 + "1" = "11")*/

//համեմատելիս == -ն համեմատում է միայն արժեքները՝ անտեսելով type-երը, օր՝
console.log (1 == "1"); // console-ում բերեց true, բայց մեկը թիվ է, մյուսը՝ տեքստ

// === - ն համեմատում է նաև type-երը, այսինքն՝ true  կլինի, եթե և արժեքը և type-ը նույնն են, օր․՝;
console.log (1 === "1"); // այս դեպքում պիտի բերի false;

// MayVar1 = 1000;
typeof MayVar1; // բերեց փոփ-ի type-ը

let a = parseInt(prompt('enter some integer num'));
let b = parseFloat(prompt('enter some float num'));
let c = b/10;
console.log(+ a + " is an integer num "  + c +  " is not an integer num ");





