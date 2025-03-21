const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function cekHuruf(huruf) {
    const vokal = ['A', 'I', 'U', 'E', 'O'];
    const hurufKapital = huruf.toUpperCase();

    if (hurufKapital.length === 1 && hurufKapital >= 'A' && hurufKapital <= 'Z') {
        if (vokal.includes(hurufKapital)) {
            console.log(`Huruf ${hurufKapital} merupakan huruf vokal`);
        } else {
            console.log(`Huruf ${hurufKapital} merupakan huruf konsonan`);
        }
    } else {
        console.log("Input harus satu huruf kapital");
    }
}
function cetakBilanganGenap() {
    let angka = 2;
    for (let i = 1; i <= 5; i++) {
        console.log(`Angka genap ${i} : ${angka}`);
        angka += 2;
    }
}
rl.question("Masukkan satu huruf: ", (huruf) => {
    cekHuruf(huruf);

    console.log("\nCetak 5 bilangan genap:");
    cetakBilanganGenap();

    rl.close(); 
});
