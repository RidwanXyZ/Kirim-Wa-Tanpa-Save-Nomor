const form = document.querySelector("#formulir");
var pesan = '';
var tujuan = '';

form.addEventListener('submit', (i) => {
  i.preventDefault()
  nama = form.nama.value;
  pesan = form.pesan.value;
  tujuan = form.no.value;
})


function kirim(){
  if (tujuan.length < 10) {
    alert("Dek, masukin yang bener lah kontol!!")
    return false
  } else {
    var link = `https://api.whatsapp.com/send?phone=${tujuan}&text=${pesan}`;
    window.open(link, '_blank')
  }
}
