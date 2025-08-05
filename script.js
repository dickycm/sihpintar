// Penjelasan simbol operasi
const helpText = `
<b>Cara Penulisan Soal:</b><br>
Gunakan simbol berikut:<br>
• Tambah: <code>+</code><br>
• Kurang: <code>-</code><br>
• Kali: <code>*</code><br>
• Bagi: <code>/</code> atau <code>:</code><br>
• Gunakan tanda kurung jika perlu: <code>( )</code><br>
Contoh: <code>5 + 2 * (3 + 1)</code>
`;

function jawabSoal(soal) {
  soal = soal.toLowerCase();

  // Fungsi bantu
  function ambilAngka(label, teks) {
    const regex = new RegExp(`${label}\\s*(=|adalah)?\\s*(\\d+(\\.\\d+)?)`);
    const hasil = teks.match(regex);
    return hasil ? parseFloat(hasil[2]) : null;
  }

  function satuan(teks) {
    if (teks.includes("cm")) return "cm";
    if (teks.includes("meter") || teks.includes("m")) return "m";
    return "satuan";
  }

  const satuanLuas = satuan(soal) + "²";
  const satuanVolume = satuan(soal) + "³";

  // Persegi
  if (soal.includes("persegi") && soal.includes("sisi")) {
    const s = ambilAngka("sisi", soal);
    if (s) {
      const luas = s * s;
      const keliling = 4 * s;
      return `📘 Soal:
${soal}

📐 Gunakan rumus:
L = s × s
K = 4 × s

🧮 Substitusi nilai:
L = ${s} × ${s} = ${luas}
K = 4 × ${s} = ${keliling}

✅ Hasil:
Luas = ${luas} ${satuanLuas}
Keliling = ${keliling} ${satuan(soal)}`;
    }
  }

  // Persegi Panjang
  if (soal.includes("persegi panjang")) {
    const p = ambilAngka("panjang", soal);
    const l = ambilAngka("lebar", soal);
    if (p && l) {
      const luas = p * l;
      const keliling = 2 * (p + l);
      return `📘 Soal:
${soal}

📐 Gunakan rumus:
L = p × l
K = 2 × (p + l)

🧮 Substitusi nilai:
L = ${p} × ${l} = ${luas}
K = 2 × (${p} + ${l}) = ${keliling}

✅ Hasil:
Luas = ${luas} ${satuanLuas}
Keliling = ${keliling} ${satuan(soal)}`;
    }
  }

  // Segitiga
  if (soal.includes("segitiga")) {
    const a = ambilAngka("alas", soal);
    const t = ambilAngka("tinggi", soal);
    if (a && t) {
      const luas = 0.5 * a * t;
      return `📘 Soal:
${soal}

📐 Gunakan rumus:
L = ½ × a × t

🧮 Substitusi nilai:
L = ½ × ${a} × ${t} = ${luas}

✅ Hasil:
Luas = ${luas} ${satuanLuas}`;
    }
  }

  // Jajar Genjang
  if (soal.includes("jajar genjang")) {
    const a = ambilAngka("alas", soal);
    const t = ambilAngka("tinggi", soal);
    if (a && t) {
      const luas = a * t;
      return `📘 Soal:
${soal}

📐 Gunakan rumus:
L = a × t

🧮 Substitusi nilai:
L = ${a} × ${t} = ${luas}

✅ Hasil:
Luas = ${luas} ${satuanLuas}`;
    }
  }

  // Trapesium
  if (soal.includes("trapesium")) {
    const a = ambilAngka("sisi atas", soal) || ambilAngka("alas atas", soal);
    const b = ambilAngka("sisi bawah", soal) || ambilAngka("alas bawah", soal);
    const t = ambilAngka("tinggi", soal);
    if (a && b && t) {
      const luas = 0.5 * (a + b) * t;
      return `📘 Soal:
${soal}

📐 Gunakan rumus:
L = ½ × (a + b) × t

🧮 Substitusi nilai:
L = ½ × (${a} + ${b}) × ${t} = ${luas}

✅ Hasil:
Luas = ${luas} ${satuanLuas}`;
    }
  }

  // Lingkaran
  if (soal.includes("lingkaran")) {
    const r = ambilAngka("jari-jari", soal) || ambilAngka("radius", soal);
    if (r) {
      const luas = Math.PI * r * r;
      const keliling = 2 * Math.PI * r;
      return `📘 Soal:
${soal}

📐 Gunakan rumus:
L = π × r²
K = 2 × π × r

🧮 Substitusi nilai:
L = π × ${r}² ≈ ${luas.toFixed(2)}
K = 2 × π × ${r} ≈ ${keliling.toFixed(2)}

✅ Hasil:
Luas ≈ ${luas.toFixed(2)} ${satuanLuas}
Keliling ≈ ${keliling.toFixed(2)} ${satuan(soal)}`;
    }
  }

  // Kubus
  if (soal.includes("kubus") && soal.includes("sisi")) {
    const s = ambilAngka("sisi", soal);
    if (s) {
      const volume = s ** 3;
      const luasPermukaan = 6 * s * s;
      return `📘 Soal:
${soal}

📐 Gunakan rumus:
V = s³
L = 6 × s²

🧮 Substitusi nilai:
V = ${s}³ = ${volume}
L = 6 × ${s}² = ${luasPermukaan}

✅ Hasil:
Volume = ${volume} ${satuanVolume}
Luas Permukaan = ${luasPermukaan} ${satuanLuas}`;
    }
  }

  // Balok
  if (soal.includes("balok")) {
    const p = ambilAngka("panjang", soal);
    const l = ambilAngka("lebar", soal);
    const t = ambilAngka("tinggi", soal);
    if (p && l && t) {
      const volume = p * l * t;
      const luasPermukaan = 2 * (p * l + p * t + l * t);
      return `📘 Soal:
${soal}

📐 Gunakan rumus:
V = p × l × t
L = 2 × (p×l + p×t + l×t)

🧮 Substitusi nilai:
V = ${p} × ${l} × ${t} = ${volume}
L = 2 × (${p}×${l} + ${p}×${t} + ${l}×${t}) = ${luasPermukaan}

✅ Hasil:
Volume = ${volume} ${satuanVolume}
Luas Permukaan = ${luasPermukaan} ${satuanLuas}`;
    }
  }

  // Tabung
  if (soal.includes("tabung")) {
    const r = ambilAngka("jari-jari", soal);
    const t = ambilAngka("tinggi", soal);
    if (r && t) {
      const volume = Math.PI * r * r * t;
      const luasPermukaan = 2 * Math.PI * r * (r + t);
      return `📘 Soal:
${soal}

📐 Gunakan rumus:
V = π × r² × t
L = 2 × π × r × (r + t)

🧮 Substitusi nilai:
V = π × ${r}² × ${t} ≈ ${volume.toFixed(2)}
L = 2 × π × ${r} × (${r} + ${t}) ≈ ${luasPermukaan.toFixed(2)}

✅ Hasil:
Volume ≈ ${volume.toFixed(2)} ${satuanVolume}
Luas Permukaan ≈ ${luasPermukaan.toFixed(2)} ${satuanLuas}`;
    }
  }

  if (soal.includes("tabung") && soal.includes("bola")) {
    const t = ambilAngka("tinggi", soal);
    const d = ambilAngka("diameter", soal);
    const r = d ? d / 2 : null;
    if (t && r) {
      const volumeTabung = Math.PI * r * r * t;
      const volumeBola = (4 / 3) * Math.PI * Math.pow(r, 3);
      const volumeAir = volumeTabung - volumeBola;
      return `
  <div class="soal-box">
    📘 Soal: ${soal}
  </div>

📐 Gunakan rumus:
V_tabung = π × r² × t
V_bola = 4/3 × π × r³
V_air = V_tabung - V_bola

🧮 Substitusi nilai:
V_tabung = π × ${r}² × ${t} ≈ ${volumeTabung.toFixed(2)}
V_bola = 4/3 × π × ${r}³ ≈ ${volumeBola.toFixed(2)}
V_air = ${volumeTabung.toFixed(2)} - ${volumeBola.toFixed(2)} = ${volumeAir.toFixed(2)}

✅ Hasil:
Volume air ≈ ${volumeAir.toFixed(2)} ${satuanVolume}`;
    }
  }
  // Jika tidak dikenali
  return `⚠️ Soal tidak dapat dikenali. Pastikan Anda menyebut nama bangun dan ukuran (panjang, lebar, sisi, tinggi, dll).`;
}

// Fungsi: Kalkulator AI
function solveMath() {
  const question = document.getElementById("question").value.trim();
  const answerDiv = document.getElementById("answer");

  // Coba jawab sebagai soal cerita dulu
  const jawabanSoalCerita = jawabSoal(question);
  if (jawabanSoalCerita) {
    answerDiv.innerHTML = `<pre>${jawabanSoalCerita}</pre>`;
    return;
  }

  try {
    // Validasi karakter yang diizinkan
    const validInput = /^[0-9+\-*/^().\s:\u221a\w,%]+$/;
    if (!validInput.test(question)) {
      answerDiv.innerHTML = "⚠️ Input tidak valid. Gunakan angka & simbol operasi yang benar.";
      return;
    }

    let steps = `Soal: ${question}\n`;

    // Ganti ":" menjadi "/"
    let formatted = question.replace(/:/g, "/");

    // Konversi derajat ke radian
    formatted = formatted.replace(/(sin|cos|tan)\s*\(\s*([\d.]+)\s*deg\s*\)/gi, (_, func, deg) => {
      const radian = (Number(deg) * Math.PI) / 180;
      const result = Math[func](radian).toFixed(4);
      steps += `Langkah: ${func}(${deg}°) = ${result} (radian: ${radian.toFixed(4)})\n`;
      return result;
    });

    // Trigonometri (radian langsung)
    formatted = formatted.replace(/(sin|cos|tan)\s*\(([^()]+)\)/gi, (_, func, val) => {
      const evaluated = eval(val);
      const result = Math[func](evaluated).toFixed(4);
      steps += `Langkah: ${func}(${evaluated}) = ${result}\n`;
      return result;
    });

    // Akar kuadrat
    formatted = formatted.replace(/sqrt\s*\(([^()]+)\)/gi, (_, val) => {
      const res = Math.sqrt(Number(eval(val)));
      steps += `Langkah: Akar → sqrt(${val}) = ${res}\n`;
      return res;
    });

    // Pangkat: 3^2
    const powerRegex = /(\d+)\s*\^\s*(\d+)/g;
    formatted = formatted.replace(powerRegex, (_, base, exp) => {
      const res = Math.pow(Number(base), Number(exp));
      steps += `Langkah: Pangkat → ${base}^${exp} = ${res}\n`;
      return res;
    });

    // Evaluasi hasil akhir
    const result = eval(formatted);
    steps += `✅ Hasil: ${result}`;

    answerDiv.innerHTML = `<pre>${steps}</pre>`;
  } catch (err) {
    answerDiv.innerHTML = "❌ Terjadi kesalahan saat menghitung. Periksa input.";
  }
}

// Fungsi: Tampilkan semua rumus dari rumus.js
function tampilkanRumus(rumusArray) {
  const container = document.getElementById("rumusList");
  container.innerHTML = "";

  rumusArray.forEach((item) => {
    const div = document.createElement("div");
    div.className = "rumus";
    div.innerHTML = `
      <h3>${item.judul}</h3>
      <p><strong>Rumus:</strong> ${item.rumus}</p>
      <p><strong>Keterangan:</strong> ${item.keterangan}</p>
      <p><strong>Contoh:</strong> ${item.contoh}</p>
    `;
    container.appendChild(div);
  });
}

// Fungsi: Cari rumus berdasarkan keyword
document.getElementById("searchRumus").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const hasilFilter = rumusMatematika.filter((item) =>
    item.judul.toLowerCase().includes(keyword) ||
    item.rumus.toLowerCase().includes(keyword) ||
    item.keterangan.toLowerCase().includes(keyword)
  );
  tampilkanRumus(hasilFilter);
});

// Saat halaman pertama kali dimuat, tampilkan semua rumus
document.addEventListener("DOMContentLoaded", function () {
  tampilkanRumus(rumusMatematika);
});
