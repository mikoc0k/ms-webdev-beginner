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