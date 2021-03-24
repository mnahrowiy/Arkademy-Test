/*
1.Jelaskan cara membuat conditional (if else) sederhana di JavaScript dengan menggunakan comment JavaScript secara singkat

IF-> digunakan untuk menentukan kondisi pertama, dan akan di eksekusi jika kondisinya benar.
ELSE IF -> digunakan untuk menentukan kondisi kedua, apabila setelah pengujian pada kondisi yang pertama salah, dan akan di eksekusi jika kondisinya benar.
ELSE -> digunakan apabila semua kondisi sebelumnya salah, maka ELSE adalah opsional dari kondisi-kondisi lainnya dan akan di eksekusi.
contoh penulisan :

var jam = 22;

if(jam > 18) {
	console.log('Selamat malam');
} else {
	console.log('Selamat siang');
}
*/

// 2
function cekParameter(x) {
     if (x!=undefined){
         return console.log("ini parameternya " + x);
     }else{
         console.log("Tidak ada parameter yang diberikan!");
     }
}

cekParameter(2);
cekParameter("nahrowi");
cekParameter();

// 3
salam = (x) => {
    if (x>=0 && x<=10){
        return console.log('Selamat Pagi!');
    }else if(x<=14 ){
        return console.log('Selamat Siang!');
    }else if(x<=18 ){
        return console.log('Selamat Sore!');
    }else if(x<=24 ){
        return console.log('Selamat Malam!');
    }else{
        return console.log('Jam salah atau tidak ada')
    }
}

salam(23);

// 4
/*
(1)Operator ==, atau biasa disebut loose equality operator, hanya melakukan pengecekan pada nilai dari kedua operand.
(2)Operator ===, atau biasa disebut strict equality operator, melakukan dua pengecekan, yaitu pertama melakukan pengecekan terhadap tipe data kedua operand.
(3)Operator != merupakan kebalikan dari operator ==. Jika Operator == mengembalikan true jika var1 dan var2 bernilai sama, operator != akan mengembalikan true jika var1 bernilai berbeda dari var2.
(4)Operator !==, strict inequality operator, terlebih dahulu melakukan pengecekan terhadap tipe data dari kedua operand. Perbedaan nya hanyalah operator !== melakukan kebalikannya. 
    Pertama adaah pengecekan tipe data. Jika kedua operand memiliki tipe data yang berbeda maka operator !== akan langsung mengembalikan true.
*/