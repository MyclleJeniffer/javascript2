let a=parseInt(prompt("Masukkan Jumlah Pembelian"));
let b=parseInt(prompt("Masukkan Uang Yang Dibayarkan"))
if(a>=1000000){
    diskon=0.25*a;
}
else if(a>=500000){
    diskon=0.1*a;
}
else{
    diskon=0;
}
let susuk=b-(a-diskon)
document.write("Diskon: "+diskon+"</br>");
document.write("Susuk: "+susuk);