"use strict";
/*
setTimeout(3000,()=> console.log('3 secs elapsed'));
*/

function display(){
    console.log('jancok 3 detik');
}

// setTimeout(3000,display); < wrong >
setTimeout(display,3000); //true

function greetingMessage(nama){
    const pesan = `helo penyepong ${nama}`;
    return pesan;
}

const jembot = greetingMessage('jembot');
console.log(jembot);

const napis = ['bahlil', 'opung', 'jokowi', 'prabowo'];
const panjangNapi = napis.map(napi => napi.length);
console.log(panjangNapi);

const kapitalNapi = napis.map(napi => napi.toUpperCase());
console.log(kapitalNapi);
(() => 'foobar')(); // iife

const simple = (a) => a > 15 ? a : 15;
console.log(simple(16));
console.log(simple(10));

const maxVal = (a,b) => a > b ? a : b;
console.log(maxVal(10,20));
console.log(maxVal(20,10));

const arrayVal = [1,3,77,41,16];
const sumVal = arrayVal.reduce((a,b) => a+b); // metod untuk akumulasi nilai array jadi satu nilai
console.log(sumVal)

const mapArray = arrayVal.map((nilai) => nilai + " jembut"); // manipulasi array jd bentuk yang baru
console.log(mapArray);

const filterGenap = arrayVal.filter((nilai) => nilai % 2 ===0); // ambil subset dari array
console.log(filterGenap);

const test = (1,9);
console.log(test)