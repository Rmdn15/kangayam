// Ambil elemen ikon menu
const menuIcon = document.getElementById("menu-icon");
const blockSide = document.getElementById("block-sidemenu");
const shadowSide = document.getElementById("shadow-side");
const body = document.getElementById("body");

// Tambahkan event listener untuk klik
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("change");
  // Tambahkan atau hapus kelas "change"
  blockSide.classList.toggle("show");
  shadowSide.classList.toggle("on");
  body.classList.toggle("scrollDis");
});
