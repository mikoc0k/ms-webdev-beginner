// how closures work                                                                                                                               
function init(){
    var nama='mozilla';
    function displayName(){
        console.log(nama);
    }
    displayName();
}

init();

// contoh lain closure :
/*
function hitCounter(){
    let number = 0;
    function hitMe(){
        number++;
        return number;
    }
    return hitMe;
}

let getHit = hitCounter();
console.log(getHit());
console.log(getHit());
console.log(getHit());
*/
// versi alternatif

function hitCount(){
    let angka = 0;
    return function(){
        angka++;
        return angka;
    };
}

console.log(hitCount());

// DOM
// penting!
// gunakan script berikut :
<script src='./script.js' defer></script> // defer : js diload setelah html selesai diload
// atribut lain = async
// bs ganti 'defer' -> 'async' nb : html dan js diload bersama-sama

