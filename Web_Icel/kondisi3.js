let nilaifisika=parseInt(prompt("Masukkan Nilai Fisika:"));
let nilaimat=parseInt(prompt("Masukkan Nilai Matematika:"));
let nilaibing=parseInt(prompt("Masukkan Nilai Bahasa Inggris:"));
let ratarata=(nilaifisika+nilaimat+nilaibing)/3;
if(ratarata>=90){
    nilai="A"
}
else if(ratarata>=80){
    nilai="B"
}
else if(ratarata>=70){
    nilai="C"
}
else{
    nilai="D"
}
document.write("Rata-Rata "+ratarata+"</br>")
document.write(" Nilai "+nilai)