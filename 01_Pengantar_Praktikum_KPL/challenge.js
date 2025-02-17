import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

input.question("Siapa nama kamu? ", (name) => {
    console.info(`Hello, ${name}!`)

    
    input.question("Jurusan Kamu? ", (jurusan) => {
        console.info(`Jurusan kamu adalah ${jurusan}!`)
    
        input.question("Universitas Kamu? ", (universitas) => {
            console.info(`Universitas kamu adalah ${universitas}!`)  
        
        input.question("Umur Kamu? ", (umur) => {
            console.info(`Umur kamu adalah ${umur}!`)
        
            input.close();
        })
    })
    })
})


