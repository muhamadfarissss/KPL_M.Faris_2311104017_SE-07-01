class DoorMachine {
    constructor() {
        this.state = 'Terkunci';
    }

    bukaPintu() {
        this.state = 'Terbuka';
        console.log('Pintu tidak terkunci');
    }

    kunciPintu() {
        this.state = 'Terkunci';
        console.log('Pintu terkunci');
    }
}

const pintu = new DoorMachine();
console.log('State awal:', pintu.state);
pintu.bukaPintu();
pintu.kunciPintu();