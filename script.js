// ==========================
// Data Navigasi untuk Pencarian
// ==========================
let data = [
  { title: "Home", link: "index.html" },
  { title: "Galeri", link: "galeri.html" },
  { title: "Artikel", link: "artikel.html" },
  { title: "Contact", link: "contact.html" },
  { title: "Profile", link: "profil.html" }
];

const searchInput = document.getElementById("search");
const resultBox = document.getElementById("result");

// Event input → tampilkan hasil suggestions
searchInput.addEventListener("input", function () {
  let keyword = this.value.toLowerCase();
  let result = data.filter(item => item.title.toLowerCase().includes(keyword));

  // Tampilkan hasil
  resultBox.innerHTML = result
    .map(r => `<li><a href="${r.link}">${r.title}</a></li>`)
    .join("");
});

// Event Enter → langsung redirect
searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let keyword = this.value.toLowerCase();
    let result = data.find(item => item.title.toLowerCase().includes(keyword));

    if (result) {
      window.location.href = result.link; // redirect ke halaman
    } else {
      alert("Halaman tidak ditemukan!");
    }
  }
});

// ==========================
// Galeri Modal Image Viewer
// ==========================
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImg");
const images = document.querySelectorAll(".gallery img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
