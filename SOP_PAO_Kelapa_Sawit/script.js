/**
 * SOP Panen, Angkut, dan Olah (PAO) Kelapa Sawit
 * Materi SOP dan daftar pustaka asli dipertahankan.
 */

// 1. DATA SOP ASLI
const S = [
  {
    "id": "pao",
    "t": "PAO (Panen, Angkut, Olah)",
    "d": "Alur terpadu dari pemotongan TBS hingga diolah di PKS. Kematangan buah paling menentukan kuantitas &amp; kualitas minyak.",
    "steps": [
      "Rencana: taksasi harian, rotasi, kebutuhan TK, alat, dan transport.",
      "Panen: potong hanya TBS matang, rapikan pelepah, kumpulkan brondolan, susun di TPH.",
      "Angkut: muat TBS dari TPH ke truk, catat di SPB/DKP; kirim ke PKS di hari yang sama.",
      "Olah: TBS ditimbang, disortasi, lalu diolah ≤ 24 jam sejak panen.",
      "Evaluasi: mutu buah (mentah, restan, brondolan), produksi vs taksasi."
    ],
    "chk": [
      "Tidak ada TBS restan di TPH",
      "Brondolan dikutip bersih",
      "TBS terolah ≤ 24 jam"
    ]
  },
  {
    "id": "kriteria",
    "t": "Kriteria Panen",
    "d": "Penentuan tingkat kematangan TBS agar rendemen minyak optimal.",
    "steps": [
      "Periksa warna buah &amp; brondolan lepas dari tanah/piringan.",
      "Matang panen: fraksi 2–3 (buah merah-jingga, ada brondolan lepas).",
      "Ambang umum: tandan &lt;10 kg ≥ 5 brondolan lepas; ≥10 kg ≥ 10 brondolan lepas (verifikasi SOP perusahaan).",
      "Jangan potong buah mentah (fraksi 00–1) atau tanpa brondolan.",
      "Pelepah penyangga dipotong sesuai standar; tangkai tandan dipotong rapat (cangkem kodok)."
    ],
    "tbl": [
      [
        "Fraksi",
        "Kondisi",
        "Tindakan"
      ],
      [
        "00",
        "Hitam, tidak ada brondolan",
        "Jangan panen"
      ],
      [
        "0",
        "1–12,5% brondolan",
        "Jangan panen"
      ],
      [
        "1",
        "12,5–25%",
        "Jangan panen"
      ],
      [
        "2",
        "25–50%",
        "Panen"
      ],
      [
        "3",
        "50–75%",
        "Panen (optimal)"
      ],
      [
        "4",
        "75–100%, ada buah membusuk",
        "Panen, lewat matang"
      ],
      [
        "5",
        "Buah dalam busuk",
        "Lewat matang"
      ]
    ]
  },
  {
    "id": "bunga",
    "t": "Perhitungan Bunga Jantan &amp; Betina",
    "d": "Menghitung sex ratio untuk memperkirakan produksi dan kebutuhan penyerbukan.",
    "steps": [
      "Tentukan blok &amp; sampel pokok (mis. 5–10% pokok, tersebar merata).",
      "Hitung per pokok: jumlah bunga betina (reseptif/anthesis) dan bunga jantan.",
      "Catat pada form sensus bunga per blok &amp; tanggal.",
      "Hitung sex ratio; bandingkan dengan standar/riwayat blok.",
      "Laporkan ke asisten; sex ratio rendah → cek hara, air, kerapatan pelepah."
    ],
    "f": "Sex ratio (%) = bunga betina ÷ (betina + jantan) × 100"
  },
  {
    "id": "elaeidobius",
    "t": "Perhitungan Elaeidobius C",
    "d": "Sensus populasi kumbang penyerbuk <i>Elaeidobius kamerunicus</i> (C = census/sensus).",
    "steps": [
      "Pilih bunga jantan fase anthesis (serbuk sari keluar) di blok sampel.",
      "Ambil beberapa spikelet dari tiap bunga, masukkan ke wadah/kantong tertutup.",
      "Hitung jumlah kumbang per spikelet, lalu rata-ratakan per blok.",
      "Hitung juga fruit set tandan sampel sebagai indikator keberhasilan penyerbukan.",
      "Populasi rendah → hindari insektisida spektrum luas, lakukan introduksi/penambahan kumbang. Ambang mengikuti standar perusahaan/PPKS."
    ],
    "f": "Populasi rata-rata = Σ kumbang ÷ Σ spikelet sampel"
  },
  {
    "id": "kaveld",
    "t": "Kaveld",
    "d": "Pembagian areal panen menjadi kavling hari panen sehingga rotasi berjalan tertib (contoh: 5 kaveld panen per minggu).",
    "steps": [
      "Bagi areal afdeling menjadi kaveld berdasarkan luas &amp; produksi yang seimbang.",
      "Beri kode kaveld per hari panen (mis. K1–K6).",
      "Panen satu kaveld per hari sesuai jadwal; hanya blok kaveld itu yang dipanen.",
      "AKP rendah → tambah areal dari kaveld lain agar target produksi tercapai.",
      "Perbarui peta kaveld bila ada perubahan blok/tenaga kerja."
    ]
  },
  {
    "id": "ancak",
    "t": "Ancak Panen",
    "d": "Bagian areal yang menjadi tanggung jawab satu pemanen per hari.",
    "steps": [
      "Luas ancak = kapasitas panen pemanen dibagi produksi per pokok (berdasar AKP &amp; BJR).",
      "Tandai batas ancak (baris/jalur) dan beri nomor.",
      "Pemanen memanen satu ancak penuh per hari, termasuk kutip brondolan.",
      "Ancak yang tidak selesai dicatat dan diprioritaskan hari berikut.",
      "Rotasi ancak antar pemanen berkala untuk pemerataan."
    ],
    "f": "Luas ancak (ha) = kapasitas panen (kg/HK) ÷ (pokok/ha × AKP × BJR)"
  },
  {
    "id": "rotasi",
    "t": "ROTASI PANEN",
    "d": "Interval antar panen pada blok yang sama.",
    "steps": [
      "Standar umum: 7 hari (sistem 6/7); fleksibel menurut AKP dan musim.",
      "Tetapkan kalender rotasi bersama kaveld.",
      "Musim puncak: pendekkan rotasi / tambah TK; musim rendah: perpanjang.",
      "Pantau tandan lewat matang &amp; restan sebagai indikator rotasi tidak tepat.",
      "Evaluasi realisasi rotasi mingguan (mis. 6/7 = 100%)."
    ],
    "f": "Rotasi aktual = Σ hari antar panen ÷ jumlah panen"
  },
  {
    "id": "perhit",
    "t": "Taksasi Panen – Perhit. Produksi",
    "d": "Memperkirakan produksi TBS harian (kg) sebagai dasar perencanaan.",
    "steps": [
      "Lakukan sensus buah matang (1 hari sebelum panen) pada pokok sampel (mis. 10–20% pokok blok).",
      "Hitung AKP = pokok berbuah matang ÷ pokok sampel.",
      "Ambil BJR dari data bulan/tahun sebelumnya.",
      "Hitung taksasi, laporkan sebelum jam kerja berikutnya."
    ],
    "f": "Taksasi (kg) = total pokok × AKP × BJR"
  },
  {
    "id": "tk",
    "t": "Taksasi Panen – Kebutuhan TK",
    "d": "Menentukan jumlah pemanen &amp; tenaga pendukung.",
    "steps": [
      "Tentukan kapasitas panen (kg/HK) berdasarkan basis tugas &amp; kondisi areal.",
      "Hitung kebutuhan pemanen.",
      "Tambahkan tenaga kutip brondolan, mandor panen, kerani, pembantu muat.",
      "Cek ketersediaan hadir; bila kurang, atur pinjam TK atau perpanjang rotasi."
    ],
    "f": "Kebutuhan pemanen (HK) = taksasi (kg) ÷ kapasitas panen (kg/HK)"
  },
  {
    "id": "alat",
    "t": "Taksasi Panen – Kebutuhan Alat",
    "d": "Memastikan alat panen siap sesuai tinggi pokok.",
    "steps": [
      "Alat: dodos (pokok muda), egrek/galah (pokok tinggi), kapak, gancu, angkong, tojok.",
      "Hitung jumlah per pemanen + cadangan; cek ketajaman &amp; kelayakan.",
      "Sediakan APD: helm, sepatu, sarung tangan, kacamata.",
      "Catat pembagian &amp; pengembalian alat; ganti yang rusak."
    ]
  },
  {
    "id": "transport",
    "t": "Taksasi Panen – Kebutuhan Transport",
    "d": "Menghitung truk/traktor pengangkut agar TBS tidak restan.",
    "steps": [
      "Hitung jumlah rit dari taksasi dan kapasitas kendaraan.",
      "Atur jadwal berangkat agar TBS tiba di PKS sebelum batas olah (≤ 24 jam).",
      "Pastikan akses jalan panen &amp; TPH layak.",
      "Konfirmasi kapasitas bongkar PKS."
    ],
    "f": "Rit = taksasi (kg) ÷ kapasitas kendaraan (kg)"
  },
  {
    "id": "panen",
    "t": "Panen, Angkut",
    "d": "Pelaksanaan potong buah sampai pengangkutan ke PKS.",
    "steps": [
      "Apel pagi: pembagian ancak, cek APD &amp; alat, arahan mutu.",
      "Potong TBS matang; pelepah dipotong &amp; disusun rapi (gawangan mati).",
      "Kutip brondolan bersih; susun TBS di TPH (kelipatan 5, tangkai rapat).",
      "Mandor/kerani memeriksa mutu &amp; mencatat hasil per pemanen.",
      "Muat TBS ke truk dengan hati-hati (tidak dilempar); TBS di TPH tidak boleh bermalam.",
      "Terbitkan SPB; kirim ke PKS, timbang di jembatan timbang."
    ]
  },
  {
    "id": "pks",
    "t": "Olah di PKS",
    "d": "Pengolahan TBS menjadi CPO &amp; inti sawit.",
    "steps": [
      "Penerimaan: timbang, sortasi (mentah, busuk, tangkai panjang), grading.",
      "Loading ramp → lori; Sterilizer (perebusan uap, puncak ~ 2,8–3,0 kg/cm²).",
      "Thresher: lepaskan buah dari tandan; tandan kosong ke pengolahan lanjut.",
      "Digester &amp; screw press: pelumatan dan pengepresan minyak.",
      "Klarifikasi: pemisahan minyak, air, sludge → CPO.",
      "Pemisahan biji/inti (nut &amp; kernel plant) → kernel.",
      "Pantau mutu: FFA, kadar air, kotoran; hitung rendemen &amp; kehilangan minyak."
    ]
  }
];

// 2. SUMBER ASLI
const SRC = [
  [
    "Pengelolaan Panen Kelapa Sawit di Riau, Bul. Agrohorti 4(2), 2016",
    "https://journal.ipb.ac.id/index.php/bulagron/article/download/15019/11053"
  ],
  [
    "Manajemen Pemanenan Kelapa Sawit di Kebun Rambutan, Bul. Agrohorti 7(3), 2019",
    "https://core.ac.uk/download/324204472.pdf"
  ],
  [
    "Manajemen Panen Kelapa Sawit (AKP, taksasi, kapasitas, transport), Bul. Agronomi, IPB",
    "https://jai.ipb.ac.id/index.php/bulagron/article/download/17494/12554"
  ],
  [
    "Manajemen Panen Angkut dan Olah (PAO), Repositori UGM",
    "https://etd.repository.ugm.ac.id/penelitian/detail/36636"
  ],
  [
    "SOP Panen dan Muat TBS, Jurnal Instiper Yogyakarta",
    "https://jurnal.instiperjogja.ac.id/index.php/JOM/article/download/877/565/5582"
  ],
  [
    "Pusat Penelitian Kelapa Sawit (PPKS), Pedoman Teknis Panen (2007)",
    "https://iopri.co.id"
  ]
];

// 3. ELEMEN DAN PEMBENTUKAN HALAMAN
const c = document.getElementById("c");
const m = document.getElementById("menu");

S.forEach((s, i) => {
  const sub = s.id.match(/^(perhit|tk|alat|transport)$/);
  const title = s.t.replace("Taksasi Panen – ", "");

  m.insertAdjacentHTML(
    "beforeend",
    `<a href="#${s.id}" class="${sub ? "sub" : ""}">${sub ? "" : (i + 1) + ". "}${title}</a>`
  );

  let h = `
    <section id="${s.id}">
      <h2>${s.t}</h2>
      <div class="tag">SOP ${i + 1} dari ${S.length}</div>
      <p>${s.d}</p>
      <h3>Prosedur</h3>
      <ol>${s.steps.map((x) => `<li>${x}</li>`).join("")}</ol>
  `;

  if (s.f) {
    h += `<div class="f">${s.f}</div>`;
  }

  if (s.tbl) {
    h += `<div class="tw"><table>${s.tbl.map((r, k) =>
      "<tr>" + r.map((x) => k ? `<td>${x}</td>` : `<th>${x}</th>`).join("") + "</tr>"
    ).join("")}</table></div>`;
  }

  if (s.chk) {
    h += `<h3>Checklist</h3><ul>${s.chk.map((x) => `<li>☐ ${x}</li>`).join("")}</ul>`;
  }

  c.insertAdjacentHTML("beforeend", h + "</section>");
});

// 4. DAFTAR SUMBER
const sourceList = SRC.map(
  (s) => `<li><a href="${s[1]}" target="_blank" rel="noopener">${s[0]}</a></li>`
).join("");
document.getElementById("src").innerHTML = `<b>Daftar Sumber</b><ol>${sourceList}</ol>`;

// 5. FILTER PENCARIAN
const q = document.getElementById("q");

function saring() {
  const v = q.value.trim().toLowerCase();
  let visible = 0;

  document.querySelectorAll("#c section").forEach((x) => {
    const ok = v === "" || x.textContent.toLowerCase().includes(v);
    x.style.display = ok ? "" : "none";
    if (ok) visible += 1;

    const a = m.querySelector('a[href="#' + x.id + '"]');
    if (a) a.style.display = ok ? "" : "none";
  });

  document.getElementById("search-count").textContent =
    v === "" ? `${S.length} materi tersedia` : `${visible} dari ${S.length} materi ditemukan`;
  document.getElementById("empty-state").hidden = visible !== 0;
}

q.addEventListener("input", saring);
q.value = "";
saring();

// 6. KALKULATOR (RUMUS ASLI, DITAMBAH VALIDASI INPUT)
function hit() {
  const g = (id) => +document.getElementById(id).value;
  const sampel = g("a");
  const matang = g("b");
  const totalPokok = g("p");
  const bjr = g("j");
  const kapasitasPanen = g("k");
  const kapasitasTruk = g("t");
  const out = document.getElementById("out");

  // Cegah pembagian nol serta hasil perhitungan tidak valid.
  const angka = [sampel, matang, totalPokok, bjr, kapasitasPanen, kapasitasTruk];
  if (
    !angka.every(Number.isFinite) ||
    sampel <= 0 || matang < 0 || matang > sampel ||
    totalPokok < 0 || bjr < 0 || kapasitasPanen <= 0 || kapasitasTruk <= 0
  ) {
    out.innerHTML = `<p class="error-message">Periksa input. Pokok sampel dan kapasitas harus lebih dari nol; jumlah pokok matang tidak boleh melebihi sampel.</p>`;
    return;
  }

  const akp = matang / sampel;
  const tk = totalPokok * akp * bjr;

  out.innerHTML = `
    <div class="result-grid">
      <div class="result-item"><span>Angka Kerapatan Panen (AKP)</span><strong>${(akp * 100).toFixed(1)}%</strong></div>
      <div class="result-item"><span>Taksasi Produksi</span><strong>${Math.round(tk).toLocaleString("id-ID")} kg</strong></div>
      <div class="result-item"><span>Kebutuhan Pemanen</span><strong>${Math.ceil(tk / kapasitasPanen)} HK</strong></div>
      <div class="result-item"><span>Kebutuhan Rit</span><strong>${Math.ceil(tk / kapasitasTruk)} rit</strong></div>
    </div>
  `;
}

hit();
