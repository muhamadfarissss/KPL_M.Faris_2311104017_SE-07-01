import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

input.question("Masukan Jumlah Barang: ", (jumlah) => {
    let totalHarga = 0;
    let count = 0;
    jumlah = parseInt(jumlah)

    const tanyaHarga = () => {
        if (count < jumlah){
            input.question(`Masukan Harga Barang ke- ${count + 1}: `, (harga) => {
                totalHarga += parseInt(harga);
                count++;
                tanyaHarga();
            })
        } else {
            let kategori = "tidak ada diskon";
            if (totalHarga > 100000){
                kategori = "Diskon Besar";
            } else if (totalHarga >= 50000) {
                kategori = " Diskon Sedang";
            }
            console.info(`\nTotal Harga: ${totalHarga}`);
            console.info(`jumlah Barang: ${jumlah}`);
            console.info(`Kategori Diskon: ${kategori}`);

            input.close();
        }
    }
    tanyaHarga();
})