let eskrimVarian = ['soklat', 'stroberi','panila', 'ireng'];
eskrimVarian[2] = 'jembut moccha' // ganti panila dengan jembut
console.log(eskrimVarian);

// for-loop
for (let i = 0;i < eskrimVarian.length;i++){
    console.log(`${i}. ${eskrimVarian[i]}`);
}

//while-loop
let i = 0;
while (i < eskrimVarian.length){
    console.log(`${i}. ${eskrimVarian[i]}`);
    i++;
}

// copy operation array di javascript adalah shallow copy (copy dan orinya share properties yang sama / punya reference yg sama)
// tidak berlaku jika array berisi elemen primitif
// terlihat jika diisi objek
let jembod = [{otak: 1},{kelamin: 3},{umur: 77},];
let copyJembod = jembod;
console.log(jembod)
console.log(copyJembod);
jembod[1] = 123; // ori berubah
console.log(jembod)
console.log(copyJembod); // KW berubah
let copySuperJembod = Array.from(jembod); // swallow copy
console.log(copySuperJembod);

let buah = [];
// push method
buah.push('mangga', 'pisang', 'jambu', 'stroberi');
console.log(buah);
buah[5]=666; // buah hanya punya 4 element dg indeks 0 s.d 3
// dipush array ke-5. maka array -4 ditambahkan jg dengan kondisi kosong
console.log(buah);
console.log(buah[4]) // undefined

// beberapa method array memiliki spesial treatmen kpd slot kosong/ masih menghandle slot kosong
// contoh yang tidak spesial treatment
buah.forEach((item,index)=>{
    console.log(`${index}. ${item}`);
}) // index-4 kosong tidak dicetak

buah.reverse(buah);
console.log(buah); // elemen yang kosong ditampilkan (special treatment)