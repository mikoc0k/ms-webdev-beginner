// rest operator
function kolekNumber(... value){
    console.log(value);
}

kolekNumber(23,44,21,1,91);



// spread
function addNumber(a,b){
    console.log(a + b);
}

const arrayNumber = [1,99]
addNumber(...arrayNumber);


// clone array
const testArray = [2,77,41];
const copyArray = [41, ...testArray];
console.log(copyArray);


// merging object
const testObject = {jokowi: 1.5, prabowo: 1.6};
const newObject = {...testObject, prabowo: 1.7};
console.log(newObject);


// switch 

let biji = 2;
switch (biji) {
    case 1:
        console.log('satu biji');
        break;
    case 2:
        console.log('dua biji');
        break;
    default:
        console.log('tidak ada biji');
        break
}


// ternary exp
// condition? if True : if False
let firstNum = 12;
let secNum = 90;
let komparasiNum = firstNum > secNum ? firstNum : secNum;
console.log(komparasiNum);