let cekBBI = {
    beratBadan: null,
    tinggiBadan: null,
    ket: null,
    hasil: null
};

function isAngka(angka) {
    var test = +angka;
    if (test == NaN || test == 0) {
        return false;
    }
    return true;
}

function validasiData() {
    // tangkap nilai berat badan yang diinputkan
    cekBBI.beratBadan = document.getElementById("beratB").value;
    // tangkap nilai tinggi badan yang diinputkan
    cekBBI.tinggiBadan = document.getElementById("tinggiB").value;

    if (isAngka(cekBBI.beratBadan) && isAngka(cekBBI.tinggiBadan)) {
        prosesHitung();
    } else {
        alert("Berat / tinggi belum dimasukkan");
    }
}

function prosesHitung() {
    // ubah input nilai tinggi badan tadi jadi centimeter
    tinggiBadanM = cekBBI.tinggiBadan / 100;

    // kemudian cukup ambil 2 angka di belakang koma
    tinggiBadanCm = tinggiBadanM.toFixed(2);

    // kemudian kuadratkan nilai tinggi badan
    tinggiBadanP2 = tinggiBadanCm * tinggiBadanCm;

    //setelah itu cukup ambil 2 angka di belakang koma setelah dipangkatkan
    tinggiBadanFix = tinggiBadanP2.toFixed(2);

    //kemudian bagi berat badan dengan tinggi badan yang sudah di kuadratkan tadi
    cekBBI.hasil = cekBBI.beratBadan / tinggiBadanFix;

    // terakhir cukup ambil 2 angka dibelakang koma setelah hasil bagi berat badan dan tinggi badan
    hasilBBI = cekBBI.hasil.toFixed(2);

    // untuk mendapatkan ket, cukup gunakan if else
    if (cekBBI.hasil < 17) {
        cekBBI.ket = "Anda kekurangan Berat Badan Berat";
    } else if (cekBBI.hasil >= 17 & cekBBI.hasil <= 18.3) {
        cekBBI.ket = " Anda kekurangan Berat Badan Ringan";
    } else if (cekBBI.hasil >= 18.4 & cekBBI.hasil <= 21) {
        cekBBI.ket = "Normal";
    } else if (cekBBI.hasil >= 21.1 & cekBBI.hasil <= 27) {
        cekBBI.ket = " Anda kelebihan Berat Badan Ringan";
    } else if (cekBBI.hasil >= 27.1 & cekBBI.hasil <= 30) {
        cekBBI.ket = "Anda kelebihan Berat Badan Sedang";
    } else if (cekBBI.hasil > 30) {
        cekBBI.ket = "Anda kelebihan Berat Badan Berat";
    }

    //tampilkan pesan pengukuran berat badan ideal berhasil
    alert("Pengecekan Berhasil");
    //kemudian kosongkan form inputan berat dan tinggi
    document.getElementById("beratB").value = null;
    document.getElementById("tinggiB").value = null;

    const history = {
        beratBadan: cekBBI.beratBadan + " Kg",
        tinggiBadan: cekBBI.tinggiBadan + " Cm",
        hasil: hasilBBI,
        ket: cekBBI.ket
    }
    putHistory(history);
    renderHistory();
}

document.getElementById("BtnHitung").addEventListener("click", validasiData)