/* 
1. Apa itu Array dan Object di JavaScript? Jelaskan secara singkat menggunakan comment JavaScript perbedaan Array dan Object di JavaScript

=> Array merupakan tipe data bentukan yang berisi banyak data. Di dalam JavaScript, array juga
termasuk ke dalam Object yang memiliki berbagai property dan method
=> Object adalah kumpulan dari properti, dan properti adalah sepasang hubungan antara nama (atau kunci) dan nilai. 
Nilai properti bisa berupa fungsi, Dalam hal ini properti itu disebut metode

*/

// 2. Membuat daftar hobi dengan array

let hobi = new Array('Programming', 'Sepak Bola', 'Berenang', 'Main Bola Voli', 'Baca Manga');

// 3. Buatlah variable saya yang merupakan Object dengan isi data diri kalian
let Saya = [
    {
        nama :'Muhamad Nahrowi',
        umur: 22,
        alamat: 'Kp. Empetan, RT/RW. 01/04, Pakuhaji, Tangerang', 
        hobi:hobi
    }
]

// 4

const sekolah = [
    {
        namaSekolah : "SDN Buaran Bambu III",
        jurusan:undefined,
        tahunMasuk: 2004,
        tahunKeluar: 2010
    },
    {
        namaSekolah : "SMPN 1 Pakuhaji",
        jurusan:undefined,
        tahunMasuk: 2010,
        tahunKeluar: 2013
    },
    {
        namaSekolah : "SMAN 11 Kab. Tangerang",
        jurusan: 'IPA',
        tahunMasuk: 2013,
        tahunKeluar: 2016
    },
    {
        namaSekolah : "Politeknik Negeri Jakarta",
        jurusan: 'Teknik Informatika',
        tahunMasuk: 2017,
        tahunKeluar: 2021
    }
]

// 5
const jawaban_petik_1 = 'Petik satu digunakan untuk mendeklarasikan string biasa, petik satu tidak dapat menampilkan isi variabel, tapi menampilkan nama variabel itu sendiri';
const jawaban_petik_2 = "Petik dua digunakana untuk deklarasi string dan juga dapat otomatis menampilkan langsung isi variabel jika didalamnya ada variabelnya";