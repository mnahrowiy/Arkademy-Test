/*
1. Buatlah sebuah fungsi bernama arkademy, yang menerima parameter num sebagai angka, lalu mencetak angka dari 1 hingga num dengan ketentuan:
- jika angkanya bisa dibagi 3, maka cetak arka
- jika angkanya bisa dibagi 5, maka cetak demy
- jika angkanya bisa dibagi 3 & 5, maka cetak arkademy
*/
let arkademy = (num) =>
{
    for (let i = 1; i<=num; i++)
    {
        if (i%3==0 && i%5==0)
        {
            console.log("arkademy")
        }
        else if (i%3==0)
        {
            console.log("arka");
        }
        else if (i%5==0)
        {
            console.log("demy")
        }
        else 
        {
            console.log(i)
        }
    }
}

arkademy(5)

/*
2. Terdapat sebuah kata "Purwakarta". 
Buatlah fungsi untuk merubah huruf "a" di kata tersebut 
dengan huruf "o" sehingga outputnya menjadi "Purwokorto".
// Contoh output
ubahKata(o)
Kata sebelumnya: Purwakarta
Kata setelah diubah: Purwokorto
*/

kata = "Purwakarta"

let ubahKata = (huruf) => 
{
    for (let i = 1; i<=kata.length; i++)
    {
        kata = kata.replace("a",huruf);
    }
    return(console.log(kata))
}

ubahKata("o")

/*
3. Buatlah sebuah fungsi bernama cekParameter, 
yang menerima parameter lalu mengecek tipe 
parameter tersebut.
*/

let cekParameter = (param) =>
{
    if (typeof param == "string")
    {
        console.log("Parameter "+param+" adalah String!");
    }
    else if (typeof param == "number")
    {
        console.log("Parameter "+param+" adalah Number!");
    }
    else if (typeof param == "boolean")
    {
        console.log("Parameter "+param+" adalah Boolean!");
    }
    else if (typeof param == "array")
    {
        console.log("Parameter "+param+" adalah Array!");
    }
    else if (typeof param == "object")
    {
        console.log("Parameter "+param+" adalah Object!");
    }

}

cekParameter("nahrowi")
cekParameter(1)
cekParameter([1,2,9])
cekParameter({nama: 'Rudi', umur:20})

// let nama = "2";
// console.log(typeof nama);
