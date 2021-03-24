// 1 
var nama = "Muhamad Nahrowi";
var umur = 22;
var alamat = "Kp.Empetan, RT/RW.01/04, Ds.Buaran Bambu, Kec.Pakuhaji, Kab.Tangerang, Prov. Banten";
var hobi = "Bermain Sepak Bola";
var asalSekolah = "Politeknik Negeri Jakarta";
var jurusan = "D4-Teknik Informatika";
var alasanSukaProgramming = "Karena Saya merasa ada kepuasan tersendiri ketika membuat program dan memperbaiki sebuah error pada programming, Saya merasa programming adalah passion hidup saya.";

// 2
console.log("Nama saya adalah " + nama + ", asal sekolah/universitas " + asalSekolah + " jurusan " + jurusan + ". Alasan saya tertarik dengan programming adalah " + alasanSukaProgramming);

// 3
console.log("Perbedaan var, let dengan cost adalah var memiliki beberapa sifat, yang pertama reassign, yakni tidak terjadi error apabila duplikasi variabel, kemudian var memiliki Hoisting, yakni var akan mengangkat variabel yang sebelumnnya tidak dideklarasi, lalu block scope pada var menjadi global yang seharusnya variabel di dalam block scope menjadi private sehingga solusinya untuk menjadi private dengan mengubahnya menjadi function scope, Sedangkan let berkebalikan dari var, yakni let menolak ada duplikat variabel dengan petunjuk output type error, lalu let menolak Hoisting dengan hasil output ReferenceError, dan block scope pada let bersifat private sehingga tidak perlu menggunakan function untuk mengubahnya menjadi private. Kemudian const digunakan untuk variabel yang sifatnya tetap atau dengan kata lain nama dan isi dari variabel tidak bisa diubah, tapi jika dalam kasus const pada object maka value dan property bisa diubah.");