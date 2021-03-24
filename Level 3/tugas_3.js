/*
1. Function adalah  kumpulan kode program yang dirancang untuk menyelesaikan 
sebuah tugas tertentu, dan merupakan bagian dari program utama. 
Function diperlukan untuk memecah alur program yang besar menjadi beberapa
program kecil agar mudah di kelola. Setiap function punya tugas dan fungsi masing-masing. 
Bisa saja di dalam sebuah function terdapat function lain, tergantung kompleksitas masalah 
yang ingin dipecahkan
*/
function salam(nama) {
    return console.log("Hallo "+nama+", selamat pagi!");
}
salam('nahrowi');

// 2. hasil penjumlahan

function tambah(bilanganPertama, bilanganKedua) {
    return console.log(bilanganPertama+bilanganKedua);
}
tambah(2,3);

// 3. Arrow function
penjelasanArrowFunction = () => {
    return console.log("merupakan fitur baru di ECMAScript 6. Ini merupakan alternatif penulisan dari function expression.\n Disebut sebagai arrow notation, karena kita menggunakan tanda panah (arrow) => untuk membuat function");
  };
penjelasanArrowFunction();

// 4. Arrow function perkalian
perkalian = (bilanganPertama, bilanganKedua) => {
    return console.log(bilanganPertama*bilanganKedua);
}
perkalian(3,5);