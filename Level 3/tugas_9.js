/*
1)
        Database?
        Database merupakan beberapa informasi yang disimpan pada komputer secara sistematik, sehingga untuk mengetahu informasi data tersebut , 
        anda dapat memperolehnya dari suatu program. Sedangkan Database server merupakan sebuah program komputer yang memberikan layanan database untuk program komputer.

        SQL?
        SQL merupakan singkatan dari Structured Query Language. Sebenarnya SQL sendiri merupakan bahasa yang digunakan untuk mengatur/mengelola data 
        dalam database relasional. Munculnya SQL berawal dari peran Larry Ellison salah satu pendiri Oracle yang mengimplementasikan ide dari petinggi IBM Edgar F. Cobb. 
        Cobb mengeluarkan makalah pada tahun 70’an yang mendeskripsikan tentang database di mana objek dapat dikonstruksikan dan di-query memakai sesuatu yang disebut SQL. 
        Dia menggunakan SQL untuk membuat data (dalam objek yang disebut tabel) dan skema untuk data tersebut yang mendeskripsikan isian dalam beberapa kolom. Sedangkan untuk 
        setiap record dalam SQL database disebut ‘baris’.

        NoSQL?
        NoSQL atau Not Only SQL merupakan database yang tidak membutuhkan skema dan tidak memiliki relasi untuk setiap tabel. Semua bentuk dokumen dari NoSQL adalah JSON yang mudah dibaca dan dimengerti. 
        NoSQL banyak diminati karena memiliki performa yang tinggi dan bersifat non-relasional sehingga dapat memakai berbagai model data. Beberapa contoh dari database NoSQL yaitu MongoDB, 
        MarkLogic, Couchbase, CloudDB, dan Dynamo DB.
        Sejarahnya, NoSQL pada tahun 1998 digunakan sebagai istilah oleh Carlo Strozzi pada database opensource relasionalnya yang tidak mengekspos standar antarmuka SQL. Pada tahun 2009, 
        Eric Evans memperkenalkan kembali NoSQL, nama tersebut dipakai sebagai label atas meningkatnya jumlah pertumbuhan dari penyimpanan data non relasional dan terdistribusi yang 
        sering tidak memnuhi syarat-syarat dari sistem database relasional yaitu Atomicity, Consistency, Isolation dan Durability.



2)

        Saya pernah belajar database, Saya sudah belajar sampai membuat CRUD dengan SQL,php, html, dan css.

3)

        1. SELECT
        Untuk Menampilkan Data
        SELECT berfungsi untuk menampilkan data pada table secara kesuluruhan.

        Syntax Dasar :
        /** Syntax dasar SELECT 
        SELECT * FROM nama_tabel

        /** ATAU **/

        /** Syntax dasar SELECT
        SELECT nama_field, nama_field, nama_field FROM nama_tabel
        Contoh Penggunaan :
        SELECT * FROM customers;
        /** penggunaan tanda * (bintang) artinya digunakan memilih semua field 

        SELECT nama, kota FROM customers;
        /** nama dan kota merupakan sebuah nama_field 
        2. WHERE
        Untuk memfilter data/record
        where memiliki fungsi untuk memfilter data/record. pengunaan select dapat menampilkan keseluruhan data, 
        sedangkan dengan menambah perintah where setelah select maka data yang ditampilkan dapat difilter/disaring. 
        Dengan menggunakan where dapat menggunakan beberapa operator layaknya di bahasa pemograman seperti :

        Operator Sama Dengan =
        Operator Tidak Sama Dengan <>
        Operator Lebih Besar Dari >
        Operator Lebih Kecil Dari <
        Operator Lebih Besar Sama Dengan >=
        Operator Lebih Kecil Sama Dengan <=
        Bedasarkan jangkauan nilai BETWEEN
        Dan untuk memfilter bedasarkan pola huruf yang sama LIKE

        Syntax Dasar :
        SELECT * FROM nama_tabel WHERE nama_field = 'nilai'
        Contoh Penggunaan :
        Menampilkan customers yang memiliki id 1

        SELECT * FROM customers WHERE id = '1';
        /** query diatas untuk menampilkan customers yang memiliki id 1 
        Menampilkan customers yang tidak memiliki nama ‘bagus mantonafi’

        SELECT * FROM customers WHERE nama <> 'Bagus Mantonafi';
        /** query diatas untuk menampilkan customers yang memiliki nama selain 'bagus mantonafi' 
        Menampilkan customers yang bertempat tinggal di kota denpasar


        3. INSERT
        Memasukan Data/Record baru
        Untuk memasukan atau menambah record/data baru ke table

        Sytax Dasar :

        Tanpa mendefiniskan nama field

        INSERT INTO nama_tabel VALUES('nilai_masukan', 'nilai_masukan', 'dst');
        Dengan mendefinisikan nama field

        INSERT INTO nama_tabel('nama_field', 'nama_field', 'dst' ) VALUES('nilai_masukan', 'nilai_masukan', 'dst');

        INSERT INTO nama_tabel('nama_field', 'nama_field', 'dst' ) 
        VALUES('nilai_masukan', 'nilai_masukan', 'dst');

        4. UPDATE
        Memperbarui Data/Record
        Memperbarui atau memberbaiki record/data yang sudah ada pada tabel.

        UPDATE customers
        SET nama = 'Agix', kota = 'Gianyar'
        WHERE name = 'Hendry';

        5. DELETE
        Menghapus Data/Record
        Penggunaan DELETE digunakan untuk menghapus record pada tabel. baik itu satu data/record atau lebih.

        DELETE FROM customers
        WHERE negara = 'USA';

4. Berikan contoh cara "find all" dengan NoSQL MongoDB!

    Metode find () mengembalikan semua kemunculan dalam pemilihan. Parameter pertama dari metode find () adalah objek queri. 
    Dalam contoh ini kami menggunakan objek kueri kosong, yang memilih semua dokumen dalam koleksi.

        //1. contoh 1|| menggunakan nodejs 
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/";

        MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");

        // di bawah ini adalah contoh penggunaan "find all"

        dbo.collection("customers").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
        });

  
*/
