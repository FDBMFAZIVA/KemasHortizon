/* ======================================================
   PRODUCTS.JS
   Data cadangan (fallback) jika Google Sheets gagal diakses
   (misal koneksi internet bermasalah atau link belum di-setup).
   Data utama & yang bisa diedit orang tua ada di Google Sheets.
====================================================== */

const fallbackProducts = [
  {
    id: 1,
    name: "Cabuca",
    price: 15000,
    stock: 25,
    image: "images/cabuca.jpg",
    description: "Cabuca segar pilihan, dipanen langsung dari lahan petani mitra."
  },
  {
    id: 2,
    name: "Kucai",
    price: 8000,
    stock: 35,
    image: "images/kucai.jpg",
    description: "Kucai segar dengan aroma khas, cocok untuk pelengkap masakan."
  },
  {
    id: 3,
    name: "Wortel",
    price: 11000,
    stock: 42,
    image: "images/wortel.jpg",
    description: "Wortel segar pilihan, renyah dan kaya vitamin A untuk kebutuhan harian."
  },
  {
    id: 4,
    name: "Siomak",
    price: 12000,
    stock: 20,
    image: "images/siomak.jpg",
    description: "Siomak segar hasil panen lokal, kualitas terjaga sejak dipetik."
  },
  {
    id: 5,
    name: "Brokoli",
    price: 22000,
    stock: 28,
    image: "images/brokoli.jpg",
    description: "Brokoli hijau segar, kaya serat dan cocok untuk berbagai olahan sehat."
  },
  {
    id: 6,
    name: "Tomat Hijau",
    price: 13000,
    stock: 30,
    image: "images/tomat-hijau.jpg",
    description: "Tomat hijau segar dengan rasa asam segar, cocok untuk sambal dan acar."
  },
  {
    id: 7,
    name: "Jagung Manis",
    price: 10000,
    stock: 45,
    image: "images/jagung-manis.jpg",
    description: "Jagung manis segar, dipanen tepat waktu untuk rasa manis yang maksimal."
  },
  {
    id: 8,
    name: "Kentang",
    price: 15000,
    stock: 60,
    image: "images/kentang.jpg",
    description: "Kentang berkualitas premium dengan tekstur pulen, hasil panen lokal Merbabu."
  },
  {
    id: 9,
    name: "Kolbis",
    price: 8000,
    stock: 33,
    image: "images/kolbis.jpg",
    description: "Kolbis segar dan renyah, cocok untuk lalapan maupun masakan tumis."
  },
  {
    id: 10,
    name: "Baby Corn (Putren)",
    price: 18000,
    stock: 24,
    image: "images/baby-corn.jpg",
    description: "Baby corn atau putren segar, tekstur renyah dan cocok untuk tumisan."
  },
  {
    id: 11,
    name: "Labu Siam (Jipang)",
    price: 6500,
    stock: 48,
    image: "images/labu-siam.jpg",
    description: "Labu siam atau jipang segar dan renyah, cocok untuk sayur bening maupun tumisan."
  },
  {
    id: 12,
    name: "Daun Bawang (Onclang)",
    price: 9000,
    stock: 38,
    image: "images/daun-bawang.jpg",
    description: "Daun bawang atau onclang segar, aroma kuat cocok sebagai pelengkap masakan."
  },
  {
    id: 13,
    name: "Pakcoy (Sawi Sendok)",
    price: 8500,
    stock: 32,
    image: "images/pakcoy.jpg",
    description: "Pakcoy atau sawi sendok segar dengan tekstur renyah, cocok untuk tumisan."
  },
  {
    id: 14,
    name: "Timun Hijau",
    price: 7000,
    stock: 50,
    image: "images/timun-hijau.jpg",
    description: "Timun hijau segar dan renyah, cocok untuk lalapan maupun acar."
  },
  {
    id: 15,
    name: "Kacang Kapri",
    price: 20000,
    stock: 22,
    image: "images/kacang-kapri.jpg",
    description: "Kacang kapri segar dengan rasa manis renyah, cocok untuk tumisan sayur."
  },
  {
    id: 16,
    name: "Kacang Panjang",
    price: 9500,
    stock: 40,
    image: "images/kacang-panjang.jpg",
    description: "Kacang panjang segar, cocok untuk sayur asem maupun tumisan sehari-hari."
  },
  {
    id: 17,
    name: "Tomat Merah",
    price: 12000,
    stock: 55,
    image: "images/tomat-merah.jpg",
    description: "Tomat merah segar berkualitas, dipanen langsung dari kebun petani mitra."
  },
  {
    id: 18,
    name: "Buncis",
    price: 13000,
    stock: 33,
    image: "images/buncis.jpg",
    description: "Buncis segar dengan tekstur renyah, cocok untuk tumisan maupun sayur sop."
  },
  {
    id: 19,
    name: "Sawi Bakso Caisim",
    price: 8000,
    stock: 30,
    image: "images/sawi-bakso-caisim.jpg",
    description: "Sawi caisim segar, cocok untuk pelengkap bakso, mi ayam, maupun tumisan."
  },
  {
    id: 20,
    name: "Bunga Kol",
    price: 16000,
    stock: 26,
    image: "images/bunga-kol.jpg",
    description: "Bunga kol segar dan putih bersih, cocok untuk sup maupun tumisan."
  },
  {
    id: 21,
    name: "Selada",
    price: 9500,
    stock: 27,
    image: "images/selada.jpg",
    description: "Selada segar dengan daun hijau renyah, cocok untuk salad dan pelengkap burger."
  },
  {
    id: 22,
    name: "Edamame",
    price: 25000,
    stock: 18,
    image: "images/edamame.jpg",
    description: "Edamame segar kaya protein, cocok untuk camilan sehat atau pelengkap salad."
  },
  {
    id: 23,
    name: "Sawi Putih",
    price: 8500,
    stock: 30,
    image: "images/sawi-putih.jpg",
    description: "Sawi putih segar dengan tekstur lembut, cocok untuk sup dan tumisan."
  },
  {
    id: 24,
    name: "Cabe Merah Keriting",
    price: 48000,
    stock: 28,
    image: "images/cabe-merah-keriting.jpg",
    description: "Cabe merah keriting segar, pedas pas dan cocok untuk sambal maupun bumbu masakan."
  },
  {
    id: 25,
    name: "Cabe Rawit Merah",
    price: 55000,
    stock: 24,
    image: "images/cabe-rawit-merah.jpg",
    description: "Cabe rawit merah segar dengan tingkat kepedasan tinggi, favorit pecinta pedas."
  }
];
