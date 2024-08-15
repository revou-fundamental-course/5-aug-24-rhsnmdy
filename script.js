// ini js
function hitungBmi() {
    var angka1 = parseFloat(document.getElementById("berat-badan").value);
    var angka2 = parseFloat(document.getElementById("tinggi-badan").value);

//Konversi tinggi badan ke meter 
    var konversiKeMeter = angka2 / 100;

    var hasil = angka1 / (konversiKeMeter ** 2);
//meng-outputkan hasil perhitungan ke html
    var printOutput = document.getElementById("hasil-output");
    printOutput.innerHTML = hasil.toFixed(2);

// validasi form
    if (angka1 && angka2){
        
    }
    else {
        var printOutput = document.getElementById("hasil-output");
        printOutput.innerHTML = "Harap lengkapi semua bidang";

//program if else untuk menentukan kategori badan ideal dan tidak ideal
    }
    if (hasil <= 18.5) {
        var status = document.getElementById("keterangan");
        status.innerHTML = "Kekurangan Berat badan";
    }
    else if (hasil <= 24.9 ) {
        var status = document.getElementById("keterangan");
        status.innerHTML = "Normal (ideal)";
    }
    else if (hasil <= 29.9) {
        var status = document.getElementById("keterangan");
        status.innerHTML = "Kelebihan berat badan";
    }
    else if (hasil > 30.0) {
        var status = document.getElementById("keterangan");
        status.innerHTML = "Kegemukan (obesitas)"
    }


// program untuk saran untuk kondisi BMI 
    if (hasil <= 18.5) {
        var status1 = document.getElementById("program-diet");
        status1.innerHTML = "Ubah pola makan dan tingkatkan berat badan dengan olahraga";
    }
    else if (hasil <= 24.9 ) {
        var status1 = document.getElementById("program-diet");
        status1.innerHTML = "Pertahankan berat badan ideal anda degan rutin olahraga dan perhatikan menu makanan ";
    }
    else if (hasil <= 29.9) {
        var status1 = document.getElementById("program-diet");
        status1.innerHTML = "Anda bisa mengurangi berat badan anda dengan cara defisit kalori dan rutin latihan,";
    }
    else if (hasil > 30.0) {
        var status1 = document.getElementById("program-diet");
        status1.innerHTML = "Anda dalam kategori obes.Cara terbaik untuk menurunkan berat badan adalah dengan mengatur berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga"
    }



    return false;
}