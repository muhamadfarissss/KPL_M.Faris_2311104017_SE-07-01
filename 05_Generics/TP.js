class HaloGeneric {
    sapaUser(input) {
        console.log(`Halo ${input}`);
    }
}
const halo = new HaloGeneric();
halo.sapaUser("Faris"); 


class DataGeneric {
    constructor(data) {
        this.data = data;
    }

    printData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

const nim = new DataGeneric("2311104017");
nim.printData();
