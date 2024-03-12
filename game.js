// Random bir sayi aldik asagidan

let rasgeleSayi = Math.ceil(Math.random() * 20);
console.log(rasgeleSayi);

let mesaj = document.querySelector(".msg");
let skor = 10;
// indexten alabilirdir. Ama surekli kullanacagimiz iicn boyle daha iyi.
let enYuksekSkor = localStorage.getItem("top-score") || 0;
document.querySelector(".top-score").textContent = enYuksekSkor;

document.querySelector(".check").addEventListener("click", () => {
  let tahmin = document.querySelector(".guess").value;

  // console.log(tahmin);
  // ! Tahmin girmeden butona basildiysa
  if (!tahmin) {
    mesaj.textContent = "Lutfen bir sayi giriniz..";

    // ! Tahmin Dogruysa:
  } else if (tahmin == rasgeleSayi) {
    mesaj.textContent = "Tebrikler Bildiniz..";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = rasgeleSayi;
    document.querySelector(".check").disabled = true;

    // Top skor kontrolu

    if (skor > enYuksekSkor) {
      localStorage.setItem("top-score", skor);

      enYuksekSkor = skor;
      document.querySelector(".top-score").textContent = skor;
    } //   !Tahmin yanlissa
  } else {
    if (skor > 1) {
      skor--;
      document.querySelector(".score").textContent = skor;

      tahmin < rasgeleSayi
        ? (mesaj.textContent = "Arttir")
        : (mesaj.textContent = "Azalt");
    } else {
      // GAME OVER
      mesaj.textContent = "Oyunu Kaybettiniz!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

// Again butonuna basinca degerler baslangic degeri ile kurulsun

document.querySelector(".again").onclick = () => {
  document.querySelector("body").style.backgroundColor = "#2d3436";
  rasgeleSayi = Math.ceil(Math.random() * 20);
  console.log(`Yeni sayi`, rasgeleSayi);
  skor = 10;
  document.querySelector(".score").textContent = skor;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  mesaj.textContent = "Oyun Yeni oyuncu icin basliyor..";
  document.querySelector(".check").disabled = false;
};
// her bastigimda deger sifirlansin

document.querySelector(".check").onclick = () => {
  document.querySelector(".guess").value = "";
};

// Enter tusuna basildiginda check calisisn

document.addEventListener("keydown", (ent) => {
  // console.log(ent);
  if (ent.key == "Enter") {
    document.querySelector(".check").click();
  }
});

// document.querySelector(".check").addEventListener("click", () => {
//     tahmin = document.querySelector(".guess").value

//     const tahminSayi = parseInt(tahmin)

//     if (tahminSayi>=1 && tahminSayi <=20 && !isNaN(tahminSayi)) {
//         //Doğru sayı girilmişse oyunu devam ettir
//     } else {
//         mesaj.textContent = "Geçersiz sayı girdiniz (1 - 20 arasında bir sayı giriniz"
//         skor ++
//         document.querySelector(".guess").value = ""
//         document.querySelector("body").style.backgroundColor = "pink"
//     }
// })
