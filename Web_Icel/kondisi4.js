let jabatan=prompt("Masukkan Jabatan Pegawai");
switch (jabatan) {
    case "Direktur":
        gaji=20000000;
        break;
    case "Manager":
        gaji=10000000;
    default:
        gaji=7500000;
        break;
}
document.write("Jabatan: "+jabatan+"</br>")
document.write("Gaji: "+gaji);