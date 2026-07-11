/* ======================================================
   SCRIPT.JS
   Berisi seluruh logika interaktif HortizonMart.
====================================================== */

/* ------------------------------------------------------
   DOM ELEMENTS
------------------------------------------------------ */
const productGrid = document.getElementById("productGrid");
const emptyMessage = document.getElementById("emptyMessage");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");

const productModal = document.getElementById("productModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalDescription = document.getElementById("modalDescription");
const modalOrderBtn = document.getElementById("modalOrderBtn");

/* Nomor WhatsApp tujuan pemesanan (format internasional, tanpa tanda +) */
const WHATSAPP_NUMBER = "6285727947178";

const header = document.getElementById("header");
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav__link");

/* ------------------------------------------------------
   STATE
------------------------------------------------------ */
let currentSearch = "";
let currentCategory = "semua";
let currentSort = "default";

/* ------------------------------------------------------
   RENDER PRODUCTS
   Mengambil data dari products.js, memfilter,
   mencari, mengurutkan, lalu menampilkan ke grid.
------------------------------------------------------ */
function renderProducts() {
  let filtered = [...products];

  // Filter berdasarkan kategori
  filtered = filterCategory(filtered);

  // Filter berdasarkan pencarian
  filtered = searchProduct(filtered);

  // Urutkan produk
  filtered = sortProducts(filtered);

  // Kosongkan grid sebelum render ulang
  productGrid.innerHTML = "";

  if (filtered.length === 0) {
    emptyMessage.hidden = false;
  } else {
    emptyMessage.hidden = true;
  }

  filtered.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card", "fade-in");

    card.innerHTML = `
      <div class="product-card__image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-card__body">
        <h3 class="product-card__name">${product.name}</h3>
        <p class="product-card__desc">${product.description}</p>
        <button class="btn btn--primary product-card__btn" data-id="${product.id}">
          Lihat Detail
        </button>
      </div>
    `;

    productGrid.appendChild(card);
  });

  // Pasang event listener ke setiap tombol "Lihat Detail"
  const detailButtons = document.querySelectorAll(".product-card__btn");
  detailButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.getAttribute("data-id"));
      openModal(id);
    });
  });
}

/* ------------------------------------------------------
   SEARCH PRODUCT
   Menyaring array produk berdasarkan kata kunci pencarian.
------------------------------------------------------ */
function searchProduct(productList) {
  if (currentSearch.trim() === "") return productList;

  const keyword = currentSearch.toLowerCase();
  return productList.filter((product) =>
    product.name.toLowerCase().includes(keyword)
  );
}

/* ------------------------------------------------------
   FILTER CATEGORY
   Menyaring array produk berdasarkan kategori terpilih.
------------------------------------------------------ */
function filterCategory(productList) {
  if (currentCategory === "semua") return productList;
  return productList.filter((product) => product.category === currentCategory);
}

/* ------------------------------------------------------
   SORT PRODUCTS
   Mengurutkan array produk berdasarkan pilihan sorting.
------------------------------------------------------ */
function sortProducts(productList) {
  const sorted = [...productList];

  switch (currentSort) {
    case "nameAsc":
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "nameDesc":
      sorted.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "priceAsc":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "priceDesc":
      sorted.sort((a, b) => b.price - a.price);
      break;
    default:
      break;
  }

  return sorted;
}

/* ------------------------------------------------------
   MODAL: OPEN
   Menampilkan detail produk pada modal popup.
------------------------------------------------------ */
function openModal(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;

  modalImage.src = product.image;
  modalImage.alt = product.name;
  modalName.textContent = product.name;
  modalDescription.textContent = product.description;

  // Susun link WhatsApp dengan pesan otomatis berisi nama produk
  const message = `Halo HortizonMart, saya ingin memesan ${product.name}. Apakah masih tersedia?`;
  modalOrderBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  productModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

/* ------------------------------------------------------
   MODAL: CLOSE
------------------------------------------------------ */
function closeModal() {
  productModal.classList.remove("active");
  document.body.style.overflow = "";
}

/* ------------------------------------------------------
   EVENT LISTENERS: SEARCH, FILTER, SORT
------------------------------------------------------ */
searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value;
  renderProducts();
});

categoryFilter.addEventListener("change", (e) => {
  currentCategory = e.target.value;
  renderProducts();
});

sortFilter.addEventListener("change", (e) => {
  currentSort = e.target.value;
  renderProducts();
});

/* ------------------------------------------------------
   EVENT LISTENERS: MODAL
------------------------------------------------------ */
modalOverlay.addEventListener("click", closeModal);
modalClose.addEventListener("click", closeModal);
modalCloseBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && productModal.classList.contains("active")) {
    closeModal();
  }
});

/* ------------------------------------------------------
   NAVBAR: HAMBURGER TOGGLE (MOBILE)
------------------------------------------------------ */
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

/* Tutup menu mobile saat salah satu link diklik */
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

/* ------------------------------------------------------
   NAVBAR: ACTIVE LINK ON SCROLL
   Menandai menu aktif sesuai section yang sedang dilihat.
------------------------------------------------------ */
const sections = document.querySelectorAll("section[id]");

function updateActiveNav() {
  const scrollPosition = window.scrollY + 120;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", updateActiveNav);

/* ------------------------------------------------------
   HEADER: SHADOW ON SCROLL
------------------------------------------------------ */
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = "0 4px 16px rgba(0,0,0,0.10)";
  } else {
    header.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
  }
});

/* ------------------------------------------------------
   FADE-IN ON SCROLL (INTERSECTION OBSERVER)
   Menambahkan animasi fade-in saat elemen masuk viewport.
------------------------------------------------------ */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

function observeFadeElements() {
  document.querySelectorAll(".fade-in").forEach((el) => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });
}

/* ------------------------------------------------------
   INITIALIZATION
   Dijalankan saat halaman pertama kali dimuat.
------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  observeFadeElements();
  updateActiveNav();
});
