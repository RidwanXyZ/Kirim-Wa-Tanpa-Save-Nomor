const form = document.querySelector("#formulir");
var pesan = '';
var tujuan = '';

form.addEventListener('submit', (i) => {
  i.preventDefault()
  nama = form.nama.value;
  pesan = form.pesan.value;
  tujuan = form.no.value;
  kirim()
})
var link = `https://api.whatsapp.com/send?phone=${tujuan}&text=${pesan}`;

function kirim() {
  if (tujuan == undefined && tujuan.length <= 9 && tujuan.length >= 14) {
    window.open(link, '_blank')
  } else {
    alert('invalid phone number!')
  }
}