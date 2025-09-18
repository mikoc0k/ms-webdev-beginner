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
let jembod = [{otak: 1},{kelamin: 3},{umur: 77}]
let copyJembod = jembod;
console.log(jembod)
console.log(copyJembod);
jembod[1] = 123; // ori berubah
console.log(jembod)
console.log(copyJembod); // kwe berubah
let copySuperJembod = Array.from(jembod); // swallow copy
console.log(copySuperJembod); 

