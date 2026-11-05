// 1. DATA KOMPONEN KOMPUTER LENGKAP
const componentsData = [
    {
        id: 'cpu',
        name: 'CPU (Central Processing Unit)',
        category: 'Processing',
        badge: 'Otak Komputer',
        icon: 'fa-microchip',
        color: 'blue',
        shortDesc: 'Komponen utama yang mengeksekusi instruksi program dan mengendalikan seluruh operasi komputer.',
        mainFunction: 'Melakukan operasi aritmatika, logika, pengendalian, serta koordinasi input/output yang ditentukan oleh instruksi dalam kode pemrograman.',
        architectureDetails: [
            { title: 'ALU (Arithmetic Logic Unit)', desc: 'Bertugas melakukan perhitungan matematika dasar (+, -, ×, ÷) dan perbandingan logika (AND, OR, NOT, XOR).' },
            { title: 'Control Unit (CU)', desc: 'Mengatur lalu lintas data di dalam prosesor, mengambil instruksi dari RAM, dan menerjemahkannya menjadi sinyal kontrol.' },
            { title: 'Register & Cache Memory', desc: 'Ruang penyimpanan internal berkecepatan sangat tinggi (L1, L2, L3 Cache) untuk menyimpan data sementara yang sedang diproses.' }
        ],
        specs: ['Clock Speed (GHz)', 'Jumlah Core & Thread', 'L1/L2/L3 Cache (MB)', 'Arsitektur Set Instruksi (x86_64 / ARM)'],
        analogy: 'Ibarat seorang Kepala Koki di dapur yang membaca buku resep (instruksi), mengolah bahan makanan (data), dan mengatur asisten koki lainnya.'
    },
    {
        id: 'ram',
        name: 'RAM (Random Access Memory)',
        category: 'Memory',
        badge: 'Memori Utama (Volatile)',
        icon: 'fa-memory',
        color: 'purple',
        shortDesc: 'Penyimpanan sementara berkecepatan tinggi untuk data dan program yang sedang aktif dijalankan oleh CPU.',
        mainFunction: 'Menyediakan akses baca dan tulis data yang sangat cepat bagi CPU agar prosesor tidak perlu menunggu lambatnya pengambilan data dari SSD/HDD.',
        architectureDetails: [
            { title: 'Sifat Volatile', desc: 'Seluruh data yang tersimpan di dalam RAM akan langsung hilang ketika aliran listrik ke komputer dimatikan.' },
            { title: 'Random Access', desc: 'CPU dapat mengakses lokasi alamat memori mana saja secara langsung dengan waktu akses yang sama cepatnya.' },
            { title: 'Dual/Quad Channel Bus', desc: 'Menggandakan jalur komunikasi antara RAM dan Memory Controller di CPU untuk meningkatkan bandwidth.' }
        ],
        specs: ['Kapasitas (8GB, 16GB, 32GB)', 'Generasi (DDR4 / DDR5)', 'Data Transfer Rate (MHz / MT/s)', 'CAS Latency (CL)'],
        analogy: 'Ibarat meja kerja seorang koki; semakin luas mejanya, semakin banyak bahan masakan yang bisa ditaruh dan dijangkau dengan cepat tanpa harus bolak-balik ke gudang.'
    },
    {
        id: 'mobo',
        name: 'Motherboard (Mainboard)',
        category: 'System',
        badge: 'Papan Sirkuit Utama',
        icon: 'fa-network-wired',
        color: 'amber',
        shortDesc: 'Papan sirkuit cetak (PCB) utama yang menghubungkan seluruh komponen perangkat keras komputer agar dapat saling berkomunikasi.',
        mainFunction: 'Mendistribusikan daya listrik ke komponen serta menyediakan jalur komunikasi data (System Bus) antara CPU, RAM, GPU, dan Storage.',
        architectureDetails: [
            { title: 'System Bus (Data, Address, Control)', desc: 'Jalur sirkuit tembaga yang membawa data aktual, informasi alamat memori, dan sinyal kendali waktu.' },
            { title: 'Chipset (Southbridge/PCH)', desc: 'Mengelola aliran data berkecepatan menengah-tinggi seperti port USB, jalur SATA, jaringan LAN, dan audio.' },
            { title: 'BIOS / UEFI Chip', desc: 'Firmware permanen (ROM) yang melakukan inisialisasi perangkat keras (POST) saat komputer pertama kali dinyalakan.' }
        ],
        specs: ['Form Factor (ATX, Micro-ATX, Mini-ITX)', 'Socket CPU (LGA 1700, AM5)', 'Slot Ekspansi (PCIe 4.0 / 5.0)', 'VRM (Voltage Regulator Module)'],
        analogy: 'Ibarat infrastruktur jalan raya dan jaringan listrik sebuah kota yang menghubungkan gedung-gedung penting agar lalu lintas berjalan lancar.'
    },
    {
        id: 'gpu',
        name: 'GPU (Graphics Processing Unit)',
        category: 'Processing',
        badge: 'Pemroses Grafis & Paralel',
        icon: 'fa-display',
        color: 'pink',
        shortDesc: 'Prosesor khusus yang dirancang untuk mempercepat pembuatan dan rendering gambar, video, animasi 3D, serta komputasi AI.',
        mainFunction: 'Mengambil beban komputasi matematis yang bersifat paralel (ribuan tugas kecil sekaligus) dari CPU dan mengubahnya menjadi sinyal piksel ke monitor.',
        architectureDetails: [
            { title: 'Ribuan Core Paralel (CUDA / Stream)', desc: 'Berbeda dengan CPU yang punya sedikit core kuat (serial), GPU memiliki ribuan core kecil untuk pemrosesan matriks simultan.' },
            { title: 'VRAM (Video RAM)', desc: 'Memori khusus berkecepatan tinggi (GDDR6) untuk menyimpan tekstur 3D, frame buffer, dan shader.' },
            { title: 'Rasterizer & Ray Tracing Cores', desc: 'Unit khusus untuk menghitung pencahayaan, bayangan, dan mengubah objek 3D vektor menjadi piksel 2D.' }
        ],
        specs: ['Kapasitas VRAM (GDDR6/GDDR6X)', 'Jumlah Core (CUDA / Stream Processors)', 'Memory Bus Width (128-bit, 256-bit)', 'TDP (Watt)'],
        analogy: 'Ibarat ribuan pelukis yang bekerja serentak melukis satu titik piksel masing-masing sehingga lukisan raksasa selesai dalam sekejap.'
    },
    {
        id: 'storage',
        name: 'Storage (SSD NVMe / HDD)',
        category: 'Memory',
        badge: 'Memori Sekunder (Non-Volatile)',
        icon: 'fa-hard-drive',
        color: 'cyan',
        shortDesc: 'Media penyimpanan data jangka panjang yang menyimpan sistem operasi, aplikasi, dan file pengguna secara permanen.',
        mainFunction: 'Menyimpan data secara permanen (non-volatile) meskipun komputer dalam keadaan mati, lalu menyuplai data tersebut ke RAM saat dibutuhkan.',
        architectureDetails: [
            { title: 'SSD (Solid State Drive)', desc: 'Menggunakan chip NAND Flash Memory tanpa komponen bergerak, menghasilkan kecepatan baca/tulis hingga ribuan MB/detik.' },
            { title: 'HDD (Hard Disk Drive)', desc: 'Menggunakan piringan magnetik berputar (platter) dan head baca/tulis mekanis, cocok untuk penyimpanan kapasitas besar yang ekonomis.' },
            { title: 'Protokol Antarmuka (NVMe vs SATA)', desc: 'NVMe memanfaatkan jalur PCIe secara langsung ke CPU sehingga jauh lebih cepat dibandingkan kabel SATA tradisional.' }
        ],
        specs: ['Kapasitas (512GB, 1TB, 2TB)', 'Sequential Read/Write Speed (MB/s)', 'Form Factor (M.2 2280, 2.5 inch)', 'Endurance (TBW - Terabytes Written)'],
        analogy: 'Ibarat lemari arsip atau gudang penyimpanan permanen tempat menyimpan seluruh buku resep dan bahan baku dalam jangka panjang.'
    },
    {
        id: 'psu',
        name: 'PSU (Power Supply Unit)',
        category: 'System',
        badge: 'Penyuplai & Konverter Daya',
        icon: 'fa-bolt',
        color: 'yellow',
        shortDesc: 'Perangkat keras yang menyuplai dan mengatur kebutuhan daya listrik ke seluruh komponen di dalam casing komputer.',
        mainFunction: 'Mengubah arus listrik bolak-balik (AC 220V) dari stopkontak dinding menjadi arus listrik searah (DC 3.3V, 5V, dan 12V) yang stabil dan aman bagi sirkuit.',
        architectureDetails: [
            { title: 'Jalur Tegangan (+12V, +5V, +3.3V)', desc: 'Jalur +12V menyuplai komponen berat seperti CPU & GPU, sedangkan +5V dan +3.3V menyuplai SSD, port USB, dan chip motherboard.' },
            { title: 'Efisiensi Daya (80 Plus Certification)', desc: 'Standar efisiensi konversi energi (Bronze, Gold, Platinum) agar energi tidak terbuang sia-sia menjadi panas.' },
            { title: 'Proteksi Sirkuit (OVP, OPP, SCP)', desc: 'Fitur keamanan yang memutus arus seketika jika terjadi korsleting atau lonjakan tegangan listrik.' }
        ],
        specs: ['Kapasitas Daya Murni (Watt)', 'Sertifikasi Efisiensi (80+ Bronze/Gold)', 'Tipe Kabel (Non-Modular / Full Modular)', 'Konektor (24-pin ATX, 8-pin EPS, PCIe)'],
        analogy: 'Ibarat jantung dan pembuluh darah yang memompa energi bersih secara stabil ke seluruh organ tubuh komputer.'
    },
    {
        id: 'input',
        name: 'Input Unit (Perangkat Masukan)',
        category: 'System',
        badge: 'Antarmuka Masukan',
        icon: 'fa-keyboard',
        color: 'emerald',
        shortDesc: 'Perangkat keras yang digunakan pengguna untuk memasukkan data dan perintah ke dalam sistem komputer.',
        mainFunction: 'Menerjemahkan tindakan fisik manusia (ketikan tombol, gerakan tangan, suara) menjadi sinyal biner digital (0 dan 1) yang dapat dipahami oleh CPU.',
        architectureDetails: [
            { title: 'I/O Controller & Interrupts', desc: 'Saat tombol ditekan, perangkat mengirim sinyal Interrupt Request (IRQ) ke CPU agar prosesor segera merespons input tersebut.' },
            { title: 'Konversi Sinyal Analog ke Digital (ADC)', desc: 'Pada mikrofon atau sensor optik mouse, gelombang fisik diubah menjadi kode biner melalui chip mikrokontroler.' },
            { title: 'Buffer Input', desc: 'Menampung ketikan atau gerakan sementara di memori buffer agar tidak ada input yang terlewat saat CPU sedang sibuk.' }
        ],
        specs: ['Polling Rate (Hz - kecepatan laporan ke CPU)', 'Antarmuka (USB, Bluetooth, 2.4GHz Wireless)', 'Tipe Sensor / Switch'],
        analogy: 'Ibarat panca indera manusia (mata, telinga, peraba) yang menerima rangsangan informasi dari dunia luar untuk dikirim ke otak.'
    },
    {
        id: 'output',
        name: 'Output Unit (Perangkat Keluaran)',
        category: 'System',
        badge: 'Antarmuka Keluaran',
        icon: 'fa-tv',
        color: 'indigo',
        shortDesc: 'Perangkat keras yang menampilkan atau menyajikan hasil pengolahan data dari komputer kepada manusia.',
        mainFunction: 'Mengonversi kembali data biner digital hasil olahan CPU dan GPU menjadi bentuk yang dapat diterima indera manusia seperti visual, audio, atau cetakan fisik.',
        architectureDetails: [
            { title: 'Display Controller & Refresh Rate', desc: 'Memperbarui tampilan layar puluhan hingga ratusan kali per detik (Hz) berdasarkan data dari Frame Buffer GPU.' },
            { title: 'DAC (Digital-to-Analog Converter)', desc: 'Pada soundcard dan speaker, data biner diubah menjadi gelombang elektrik analog untuk menggerakkan membran suara.' },
            { title: 'Protokol Transmisi (HDMI / DisplayPort)', desc: 'Jalur komunikasi bandwidth tinggi yang membawa sinyal video tanpa kompresi beserta audio digital.' }
        ],
        specs: ['Resolusi (1080p, 1440p, 4K)', 'Refresh Rate (60Hz, 144Hz, 240Hz)', 'Panel Type (IPS, OLED, VA)', 'Konektivitas (HDMI 2.1, DisplayPort 1.4)'],
        analogy: 'Ibarat mulut dan ekspresi wajah manusia yang menyampaikan hasil pemikiran dari otak agar dapat dipahami oleh orang lain.'
    }
];

// 2. DATA SIMULASI SIKLUS CPU
const simSteps = [
    {
        step: 1,
        phase: 'FETCH STAGE',
        title: '1. Fetch (Pengambilan Instruksi)',
        desc: 'Program Counter (PC) di CPU menunjuk ke alamat memori RAM 0x00A1. Instruksi "LOAD 25, ADD 15" beserta datanya diambil dari RAM melalui Data Bus menuju ke Instruction Register (IR) di dalam CPU.',
        activeBlock: 'sim-block-ram',
        cuText: 'Status: Mengambil instruksi dari alamat 0x00A1...',
        aluText: 'Operasi: Menunggu sinyal dari CU',
        outText: 'Output Monitor: -'
    },
    {
        step: 2,
        phase: 'DECODE STAGE',
        title: '2. Decode (Penerjemahan Instruksi)',
        desc: 'Control Unit (CU) membaca dan menerjemahkan instruksi biner tersebut. CU memahami bahwa sistem harus melakukan operasi penjumlahan (ADD) antara angka 25 dan 15, lalu menyiapkan jalur ke ALU.',
        activeBlock: 'sim-block-cu',
        cuText: 'Status: Opcode diterjemahkan -> Operasi ADD (25, 15)',
        aluText: 'Operasi: Menerima operan A=25 dan B=15',
        outText: 'Output Monitor: -'
    },
    {
        step: 3,
        phase: 'EXECUTE STAGE',
        title: '3. Execute (Eksekusi di ALU)',
        desc: 'Arithmetic Logic Unit (ALU) mengeksekusi perhitungan biner: 00011001 (25) + 00001111 (15) = 00101000 (40) menggunakan rangkaian gerbang logika Full Adder.',
        activeBlock: 'sim-block-alu',
        cuText: 'Status: Mengirim sinyal eksekusi ke ALU',
        aluText: 'Operasi: 25 + 15 = 40 (Biner: 00101000)',
        outText: 'Output Monitor: Memproses...'
    },
    {
        step: 4,
        phase: 'WRITEBACK STAGE',
        title: '4. Writeback (Penyimpanan Hasil & Output)',
        desc: 'Hasil perhitungan (40) disimpan ke dalam Register Accumulator di CPU, ditulis kembali ke RAM, dan dikirimkan melalui Output Bus menuju Monitor untuk ditampilkan ke pengguna.',
        activeBlock: 'sim-block-out',
        cuText: 'Status: Siklus selesai. PC bertambah (+1)',
        aluText: 'Operasi: Selesai (Hasil dikirim ke Register)',
        outText: 'Output Monitor: HASIL = 40'
    }
];

// 3. DATA MINI KUIS
const quizQuestions = [
    {
        q: 'Bagian di dalam CPU yang bertugas melakukan perhitungan aritmatika (penjumlahan, pengurangan) dan perbandingan logika adalah...',
        options: ['Control Unit (CU)', 'ALU (Arithmetic Logic Unit)', 'Register Memory', 'Southbridge Chipset'],
        answer: 1
    },
    {
        q: 'Mengapa data yang ada di dalam RAM akan hilang ketika komputer dimatikan?',
        options: ['Karena RAM menggunakan piringan magnetik', 'Karena RAM bersifat Non-Volatile', 'Karena RAM bersifat Volatile yang membutuhkan arus listrik kontinu', 'Karena kapasitas RAM lebih kecil dari SSD'],
        answer: 2
    },
    {
        q: 'Urutan siklus instruksi kerja CPU yang benar dalam arsitektur komputer adalah...',
        options: ['Execute → Fetch → Decode', 'Decode → Fetch → Execute', 'Fetch → Decode → Execute', 'Fetch → Execute → Reset'],
        answer: 2
    },
    {
        q: 'Komponen yang berfungsi mengubah arus listrik bolak-balik (AC) menjadi arus searah (DC) untuk menyuplai daya ke motherboard adalah...',
        options: ['VRM (Voltage Regulator)', 'PSU (Power Supply Unit)', 'UPS (Uninterruptible Power)', 'PCIe Lane'],
        answer: 1
    },
    {
        q: 'Jalur komunikasi pada motherboard yang menghubungkan CPU, memori utama, dan perangkat I/O disebut sebagai...',
        options: ['System Bus (Data, Address, Control Bus)', 'Heatpipe Sink', 'Overclocking Lane', 'SATA Optical Drive'],
        answer: 0
    }
];

let currentSelectedId = 'cpu';
let currentCategory = 'all';
let currentSimIndex = 0;
let userAnswers = {};

// RENDER DAFTAR KARTU KOMPONEN
function renderComponentCards() {
    const container = document.getElementById('component-cards-grid');
    const filtered = currentCategory === 'all' 
        ? componentsData 
        : componentsData.filter(c => c.category === currentCategory);

    container.innerHTML = filtered.map(comp => {
        const isSelected = comp.id === currentSelectedId;
        return `
            <div onclick="selectComponent('${comp.id}')" 
                 class="cursor-pointer p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                     isSelected 
                     ? 'bg-blue-950/30 border-blue-500 shadow-lg shadow-blue-500/10' 
                     : 'bg-gray-900/70 border-gray-800 hover:border-gray-700 hover:bg-gray-900'
                 }">
                <div class="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center shrink-0 text-${comp.color}-400 border border-gray-700">
                    <i class="fa-solid ${comp.icon} text-lg"></i>
                </div>
                <div class="min-w-0 flex-1">
                    <div class="flex items-center justify-between gap-2">
                        <h4 class="font-bold text-sm text-white truncate">${comp.name}</h4>
                    </div>
                    <span class="inline-block text-[10px] font-mono text-${comp.color}-400 bg-${comp.color}-500/10 px-2 py-0.5 rounded mt-1">${comp.badge}</span>
                    <p class="text-xs text-gray-400 mt-1.5 line-clamp-2">${comp.shortDesc}</p>
                </div>
            </div>
        `;
    }).join('');
}

// PILIH KOMPONEN & UPDATE PANEL DETAIL
function selectComponent(id) {
    currentSelectedId = id;
    const comp = componentsData.find(c => c.id === id);
    if (!comp) return;

    document.querySelectorAll('.comp-node').forEach(btn => {
        btn.classList.remove('border-2', 'border-blue-500', 'bg-blue-950/20', 'glow-effect');
        btn.classList.add('border', 'border-gray-800', 'bg-gray-900/70');
    });
    const activeNode = document.getElementById(`node-${id}`);
    if (activeNode) {
        activeNode.classList.remove('border', 'border-gray-800', 'bg-gray-900/70');
        activeNode.classList.add('border-2', 'border-blue-500', 'bg-blue-950/20', 'glow-effect');
    }

    renderComponentCards();

    const detailPanel = document.getElementById('detail-panel');
    detailPanel.innerHTML = `
        <div class="p-6 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950/30 border-b border-gray-800">
            <div class="flex items-center justify-between mb-3">
                <span class="text-xs font-mono uppercase px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    ${comp.badge}
                </span>
                <span class="text-xs font-mono text-gray-400">Kategori: ${comp.category}</span>
            </div>
            <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                    <i class="fa-solid ${comp.icon} text-2xl"></i>
                </div>
                <div>
                    <h2 class="text-xl font-bold text-white leading-snug">${comp.name}</h2>
                    <p class="text-xs text-gray-300 mt-1">${comp.shortDesc}</p>
                </div>
            </div>
        </div>

        <div class="p-6 space-y-5">
            <div>
                <h3 class="text-xs font-mono uppercase tracking-wider text-blue-400 mb-1.5 flex items-center gap-1.5">
                    <i class="fa-solid fa-bullseye"></i> Fungsi Utama dalam Sistem
                </h3>
                <p class="text-sm text-gray-200 bg-gray-950/80 p-3.5 rounded-xl border border-gray-800 leading-relaxed">
                    ${comp.mainFunction}
                </p>
            </div>

            <div>
                <h3 class="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                    <i class="fa-solid fa-layer-group"></i> Struktur & Cara Kerja Arsitektur
                </h3>
                <div class="space-y-2.5">
                    ${comp.architectureDetails.map(item => `
                        <div class="bg-gray-950/60 p-3 rounded-xl border border-gray-800/90">
                            <div class="font-semibold text-xs text-white mb-0.5">${item.title}</div>
                            <div class="text-xs text-gray-400 leading-relaxed">${item.desc}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div>
                <h3 class="text-xs font-mono uppercase tracking-wider text-purple-400 mb-2 flex items-center gap-1.5">
                    <i class="fa-solid fa-sliders"></i> Parameter Spesifikasi Penentu Performa
                </h3>
                <div class="flex flex-wrap gap-1.5">
                    ${comp.specs.map(spec => `
                        <span class="text-xs bg-gray-800 text-gray-200 px-2.5 py-1 rounded-lg border border-gray-700 font-mono">
                            ${spec}
                        </span>
                    `).join('')}
                </div>
            </div>

            <div class="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3.5">
                <div class="text-xs font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                    <i class="fa-solid fa-lightbulb"></i> Analogi Mudah (Bahan Presentasi Video):
                </div>
                <p class="text-xs text-amber-100/90 italic leading-relaxed">"${comp.analogy}"</p>
            </div>
        </div>
    `;
}

// FILTER KATEGORI
function filterComponents(category, event) {
    currentCategory = category;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('bg-gray-800', 'text-gray-300');
    });
    if (event && event.currentTarget) {
        event.currentTarget.classList.remove('bg-gray-800', 'text-gray-300');
        event.currentTarget.classList.add('bg-blue-600', 'text-white');
    }
    renderComponentCards();
}

// NAVIGASI ANTAR TAB
function switchTab(tabName) {
    ['explorer', 'simulator', 'quiz'].forEach(t => {
        document.getElementById(`view-${t}`).classList.add('hidden');
        const btn = document.getElementById(`tab-${t}`);
        btn.classList.remove('bg-blue-600', 'text-white', 'shadow');
        btn.classList.add('text-gray-400');
    });

    document.getElementById(`view-${tabName}`).classList.remove('hidden');
    const activeBtn = document.getElementById(`tab-${tabName}`);
    activeBtn.classList.remove('text-gray-400');
    activeBtn.classList.add('bg-blue-600', 'text-white', 'shadow');
}

// LOGIKA SIMULASI SIKLUS CPU
function updateSimulationUI() {
    const data = simSteps[currentSimIndex];
    document.getElementById('sim-step-badge').textContent = `LANGKAH ${data.step} DARI 4`;
    document.getElementById('sim-phase-name').textContent = data.phase;
    document.getElementById('sim-title').textContent = data.title;
    document.getElementById('sim-desc').textContent = data.desc;
    document.getElementById('sim-cu-status').textContent = data.cuText;
    document.getElementById('sim-alu-status').textContent = data.aluText;
    document.getElementById('sim-out-status').textContent = data.outText;
    document.getElementById('sim-progress').style.width = `${(data.step / 4) * 100}%`;

    ['sim-block-ram', 'sim-block-cu', 'sim-block-alu', 'sim-block-out'].forEach(id => {
        document.getElementById(id).classList.remove('sim-active');
    });
    document.getElementById(data.activeBlock).classList.add('sim-active');
}

function nextSimStep() {
    currentSimIndex = (currentSimIndex + 1) % simSteps.length;
    updateSimulationUI();
}

function prevSimStep() {
    currentSimIndex = (currentSimIndex - 1 + simSteps.length) % simSteps.length;
    updateSimulationUI();
}

function resetSim() {
    currentSimIndex = 0;
    updateSimulationUI();
}

// LOGIKA MINI KUIS
function renderQuiz() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = quizQuestions.map((item, qIndex) => {
        const selected = userAnswers[qIndex];
        return `
            <div class="p-4 rounded-xl bg-gray-950/70 border border-gray-800 space-y-3">
                <div class="font-semibold text-sm text-white">
                    <span class="text-blue-400 font-mono mr-1">${qIndex + 1}.</span> ${item.q}
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    ${item.options.map((opt, oIndex) => {
                        let btnStyle = 'bg-gray-900 border-gray-800 text-gray-300 hover:border-gray-700';
                        if (selected !== undefined) {
                            if (oIndex === item.answer) {
                                btnStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-300 font-medium';
                            } else if (selected === oIndex && selected !== item.answer) {
                                btnStyle = 'bg-red-950/60 border-red-500 text-red-300';
                            }
                        }
                        return `
                            <button onclick="answerQuiz(${qIndex}, ${oIndex})" 
                                    class="text-left text-xs p-3 rounded-lg border transition-all ${btnStyle}">
                                ${opt}
                            </button>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');

    let score = 0;
    Object.keys(userAnswers).forEach(qIdx => {
        if (userAnswers[qIdx] === quizQuestions[qIdx].answer) score++;
    });
    document.getElementById('quiz-score-badge').textContent = `${score} / ${quizQuestions.length}`;
}

function answerQuiz(qIndex, oIndex) {
    userAnswers[qIndex] = oIndex;
    renderQuiz();
}

// INISIALISASI SAAT HALAMAN DIMUAT
window.onload = function() {
    selectComponent('cpu');
    updateSimulationUI();
    renderQuiz();
};
