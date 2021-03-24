// 1
// Ini comment satu baris
/* Tipe data pada  javascript terdiri darai 2 kelompok, yakni tipe data primitif dan tipe data object
Tipe data primitif adalah tipe data sederhana yang hanya memiliki 1 nilai.
Terdapat 6 tipe data primitif
1. Number   -> Tipe data yang berisi angka, angka bulat dan pecahan, di dalam JavaScript, angka bulat dan pecahan digabung ke dalam tipe data number.
2. String   -> Tipe data yang berisi text, seperti "Hello World"
3. Boolean  -> Tipe data yang memiliki 2 nilai, yakni true dan false, tipe data ini digunakan untuk membuat alur logika program. 
4. Null     -> Tipe data ini hanya punya 1 nilai, yakni null, null adalah keadaan dimana data itu “kosong”. 
5. Undefine -> menyatakan data yang tidak terdefinisi.
6. Symbol   -> Baru diperkenalkan sejak JavaScript ECMAScript 2015. 
               Simbol memiliki ciri khas (unik) dan nilai primitif tetap (immutable) serta dapat digunakan sebagai kunci dari properti sebuah Objek.

Kemudian tipe data object merupakan tipe data khusus yang perilaku dan isinya bermacam-macam.
Tipe data object pada javascript sebagai berikut:
1. Array
    -> Tipe data yang berisi kumpulan tipe data lain.
2. Date
    -> merupakan object khusus di dalam JavaScript untuk memproses tanggal dan waktu. Object ini memiliki berbagai method yang bisa kita gunakan.
3. RegExp
    ->  suatu mekanisme pencocokan pola (pattern matching), yang dibuat menggunakan karakter-karakter khusus. Fungsinya sangat beragam, 
        mulai dari memeriksa apakah sebuah inputan sudah sesuai atau belum (test), untuk membuat fitur pencarian (search), atau penggantian string (replace)
4. Map dan WeakMap*
    -> Map adalah kumpulan pasangan nilai-kunci yang teratur. Map mirip dengan objek. Namun, ada beberapa perbedaan antara maps dan objek.
    -> WeakMap adalah bagian kecil dari map. Kunci direferensikan dengan lemah, sehingga dapat menjadi non-primitif saja. Jika tidak ada referensi ke kunci objek, maka akan menjadi subjek pengumpulan sampah.
    -> WeakMap hanya menerima objek sebagai kunci sedangkan Map, selain objek, menerima tipe data primitif seperti string, angka, dll.
5. Set dan WeakSet*
    -> Set adalah kumpulan nilai unik yang tidak berurutan. Struktur data ini dapat berisi nilai primitif dan tipe objek.
    -> Weakset menahan objek dengan lemah, itu berarti objek yang disimpan dalam WeakSet akan melakukan pengumpulan sampah, jika tidak direferensikan. WeakSets tidak dapat diulang dan tidak memiliki metode get.
*/


// 2
// Tipe data String di javascript.
const nama_depan = "Muhamad";
const nama_belakang = "Nahrowi";
let hobi = "Bermain sepak bola";


// Tipe data Numbers di javascript
let umur = 22;
const pi = 3.14;
let suhu = -23;


// Tipe data Boolean di javascript
let tinggi = true;
let pendek = false;
const bersikap_jujur = true;


// Tipe data Null di javascript
let jumlah_buah_jeruk = null;
let jumlah_buah_apel = null;
const jumlah_buah_nanas = null;


// Tipe data undefine di javascript
let ayam;
console.log(ayam); // undefine
let bebek;
console.log(bebek); // undefine
let semangka;
console.log(semangka); // undefine


// Tipe data symbol di javascript
let symbol1 = Symbol('symbol1');
let symbol2 = Symbol('symbol2');
// Symbol digunakan sebagai property keys
const MY_KEY = Symbol();
let obj = {};
obj[MY_KEY] = 234;
console.log(obj[MY_KEY]); // 234



// Tipe Data Objek

// Tipe data object array di javascript
let buah = ['Apel', 'pisang']
let hobi = ['mancing', 'sepak bola']
let acak = ['anggur', 25, 'keju', 3.14]


// Tipe data object date di javascript
let today = new Date();
const tahun_akhir_2020 = new Date('December 31, 20220');
let tahun_akhir_2020 = new Date('December 31, 20220 12:30:00');


// Tipe data RegExp di javascript
let buah = new RegExp("pisang");
const hobi = new RegExp("mancing");
let kesukaan = "Saya suka makan buah pisang, apel, dan pepaya";
console.log(/apel/.test(kesukaan)) // true


// Tipe data object Map dan WeakMap di javascript
// Map
let nahrowi = {nama: "Nahrowi"};
let hobi = new Map();
hobi.set(nahrowi, 'mancing');

let budi = {nama: "Budi"};
let hobi = new Map();
hobi.set(budi, 'masak');


let fajri = {nama: "Fajri"};
let hobi = new Map();
hobi.set(fajri, 'bernyanyi');


// WeakMaps
let pisang = new WeakMap();
let warna = {};
pisang.set(warna, "kuning");

let apel = new WeakMap();
let warna = {};
apel.set(warna, "merah");

let semangka = new WeakMap();
let warna = {};
semangka.set(warna, "hijau");

// Tipe data object  Set dan WeakSet di javascript
// Set
let Angka = new Set([1, 2, 3]);
console.log(Angka);
let Buah = new Set(['semangka', 'anggur', 'pisang', 'semangka']);
console.log(Buah);
let Nama = new Set(['Nahrowi','Budi'])
console.log(Nama);




// WeakSet
let nahrowi = new WeakSet();
let sapaan = {
    pesan: "Hello Nahrowi",
    kabar: "Apa Kabar?"
}
nahrowi.add(sapaan);
console.log(nahrowi);

let budi = new WeakSet();
let sapaan = {
    pesan: "Hello Budi",
    kabar: "Apa Kabar?"
}
budi.add(sapaan);
console.log(budi);

let fajri = new WeakSet();
let sapaan = {
    pesan: "Hello Fajri",
    kabar: "Apa Kabar?"
}
fajri.add(sapaan);
console.log(fajri);


// 3
const angkaPertama = 15;
const angkaKedua = 7;
let hasil;

// Penjumlahan
hasil = angkaPertama + angkaKedua;
console.log(hasil);

// Pengurangan
hasil = angkaPertama - angkaKedua;
console.log(hasil);

// Pembagian
hasil = angkaPertama / angkaKedua;
console.log(hasil);

// Perkalian
hasil = angkaPertama * angkaKedua;
console.log(hasil);

