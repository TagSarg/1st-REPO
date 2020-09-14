// alert ("Level 0 - connection");
// console.log ("Level 1 - output");
// prompt ("Level 2 - input");
// Declaration of variables:; 
/* 1.  let   -   declaration of ?local? variables, exists only after that row, 
                 may be a number, "text" or boolean....., տվյալ տողից առաջ եթե կանչենք, կբերի undefined
   2.  var   -   declaration of  ?global? Variables, exists for all rows, from the top, 
                 may be a number, "text" or boolean....., հայտարարությունը տանում է վերև, արժեքը` ոչ
   3.  const -
*/
// let MayVar1 = 'Level 3    let : declaration of ?local? variables, exists only after that row';
// console.log (MayVar1);
// console.log (MayVar2 = 3); // հայտարարված էր այս տողից հետո, բայց var-ով => ստացավ 3 արժեք ու արտահանվեց console-ում
// var MayVar2 = 'declaration of  ?global? Variables' ;
// console.log (MayVar2); // console-ում արտահանվեց վերջին տրված արժեքով, ոչ թե 3-ով, այսինքն՝ number-ը text դարձավ))

// null - ???;
// can՛t be defined - երբ փոփ-ը չի հայտարարված ընդհանրապես, օրինակ՝ եթե let-ով ենք հայտարարել;
// undefined - երբ փոփ-ը հայտարարել ենք, բայց արժեք չկա վերագրված;

// number + number = number     text + text = text     number + text = TEXT ( ex.  1 + "1" = "11")

// համեմատելիս == -ն համեմատում է միայն արժեքները՝ անտեսելով type-երը, օր՝ 
// console.log (1 == "1"); // console-ում բերեց true, բայց մեկը թիվ է, մյուսը՝ տեքստ
// === - ն համեմատում է նաև type-երը, այսինքն՝ true  կլինի միայն, եթե և արժեքը և type-ը նույնն են, օր․՝
// console.log (1 === "1"); // այս դեպքում պիտի բերի false

// MayVar1 = 1000;
// typeof MayVar1; // բերեց փոփ-ի type-ը՝ 


