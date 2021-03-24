// 1 segitiga
function printTriangle(num) {
    let hasil = "";
    for(let i = 0; i<num; i++){
      for(let j=0; j<=i; j++){
          hasil += "*";
      } 
      hasil+= '\n';
    }
    return console.log(hasil)
}

printTriangle(5)

// 2 persegi
let printSquare = (num) => {
    let hasil = "";
    for (let i=1; i<=num;i++){
        for (let j=1; j<=num;j++){
            if (i==1 || i==num || j==1 || j==num){
                hasil += "*";
            }
            else{
                hasil += " ";
            }
        }
      hasil += "\n";
    }
    return console.log(hasil);
}

printSquare(4);

/* 
Buatlah sebuah fungsi yang menerima parameter nilai, 
lalu memberikan output apakah nilai tersebut lulus atau tidak. 
KKM atau nilai minimal untuk lulus adalah 65 (65 termasuk lulus!)
*/

let gradeCheck = (nilai) => {
    if (nilai < 65 ){
        return(console.log("Tidak Lulus"))
    }
    else
    {
        return(console.log("Lulus"))
    }
}

gradeCheck(65);
gradeCheck(50);
gradeCheck(80);

/*
4. Terdapat sebuah array: let nilai = [50, 70, 90]
Buatlah sebuah fungsi untuk menambahkan data di akhir 
array nilai, berdasarkan parameter arr yang diberikan, 
yang mana arr juga merupakan array. Tampilkan semua isi 
array di akhir fungsi!
*/

let nilai =[50, 70, 90];

let addArray = (arr) => {

    nilai = nilai.concat(arr)
    return(console.log(nilai));
}

addArray([50,30]);
