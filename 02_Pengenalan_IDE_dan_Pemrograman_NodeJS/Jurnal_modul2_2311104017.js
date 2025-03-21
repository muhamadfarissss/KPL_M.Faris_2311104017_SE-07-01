const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nama Anda: ", (nama) => {
    console.log(`Selamat datang, ${nama}!`);

    const array = Array.from({ length: 50 }, (_, i) => i);
    array.forEach((num) => {
        let output = `${num}`;
        if (num % 2 === 0 && num % 3 === 0) {
            output += " #$#$";
        } else if (num % 2 === 0) {
            output += " ##";
        } else if (num % 3 === 0) {
            output += " $$";
        }
        console.log(output);
    });

function cekPrima(angka) {
    if (angka < 2) return false;
    for (let i = 2; i <= Math.sqrt(angka); i++) {
        if (angka % i === 0) return false;
    }
    return true;
}
    rl.question("Masukkan angka (1-10000): ", (inputAngka) => {
        const angka = parseInt(inputAngka);

        if (isNaN(angka) || angka < 1 || angka > 10000) {
            console.log("Input harus angka antara 1 sampai 10000!");
        } else {
            if (cekPrima(angka)) {
                console.log(`Angka ${angka} merupakan bilangan prima`);
            } else {
                console.log(`Angka ${angka} bukan merupakan bilangan prima`);
            }
        }  
        rl.close(); 
    });
});
