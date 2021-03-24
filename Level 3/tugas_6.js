/*
1. Apa itu perulangan
Perulangan atau dalam bahasa inggris disebut sebagai loop, adalah struktur kode program yang
digunakan untuk mengulang beberapa baris perintah. Dengan menggunakan perulangan, sangat
memudahkan untuk menjalankan perintah yang sama secara terus menerus

*/
// for
for (let i = 0; i < 5; i++) {
    console.log("Hello javascript!");
    
}

// for in
warna = ["kuning", "Merah","Hijau"];
for (x in warna){
    console.log(x);
}

// for of

let buah = ["pisang", "apel", "nanas"];

for (let x of buah) {
    console.log(x)
}

// while
let i =0;
while (i<5){
    console.log("Hi semua");
    i++
}

// do while
let j = 1;
do{
    console.log("Hello nahrowi!");
    j++;
}while(j<4);

// 2
function printNumber(num) {
    for(let z=0; z<num; z++){
        console.log(z);
    }
}
printNumber(4);

// 3

function cekGanjilGenap(num){
     if (num%2==0){
        console.log("Genap");
     }else{
        console.log("Ganjil");
     }
}
cekGanjilGenap(4);


// 4
function deretGanjilGenap(num){
    for(let x =1; x<=num; x++){
        if (x%2==0){
            console.log(x + " adalah genap");
        }else{
            console.log(x + " adalah ganjil");
        }
    }
}
deretGanjilGenap(3);

// 5

const kegiatan = [
    ['bangun', 6],
    ['mandi', 7],
    ['belajar', 8],
    ['sarapan', 9],
    ['membaca', 10]
// dan seterusnya
];

for(let i = 0; i < kegiatan.length; i++){
    console.log(`Pada pukul ${kegiatan[i][1]} Saya ${kegiatan[i][0]}`)
}
 