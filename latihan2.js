// Superclass: Transportasi
class Transportasi {
    constructor(nama, kecepatan) {
        this.nama = nama;
        this.kecepatan = kecepatan; // dalam knot
        this._status = 'Tersedia'
    }

    getStatus(){
        this._status 
        return this._status
    }
    setstatustersedia(){
        this._status = 'Tersedia'
        return`${this.nama} ${this._status}`;
    }

    setstatustidaktersedia(){
        this._status = 'Tidak Tersedia'
        return`${this.nama} ${this._status}`;
    }

    informasiUmum() {
        return `Transportasi: ${this.nama}, Kecepatan: ${this.kecepatan} knot.`;
    }
}

// Subclass: TiketKapal
class TiketKapal extends Transportasi {
    constructor(nama, kecepatan, harga, kelas) {
        super(nama, kecepatan); // Memanggil constructor superclass
        this.harga = harga; // harga tiket
        this.kelas = kelas; // kelas tiket (Ekonomi, Bisnis, VIP)
    }

    informasiTiket() {
        return `Tiket ${this.kelas}: ${this.nama}, Harga: Rp${this.harga}, Kecepatan Kapal: ${this.kecepatan} knot.`;
    }
}

//Subclass: KapalBerlabuh
// Superclass: Kapal
class Kapal {
    constructor(nama, jenis) {
        this.nama = nama;
        this.jenis = jenis; // Jenis kapal (Kargo, Penumpang, dll.)
    }

    informasiKapal() {
        return `Kapal: ${this.nama}, Jenis: ${this.jenis}.`;
    }
}

// Subclass: KapalTurun
class KapalTurun extends Kapal {
    constructor(nama, jenis, lokasiBerlabuh) {
        super(nama, jenis); // Memanggil constructor superclass
        this.lokasiBerlabuh = lokasiBerlabuh; // Lokasi tempat kapal berlabuh
    }

    berlabuh() {
        return `${this.nama} (Jenis: ${this.jenis}) berlabuh di ${this.lokasiBerlabuh}.`;
    }
}

// Contoh Penggunaan
let kapalTurun1 = new KapalTurun("Kapal Ferry Ekspres", "Penumpang", "Pelabuhan Angke");
console.log(kapalTurun1.berlabuh());

// Contoh Penggunaan
let tiket1 = new TiketKapal("Kapal Ferry Ekspres", 50, 500000, "Ekonomi");
console.log(tiket1.informasiTiket());
console.log(tiket1.setstatustersedia());

// Subclass KapalKargo
class KapalKargo extends Kapal {
    constructor(nama, ukuran, kapasitasMuatan) {
        super(nama, "Kargo", ukuran);
        this.kapasitasMuatan = kapasitasMuatan;
    }

    // Override metode informasiKapal untuk menambahkan informasi kargo
    informasiKapal() {
        return `Kapal ${this.nama} adalah kapal kargo dengan kapasitas muatan ${this.kapasitasMuatan} ton.`;
    }
}

// Subclass Pelabuhan
class Pelabuhan extends Kapal {
    constructor(nama, jenis, ukuran, lokasi, jumlahDermaga, kapasitasKapal) {
        super(nama, jenis, ukuran);
        this.lokasi = lokasi;
        this.jumlahDermaga = jumlahDermaga;
        this.kapasitasKapal = kapasitasKapal;
    }

    // Override metode informasiKapal untuk menambahkan informasi pelabuhan
    informasiKapal() {
        return `Pelabuhan ${this.nama} di ${this.lokasi} memiliki ${this.jumlahDermaga} dermaga dan dapat menampung ${this.kapasitasKapal} kapal.`;
    }
}

// Contoh Penggunaan
let pelabuhan1 = new Pelabuhan("Pelabuhan Merak", "Pelabuhan", 11 , 15, 50);
console.log(pelabuhan1.informasiKapal());


