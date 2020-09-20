let a = prompt('enter data');
let b = 0;
if ( a.length = 5) {
    switch (a.charAt(0)) {
        case 'a':
        case 'e':
        case 'u':
        case 'i':
        case 'o':
            b += 4;
    break;
        case 'z':
            b +=5; 
    break;
        default:
            b-=1;
    break;
    }
    switch (a.charAt(1)) {
        case 'a':
        case 'e':
        case 'u':
        case 'i':
        case 'o':
            b += 4;
         break;
        case 'z':
            b +=5;  
        default:
            b-=1;
            break;
    }
    switch (a.charAt(2)) {
        case 'a':
        case 'e':
        case 'u':
        case 'i':
        case 'o':
            b += 4;
         break;
        case 'z':
            b +=5;  
        default:
            b-=1;
            break;
    }
    alert (b);
}
else {
    alert('min lenght of symbols must be more than 5')}