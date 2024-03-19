let jumlahbeli=parseInt(prompt("Masukkan Jumlah Beli : "));
if(jumlahbeli>=1000000){
    diskon=0.1*jumlahbeli;
}
else if(jumlahbeli>=500000){
    diskon=0.05*jumlahbeli;
}
else{
    diskon=0;
}
document.write("Jumlah beli "+jumlahbeli);
document.write("Diskon "+diskon);