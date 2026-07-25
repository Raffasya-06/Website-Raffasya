function bukaGambar(src) {
  document.getElementById('popup').style.display = 'flex';
  document.getElementById('popup-img').src = src;
}

function tutupPopup() {
  document.getElementById('popup').style.display = 'none';
}

const teks = "Saya bisa bikin website keren untuk kamu!";
let i = 0;
function ketik() {
  if (i < teks.length) {
    document.getElementById('typing').innerHTML += teks.charAt(i);
    i++;
    setTimeout(ketik, 100);
  }
}
ketik();