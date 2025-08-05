const rumusMatematika = [

  // Materi SD atau MI
  {
    judul: "Penjumlahan Bilangan Bulat",
    rumus: "a + b",
    keterangan: "a dan b adalah bilangan bulat",
    contoh: "Jika a = 5, b = 3, maka 5 + 3 = 8"
  },
  {
    judul: "Pengurangan Bilangan Bulat",
    rumus: "a - b",
    keterangan: "a dan b adalah bilangan bulat",
    contoh: "Jika a = 10, b = 4, maka 10 - 4 = 6"
  },
  {
    judul: "Keliling Persegi",
    rumus: "K = 4 × s",
    keterangan: "s = sisi",
    contoh: "Jika s = 6 cm, maka K = 4 × 6 = 24 cm"
  },
  {
    judul: "Keliling Persegi Panjang",
    rumus: "K = 2 × (p + l)",
    keterangan: "p = panjang, l = lebar",
    contoh: "Jika p = 8 cm, l = 3 cm, maka K = 2 × (8 + 3) = 22 cm"
  },
  {
    judul: "Volume Prisma Segitiga",
    rumus: "V = ½ × a × t × T",
    keterangan: "a = alas, t = tinggi segitiga, T = tinggi prisma",
    contoh: "Jika a = 4 cm, t = 3 cm, T = 10 cm, maka V = 0.5 × 4 × 3 × 10 = 60 cm³"
  },

  // Materi SMP atau MTs
  {
    judul: "Skala Peta",
    rumus: "Skala = jarak pada peta / jarak sebenarnya",
    keterangan: "Ukuran harus dalam satuan yang sama",
    contoh: "Jika jarak pada peta = 2 cm, dan jarak sebenarnya = 100 km, maka skala = 2:10.000.000"
  },
  {
    judul: "Persentase",
    rumus: "Persentase = (bagian / keseluruhan) × 100%",
    keterangan: "Digunakan dalam diskon, bunga, dsb.",
    contoh: "Jika diskon 20% dari Rp200.000, maka diskon = 20/100 × 200.000 = Rp40.000"
  },
  {
    judul: "Rata-Rata",
    rumus: "Rata-rata = jumlah data / banyak data",
    keterangan: "Digunakan untuk mencari nilai tengah",
    contoh: "Jika data: 80, 90, 70 → (80+90+70)/3 = 80"
  },
  {
    judul: "Volume Limas",
    rumus: "V = ⅓ × Luas alas × tinggi",
    keterangan: "Bentuk alas bisa persegi, segitiga, dll.",
    contoh: "Jika alas segitiga L = 24 cm² dan tinggi limas 9 cm, maka V = ⅓ × 24 × 9 = 72 cm³"
  },

  // Materi SMA atau SMK
  {
    judul: "Aturan Cosinus",
    rumus: "c² = a² + b² - 2ab cos C",
    keterangan: "Digunakan untuk segitiga sembarang",
    contoh: "Jika a = 5, b = 7, ∠C = 60°, maka c² = 25 + 49 - 2×5×7×cos60 = 74 - 35 = 39 → c ≈ 6.24"
  },
  {
    judul: "Limit Fungsi",
    rumus: "lim x→a f(x)",
    keterangan: "Mendekati suatu nilai x",
    contoh: "lim x→2 (x² - 4)/(x - 2) = lim x→2 [(x - 2)(x + 2)]/(x - 2) = 4"
  },
  {
    judul: "Integral Tak Tentu",
    rumus: "∫ xⁿ dx = (xⁿ⁺¹)/(n+1) + C",
    keterangan: "n ≠ -1, C = konstanta integrasi",
    contoh: "∫ x² dx = x³ / 3 + C"
  },
  {
    judul: "Barisan Aritmatika",
    rumus: "Un = a + (n - 1) × b",
    keterangan: "a = suku pertama, b = beda",
    contoh: "Jika a = 3, b = 5, cari suku ke-4 → Un = 3 + (4-1)×5 = 18"
  },
  {
    judul: "Barisan Geometri",
    rumus: "Un = a × rⁿ⁻¹",
    keterangan: "a = suku pertama, r = rasio",
    contoh: "Jika a = 2, r = 3, cari suku ke-4 → Un = 2 × 3³ = 54"
  },
  {
    judul: "Fungsi Eksponen",
    rumus: "f(x) = a^x",
    keterangan: "a > 0, a ≠ 1",
    contoh: "f(x) = 2^x, jika x = 3 → f(3) = 8"
  },
  {
    judul: "Fungsi Logaritma",
    rumus: "logₐ b = c → a^c = b",
    keterangan: "a = basis logaritma",
    contoh: "log₂ 8 = 3 karena 2³ = 8"
  }
];
