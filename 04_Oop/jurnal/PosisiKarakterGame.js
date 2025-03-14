class PosisiKarakterGame {
    constructor() {
        this.state = "Berdiri";
    }

    tombolS() {
        if (this.state === "Berdiri") this.state = "Jongkok";
        else if (this.state === "Jongkok") this.state = "Tengkurap";
        console.log(`Posisi sekarang: ${this.state}`);
    }

    tombolW() {
        if (this.state === "Jongkok") this.state = "Berdiri";
        else if (this.state === "Berdiri") this.state = "Terbang";
        console.log(`Posisi sekarang: ${this.state}`);
    }

    tombolX() {
        if (this.state === "Terbang") this.state = "Jongkok";
        console.log(`Posisi sekarang: ${this.state}`);
    }
}

const karakter = new PosisiKarakterGame();
karakter.tombolS();  
karakter.tombolW();  
karakter.tombolW(); 
karakter.tombolX();  
