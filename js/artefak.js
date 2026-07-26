/* ============================================
   E-PORTFOLIO - ARTEFAK & MODAL JS
   Portfolio modal popup for artifact analysis
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalContent = document.getElementById('modalContent');
  const modalTriggers = document.querySelectorAll('.btn-modal');

  const artifactData = {
    /* ---- Semester 2 - E-Portfolio 1 (PPL Mandiri) ----
       fileUrl sengaja dikosongkan. Saat sebuah berkas sudah diunggah,
       isi fileUrl dengan tautan Google Drive-nya; modal akan otomatis
       menampilkan pratinjau dokumen di bawah analisis. */
    's2-atp': {
      title: 'Alur Tujuan Pembelajaran',
      type: 'Rancangan / Perencanaan Pembelajaran',
      fileUrl: '',
      context: 'Alur tujuan pembelajaran menurunkan capaian pembelajaran menjadi tujuan yang berurutan untuk praktik mengajar mandiri Teknik Pemesinan.',
      purpose: 'Saya menyusunnya agar urutan tujuan mengikuti alur kerja nyata di bengkel, bukan urutan bab pada buku, sehingga tiap tujuan menjadi pijakan bagi tujuan berikutnya.',
      pros: [
        'Tiap tujuan dinyatakan dengan kata kerja yang dapat diamati, sehingga dapat diukur tanpa penafsiran tambahan.',
        'Urutan tujuan mengikuti alur pekerjaan pemesinan: membaca gambar, merencanakan, menyiapkan, mengerjakan, memeriksa.',
        'Kompetensi sikap kerja dan keselamatan ditempatkan sejajar dengan kompetensi keterampilan, bukan sebagai pelengkap.'
      ],
      cons: [
        'Alur ini belum diuji terhadap murid dengan kemampuan awal yang jauh berbeda, sehingga loncatan antartujuan mungkin terlalu jauh bagi sebagian murid.',
        'Perkiraan waktu tiap tujuan masih berdasarkan asumsi, belum berdasarkan catatan pelaksanaan.'
      ],
      theory: 'Memakai backward design: capaian pembelajaran diturunkan lebih dahulu menjadi bukti yang diterima, baru menjadi urutan kegiatan.'
    },
    's2-rencana-asesmen': {
      title: 'Rencana Asesmen',
      type: 'Rancangan / Perencanaan Pembelajaran',
      fileUrl: '',
      context: 'Rencana asesmen memetakan setiap tujuan pembelajaran terhadap bentuk asesmen yang mengukurnya, mencakup asesmen awal, formatif, dan sumatif.',
      purpose: 'Pemetaan ini menutup dua celah sekaligus: tujuan yang tidak pernah diukur, dan penilaian atas hal yang tidak pernah diajarkan.',
      pros: [
        'Setiap tujuan dipasangkan dengan bentuk asesmennya pada satu tabel, sehingga celah langsung terlihat.',
        'Asesmen awal dipakai untuk memetakan kesiapan murid, bukan untuk memberi nilai.',
        'Asesmen formatif dirancang berjalan di tengah praktik tanpa menghentikan pekerjaan murid.'
      ],
      cons: [
        'Pelaksanaan asesmen formatif sambil mendampingi murid menuntut perhatian ganda yang tidak selalu dapat saya penuhi.',
        'Belum ada perkiraan waktu yang dibutuhkan untuk menilai seluruh murid dalam satu blok praktik.'
      ],
      theory: 'Menerapkan keselarasan konstruktif Biggs, yakni tujuan, kegiatan, dan asesmen yang dirancang sebagai satu garis lurus.'
    },
    's2-k3': {
      title: 'Handout Keselamatan Kerja',
      type: 'Materi Pembelajaran',
      fileUrl: '',
      context: 'Panduan keselamatan dan kesehatan kerja yang khusus disusun untuk praktik pemesinan, mencakup alat pelindung diri, prosedur aman, dan penanganan keadaan darurat.',
      purpose: 'Keselamatan kerja saya perlakukan sebagai kompetensi yang diajarkan dan dinilai, bukan sebagai peringatan yang dibacakan di awal pertemuan lalu dilupakan.',
      pros: [
        'Prosedur aman dikaitkan dengan alasan teknisnya, sehingga murid memahami sebab, bukan sekadar mematuhi aturan.',
        'Memuat daftar periksa yang dapat dipakai murid sendiri sebelum menyalakan mesin.',
        'Keselamatan kerja masuk sebagai aspek terpisah dalam rubrik penilaian.'
      ],
      cons: [
        'Handout belum menyertakan foto keadaan berbahaya yang nyata di bengkel sekolah sebagai contoh konkret.',
        'Penerapannya masih bergantung pada pengawasan saya, belum menjadi kebiasaan mandiri murid.'
      ],
      theory: 'Berpijak pada standar keselamatan kerja industri manufaktur yang diperkenalkan sebagaimana berlaku di tempat kerja, bukan sebagai aturan sekolah.'
    },
    's2-pengayaan': {
      title: 'Materi Pengayaan',
      type: 'Materi Pembelajaran',
      fileUrl: '',
      context: 'Bahan lanjutan bagi murid yang menyelesaikan pekerjaan lebih cepat dari perkiraan, berisi tantangan tambahan pada tingkat kesulitan yang lebih tinggi.',
      purpose: 'Pengayaan disiapkan agar murid yang cepat tidak menganggur menunggu temannya, dan tetap memperoleh tantangan yang sepadan dengan kemampuannya.',
      pros: [
        'Tantangan pengayaan tetap bertumpu pada kompetensi yang sama, sehingga bukan materi terpisah yang membingungkan.',
        'Dirancang dapat dikerjakan mandiri tanpa menambah beban pendampingan saya.',
        'Menutup masalah nyata di bengkel, yakni murid cepat yang menganggur menunggu giliran mesin berikutnya.'
      ],
      cons: [
        'Pengayaan masih berupa lembar tugas; belum tersedia bentuk yang memanfaatkan murid cepat sebagai pendamping sebaya.',
        'Belum ada patokan yang jelas kapan seorang murid dinyatakan siap menerima pengayaan.'
      ],
      theory: 'Menerapkan pembelajaran berdiferensiasi pada proses dan tingkat tantangan, dengan capaian pembelajaran yang tetap sama.'
    },
    's2-model3d': {
      title: 'Model Tiga Dimensi dan Animasi Langkah',
      type: 'Media Pembelajaran',
      fileUrl: '',
      context: 'Model tiga dimensi dan animasi langkah pengerjaan yang dipakai sebelum murid menyentuh mesin, untuk menjembatani gambar kerja dua dimensi dengan benda yang akan dihasilkan.',
      purpose: 'Kesulitan terbesar murid adalah membayangkan bentuk tiga dimensi dari gambar dua dimensi. Media ini dipilih justru karena menjawab kesulitan itu.',
      pros: [
        'Setelah penjembatanan ini, penjelasan lisan yang semula berulang menjadi jauh lebih singkat karena murid memiliki bayangan yang sama.',
        'Murid dapat memutar dan memeriksa model dari berbagai sisi, yang tidak mungkin dilakukan pada gambar cetak.',
        'Animasi langkah memperlihatkan urutan pengerjaan sebagai rangkaian, bukan sebagai daftar instruksi terpisah.'
      ],
      cons: [
        'Pemakaiannya bergantung pada ketersediaan perangkat di bengkel yang jumlahnya terbatas.',
        'Belum ada pengukuran yang memisahkan sumbangan media ini dari sumbangan pendampingan langsung.'
      ],
      theory: 'Mengacu pada teori beban kognitif: representasi visual yang tepat mengurangi beban ekstra sehingga perhatian murid tersedia untuk memahami inti pekerjaan.'
    },
    's2-media-cetak': {
      title: 'Media Cetak Cadangan',
      type: 'Media Pembelajaran',
      fileUrl: '',
      context: 'Versi cetak dari setiap media digital yang dipakai, disiapkan untuk berjaga bila perangkat atau jaringan di bengkel tidak tersedia.',
      purpose: 'Keterbatasan perangkat di bengkel adalah kondisi yang harus diterima, bukan dijadikan alasan. Cadangan cetak menjaga pembelajaran tetap berjalan.',
      pros: [
        'Pembelajaran tidak pernah terhenti karena masalah teknis pada perangkat.',
        'Versi cetak dapat dibawa murid ke sisi mesin, tempat perangkat digital justru berisiko.',
        'Menyamakan akses bagi murid yang tidak membawa perangkat sendiri.'
      ],
      cons: [
        'Penyiapan cadangan menambah beban persiapan yang cukup besar pada setiap pertemuan.',
        'Versi cetak kehilangan keunggulan model tiga dimensi yang dapat diputar.'
      ],
      theory: 'Berpijak pada prinsip perancangan pembelajaran yang tahan terhadap keadaan, yakni rencana yang tetap berjalan ketika satu komponennya gagal.'
    },
    's2-catatan-video': {
      title: 'Catatan Pengamatan Rekaman',
      type: 'Instrumen Refleksi',
      fileUrl: '',
      context: 'Penandaan momen kunci pada rekaman praktik mengajar mandiri beserta penelusuran penyebabnya, disusun sebagai catatan berwaktu.',
      purpose: 'Catatan berwaktu membuat temuan dapat ditunjukkan kembali, bukan sekadar diingat. Setiap momen ketika murid berhenti bekerja saya telusuri penyebabnya.',
      pros: [
        'Temuan ditautkan pada waktu tertentu di rekaman sehingga dapat diperiksa ulang oleh guru pamong maupun dosen.',
        'Penyebab murid berhenti bekerja dibedakan: instruksi kurang jelas, alat tidak tersedia, atau tugas terlalu jauh dari kemampuan.',
        'Pola persebaran perhatian saya di dalam bengkel ikut tercatat, hal yang tidak terasa saat mengajar.'
      ],
      cons: [
        'Penandaan dilakukan setelah pembelajaran, sehingga konteks yang tidak terekam kamera bergantung pada ingatan.',
        'Sudut pengambilan tunggal membuat sebagian kegiatan murid di sisi bengkel yang berlawanan tidak teramati.'
      ],
      theory: 'Menerapkan reflection-on-action Schon, yakni meninjau tindakan setelah peristiwa berlangsung dengan bukti yang dapat diperiksa ulang.'
    },
    's2-umpan-balik': {
      title: 'Umpan Balik Guru Pamong',
      type: 'Catatan Pembimbingan',
      fileUrl: '',
      context: 'Catatan masukan guru pamong atas pelaksanaan praktik mengajar mandiri, dikumpulkan setelah tiap siklus praktik.',
      purpose: 'Umpan balik guru pamong memberi sudut pandang yang tidak dapat saya peroleh dari rekaman maupun refleksi sendiri, karena beliau mengenal murid jauh lebih lama.',
      pros: [
        'Masukan dicatat berdampingan dengan pengamatan saya sendiri, sehingga perbedaan sudut pandang terlihat jelas.',
        'Memuat pengetahuan yang tidak tertulis di modul mana pun, seperti kebiasaan murid tertentu dan batas aman mesin.',
        'Tiap masukan ditindaklanjuti dengan satu perubahan konkret pada siklus berikutnya.'
      ],
      cons: [
        'Sebagian masukan disampaikan lisan setelah jam praktik dan baru dicatat kemudian, sehingga rinciannya bisa berkurang.',
        'Belum ada format tetap sehingga masukan antarsiklus sulit dibandingkan secara langsung.'
      ],
      theory: 'Bertumpu pada pembelajaran melalui pemagangan kognitif, yakni calon guru belajar dari praktisi berpengalaman melalui pengamatan dan umpan balik.'
    },
    's2-jurnal': {
      title: 'Catatan Harian PPL Mandiri',
      type: 'Jurnal Kegiatan',
      fileUrl: '',
      context: 'Jurnal harian kegiatan selama menjalani Praktik Pengalaman Lapangan Mandiri di SMK N 2 Depok, mencakup kegiatan mengajar dan nonmengajar.',
      purpose: 'Jurnal menjaga agar peristiwa kecil yang mudah terlupakan tetap tercatat, dan menjadi bahan ketika menyusun refleksi tiap siklus.',
      pros: [
        'Mencatat kegiatan mengajar dan nonmengajar dalam satu rangkaian waktu, sehingga keterkaitan keduanya terlihat.',
        'Pencatatan harian menangkap peristiwa saat masih segar, bukan setelah berlalu berminggu-minggu.',
        'Menjadi rujukan ketika menyusun LK refleksi maupun laporan akhir.'
      ],
      cons: [
        'Sebagian besar catatan masih bersifat naratif dan belum dirangkum menjadi temuan yang dapat ditindaklanjuti.',
        'Konsistensi pengisian menurun pada hari dengan jadwal praktik yang padat.'
      ],
      theory: 'Mengikuti praktik penjurnalan reflektif yang menempatkan pencatatan berkala sebagai bahan mentah bagi refleksi yang lebih dalam.'
    },
    's2-inventaris': {
      title: 'Administrasi dan Inventaris Bengkel',
      type: 'Dokumen Administrasi',
      fileUrl: '',
      context: 'Pencatatan alat dan bahan bengkel beserta administrasi pendukung praktik, yang saya kerjakan sebagai bagian dari kegiatan nonmengajar.',
      purpose: 'Awalnya administrasi terasa terpisah dari mengajar. Setelah menjalaninya, saya memahami ketertiban pencatatan alat berdampak langsung pada kelancaran praktik.',
      pros: [
        'Bengkel dengan inventaris rapi memungkinkan pembelajaran dimulai tepat waktu tanpa kehilangan menit-menit awal.',
        'Pencatatan alat yang rusak atau hilang mencegah gangguan yang berulang pada pertemuan berikutnya.',
        'Memberi gambaran nyata tentang keterbatasan sumber daya yang harus diperhitungkan saat menyusun rencana pembelajaran.'
      ],
      cons: [
        'Pencatatan masih dikerjakan manual sehingga menyita waktu yang cukup banyak.',
        'Belum ada mekanisme yang melibatkan murid dalam merawat inventaris sebagai bagian dari kompetensi kerja.'
      ],
      theory: 'Memandang sekolah sebagai satu sistem, tempat keberhasilan pembelajaran turut ditentukan oleh hal-hal di luar ruang kelas.'
    },
    's2-rekap': {
      title: 'Rekap Hasil Penilaian',
      type: 'Dokumen Penilaian',
      fileUrl: '',
      context: 'Rekapitulasi nilai murid per aspek pada tiap siklus praktik, mencakup ketepatan ukuran, ketepatan prosedur, dan keselamatan kerja.',
      purpose: 'Rekap per aspek memperlihatkan pola yang tidak terlihat pada nilai gabungan, misalnya murid dengan hasil kerja tepat tetapi prosedur yang belum aman.',
      pros: [
        'Nilai dipisah per aspek sehingga kekuatan dan kelemahan murid dapat dibaca terpisah.',
        'Perbandingan antarsiklus memperlihatkan apakah perbaikan pengajaran saya benar-benar berdampak.',
        'Dapat ditunjukkan kepada murid sebagai dasar percakapan tentang apa yang perlu mereka perbaiki.'
      ],
      cons: [
        'Rekap masih disusun manual sehingga rawan keliru salin ketika jumlah murid banyak.',
        'Belum menyertakan catatan kualitatif yang menjelaskan angka pada kasus murid tertentu.'
      ],
      theory: 'Menempatkan data penilaian sebagai bahan pengambilan keputusan pembelajaran, bukan sebagai catatan administratif semata.'
    },
    's2-tindak-lanjut': {
      title: 'Analisis Butir dan Tindak Lanjut',
      type: 'Dokumen Penilaian',
      fileUrl: '',
      context: 'Pembacaan pola kekeliruan murid pada hasil penilaian beserta rencana perbaikan pengajaran untuk siklus berikutnya.',
      purpose: 'Hasil penilaian saya baca sebagai umpan balik atas pengajaran saya, bukan semata penilaian atas murid. Ketika sebagian besar murid keliru pada aspek yang sama, yang perlu diperbaiki adalah cara saya mengajarkannya.',
      pros: [
        'Kekeliruan yang terjadi serentak pada banyak murid diperlakukan sebagai masalah pengajaran, bukan masalah murid.',
        'Setiap pola kekeliruan diikuti satu langkah perbaikan yang konkret pada siklus berikutnya.',
        'Menghubungkan instrumen penilaian kembali ke perencanaan, sehingga siklus perbaikan tertutup.'
      ],
      cons: [
        'Analisis masih bertumpu pada jumlah kekeliruan, belum menelusuri penyebabnya melalui wawancara dengan murid.',
        'Rentang satu siklus terlalu pendek untuk memastikan perbaikan benar-benar berdampak, bukan sekadar kebetulan.'
      ],
      theory: 'Mengikuti siklus penelitian tindakan kelas: rencana, tindakan, pengamatan, refleksi, lalu rencana berikutnya.'
    },
    's2-modul-ajar': {
      title: 'Modul Ajar Praktik Mengajar Mandiri',
      type: 'Rancangan / Perencanaan Pembelajaran',
      fileUrl: '',
      context: 'Modul ajar ini saya susun untuk praktik mengajar mandiri mata pelajaran produktif Teknik Pemesinan di SMK N 2 Depok. Rancangannya menuntut tujuan yang terukur pada dua dimensi sekaligus, yaitu ketepatan hasil kerja dan sikap kerja yang aman.',
      purpose: 'Saya ingin tujuan, kegiatan, dan asesmen dapat ditelusuri bolak-balik: setiap kegiatan inti merujuk pada satu tujuan tertentu, dan setiap tujuan memiliki instrumen yang mengukurnya. Pemeriksaan keselarasan saya lakukan sebelum modul diterapkan dengan memetakan ketiganya pada satu tabel.',
      pros: [
        'Tujuan, kegiatan, dan asesmen saya petakan pada satu tabel sehingga celah di antara ketiganya terlihat sejak sebelum modul diterapkan.',
        'Model pembelajaran berbasis pekerjaan dipilih dengan alasan yang jelas: kompetensi pemesinan tidak dapat dipahami hanya melalui penjelasan.',
        'Waktu persiapan mesin dan perapian bengkel diperhitungkan sejak awal sebagai bagian pembelajaran, bukan sisa waktu.'
      ],
      cons: [
        'Alokasi waktu praktik mandiri masih perlu diuji terhadap jumlah mesin yang tersedia, karena giliran murid menentukan seberapa jauh mereka sampai.',
        'Belum tersedia skenario cadangan bila mesin bermasalah di tengah blok praktik.'
      ],
      theory: 'Mengacu pada backward design Understanding by Design (Wiggins dan McTighe) yang menempatkan asesmen sebelum kegiatan, dipadu pendekatan pembelajaran berbasis pekerjaan pada pendidikan vokasi.'
    },
    's2-jobsheet': {
      title: 'Jobsheet dan Gambar Kerja',
      type: 'Perangkat Praktik',
      fileUrl: '',
      context: 'Jobsheet dan gambar kerja menjadi pegangan murid selama praktik di bengkel. Keduanya memuat urutan langkah, alat yang dibutuhkan, serta toleransi yang harus dicapai.',
      purpose: 'Saya menyusunnya agar murid dapat bekerja tanpa harus menunggu instruksi lisan saya pada setiap langkah, sehingga perhatian saya dapat diarahkan pada murid yang benar-benar memerlukan pendampingan.',
      pros: [
        'Urutan langkah disusun mengikuti alur kerja nyata sehingga murid memahami pekerjaan pemesinan dimulai jauh sebelum mesin dinyalakan.',
        'Toleransi dinyatakan sebagai angka yang dapat diukur, bukan sebagai kata sifat seperti rapi atau presisi.',
        'Murid diberi ruang menentukan sendiri urutan pengerjaan setelah memahami gambar, lalu mempertanggungjawabkan pilihannya.'
      ],
      cons: [
        'Jobsheet masih berupa lembar cetak tunggal; murid dengan kemampuan awal berbeda memerlukan versi berlapis.',
        'Belum memuat contoh hasil kerja yang benar sebagai pembanding visual bagi murid.'
      ],
      theory: 'Mengikuti prinsip scaffolding Vygotsky, yakni bantuan yang dikurangi bertahap seiring meningkatnya kemandirian murid.'
    },
    's2-bahan-ajar': {
      title: 'Bahan Ajar Pemesinan',
      type: 'Materi Pembelajaran',
      fileUrl: '',
      context: 'Bahan ajar ini disusun dan diterapkan pada praktik mengajar mandiri. Materi praktik pemesinan mudah melebar ke hal teknis yang belum diperlukan, sehingga kedalamannya perlu dibatasi secara sadar.',
      purpose: 'Saya membatasi kedalaman materi pada apa yang benar-benar dituntut capaian pembelajaran, lalu menyediakan pengayaan terpisah bagi murid yang bergerak lebih cepat.',
      pros: [
        'Kedalaman materi ditakar terhadap capaian pembelajaran, bukan terhadap keluasan bidang pemesinan itu sendiri.',
        'Urutan penyajian mengikuti alur kerja nyata: membaca gambar, merencanakan langkah, menyiapkan alat, mengerjakan, memeriksa hasil.',
        'Materi dikaitkan dengan praktik industri manufaktur sehingga murid melihat alasan di balik setiap prosedur.'
      ],
      cons: [
        'Pembatasan kedalaman berisiko membuat murid yang cepat merasa kurang tertantang bila pengayaan tidak benar-benar disiapkan.',
        'Keterkaitan dengan industri masih bertumpu pada penjelasan lisan, belum pada kunjungan atau narasumber.'
      ],
      theory: 'Bertumpu pada prinsip kurikulum vokasi yang menautkan capaian pembelajaran dengan standar kompetensi kerja di dunia industri.'
    },
    's2-lkpd': {
      title: 'Lembar Kerja Peserta Didik',
      type: 'Materi Pembelajaran',
      fileUrl: '',
      context: 'LKPD menuntun murid dari membaca gambar kerja menuju benda kerja jadi. Kemampuan awal murid dalam membaca gambar teknik berbeda cukup jauh, sehingga lembar ini disiapkan berlapis.',
      purpose: 'Saya ingin setiap murid menuju benda kerja yang sama tanpa ada yang merasa dikerjakan pada tugas yang lebih rendah dari temannya.',
      pros: [
        'Disiapkan dua lapis: lembar ringkas bagi yang sudah memahami dasar, dan pendampingan langkah demi langkah bagi yang masih kesulitan.',
        'Setiap tahap dibangun di atas tahap sebelumnya sehingga kekeliruan di awal terlihat sebagai akibat nyata pada hasil akhir.',
        'Memuat ruang bagi murid mencatat keputusan yang mereka ambil, bukan hanya mengisi jawaban.'
      ],
      cons: [
        'Dua lapis lembar menambah pekerjaan penggandaan dan pengelolaan di bengkel.',
        'Belum ada mekanisme yang memudahkan murid berpindah lapis di tengah praktik ketika ternyata salah menakar kemampuannya.'
      ],
      theory: 'Menerapkan pembelajaran berdiferensiasi pada proses, dengan tujuan dan produk akhir yang tetap sama bagi seluruh murid.'
    },
    's2-media': {
      title: 'Media Pembelajaran',
      type: 'Media Pembelajaran',
      fileUrl: '',
      context: 'Media yang dipergunakan dalam praktik mengajar mandiri, berupa tayangan, model tiga dimensi, dan animasi langkah pengerjaan. Media dipilih berdasarkan kesulitan yang benar-benar dihadapi murid, bukan berdasarkan kebaruan teknologinya.',
      purpose: 'Kesulitan terbesar dalam pemesinan adalah membayangkan bentuk tiga dimensi dari gambar dua dimensi. Media yang saya pilih harus menjembatani persoalan itu; yang tidak menjawab kesulitan tertentu saya tinggalkan.',
      pros: [
        'Media dipakai pada tahap sebelum murid menyentuh mesin, sehingga penjelasan lisan yang semula berulang menjadi jauh lebih singkat.',
        'Penggunaannya dirancang menuntut murid menunjukkan, menandai, atau memperbaiki, bukan sekadar menyimak tayangan.',
        'Tersedia versi cetak untuk setiap media digital, sehingga pembelajaran tetap berjalan ketika perangkat tidak tersedia.'
      ],
      cons: [
        'Penyiapan versi cadangan menambah beban persiapan yang cukup besar untuk setiap pertemuan.',
        'Belum ada pengukuran yang memisahkan sumbangan media dari sumbangan pendampingan langsung terhadap peningkatan pemahaman murid.'
      ],
      theory: 'Mengacu pada teori beban kognitif: media yang tepat mengurangi beban ekstra sehingga perhatian murid tersedia untuk memahami inti pekerjaan.'
    },
    's2-dok-media': {
      title: 'Dokumentasi Penggunaan Media',
      type: 'Dokumentasi',
      fileUrl: '',
      context: 'Foto dan catatan penggunaan media selama praktik berlangsung di bengkel, diambil pada tiap siklus praktik mengajar mandiri.',
      purpose: 'Dokumentasi ini menjadi bukti bahwa media benar-benar dipakai dalam pembelajaran, sekaligus bahan untuk menilai apakah penggunaannya berjalan seperti yang saya rancang.',
      pros: [
        'Merekam keadaan bengkel apa adanya, termasuk kendala teknis yang muncul saat media dipakai.',
        'Memperlihatkan sikap murid saat berinteraksi dengan media, yang sering luput saat saya sedang mendampingi murid lain.',
        'Dapat dibandingkan antarsiklus untuk melihat perubahan cara saya memakai media.'
      ],
      cons: [
        'Pengambilan dokumentasi sambil mengajar membuat sebagian momen penting terlewat.',
        'Belum disertai catatan waktu sehingga sulit menautkan foto dengan tahap pembelajaran tertentu.'
      ],
      theory: 'Dokumentasi diperlakukan sebagai data untuk refleksi, mengikuti prinsip praktik reflektif Schon yang menempatkan bukti lapangan sebagai bahan berpikir.'
    },
    's2-video': {
      title: 'Rekaman Praktik Mengajar Mandiri',
      type: 'Video Pelaksanaan Pembelajaran',
      fileUrl: '',
      context: 'Rekaman utuh pelaksanaan praktik mengajar mandiri, dari kegiatan pembuka hingga penutup. Menonton rekaman diri sendiri memperlihatkan hal yang tidak terasa saat sedang mengajar.',
      purpose: 'Saya memakai rekaman ini untuk memeriksa apakah apersepsi benar-benar mengantar murid pada tujuan, bagian mana dari kegiatan inti yang tersendat, serta bagaimana perhatian saya tersebar di dalam bengkel.',
      pros: [
        'Ukuran keberhasilan apersepsi dibuat sederhana dan teramati: apakah murid dapat menyebutkan apa yang akan mereka hasilkan hari itu.',
        'Momen ketika murid berhenti bekerja ditelusuri penyebabnya, karena penyebab yang berbeda menuntut perbaikan yang berbeda.',
        'Rekaman memperlihatkan berapa lama murid menganggur menunggu giliran mesin, yang tidak terasa saat mengajar.'
      ],
      cons: [
        'Kehadiran kamera kemungkinan memengaruhi perilaku murid pada awal pertemuan.',
        'Sudut pengambilan tunggal belum menangkap kegiatan murid yang berada di sisi bengkel yang berlawanan.'
      ],
      theory: 'Memakai kerangka praktik reflektif Schon, khususnya reflection-on-action, yakni meninjau tindakan setelah peristiwa berlangsung dengan bukti yang dapat diperiksa ulang.'
    },
    's2-lk4': {
      title: 'Lembar Refleksi Praktik Pembelajaran Mandiri',
      type: 'Lembar Kerja Refleksi',
      fileUrl: '',
      context: 'LK 4 Refleksi Praktik Pembelajaran Mandiri diisi pada tiap siklus praktik. Isinya menautkan pengamatan atas rekaman dengan rencana perbaikan pada siklus berikutnya.',
      purpose: 'Refleksi tertulis memaksa saya menyatakan temuan secara spesifik, bukan berhenti pada kesan umum bahwa pembelajaran berjalan lancar atau kurang lancar.',
      pros: [
        'Refleksi disusun per siklus sehingga perubahan cara mengajar dapat ditelusuri dari satu siklus ke siklus berikutnya.',
        'Umpan balik guru pamong dicatat berdampingan dengan pengamatan saya sendiri.',
        'Setiap temuan diikuti satu langkah perbaikan yang konkret, bukan sekadar niat memperbaiki.'
      ],
      cons: [
        'Pengisian refleksi setelah jam praktik berisiko kehilangan detail yang masih segar saat pembelajaran berlangsung.',
        'Belum seluruh temuan disertai bukti yang dapat ditunjukkan, sebagian masih bersandar pada ingatan.'
      ],
      theory: 'Mengikuti siklus perbaikan berkelanjutan pada penelitian tindakan kelas: rencana, tindakan, pengamatan, refleksi, lalu rencana berikutnya.'
    },
    's2-dok-nonmengajar': {
      title: 'Dokumentasi Kegiatan Nonmengajar',
      type: 'Dokumentasi Kegiatan',
      fileUrl: '',
      context: 'Catatan dan foto keterlibatan saya dalam kegiatan sekolah di luar jam mengajar, mencakup pendampingan guru pamong, administrasi, dan kegiatan sekolah lainnya.',
      purpose: 'Keterlibatan nonmengajar memberi akses pada pengetahuan yang tidak tertulis di modul mana pun, dan memperluas pandangan saya tentang murid di luar peran mereka di bengkel.',
      pros: [
        'Diskusi setelah jam praktik dengan guru pamong sering lebih banyak mengubah cara saya mengajar dibanding perencanaan yang saya susun sendiri.',
        'Ketertiban pencatatan inventaris alat terbukti berdampak langsung pada kelancaran praktik dan ketepatan waktu mulai.',
        'Perjumpaan dengan murid dalam peran berbeda mengubah cara saya menilai murid yang semula tampak pasif.'
      ],
      cons: [
        'Keterlibatan masih tersebar pada banyak kegiatan kecil sehingga sulit menunjukkan satu kontribusi yang utuh.',
        'Catatan sebagian besar bersifat naratif dan belum dirangkum menjadi temuan yang dapat ditindaklanjuti.'
      ],
      theory: 'Memandang sekolah sebagai satu ekosistem, sejalan dengan pendekatan yang menempatkan keberhasilan pembelajaran sebagai hasil kerja banyak pihak, bukan guru seorang diri.'
    },
    's2-lk12': {
      title: 'Orientasi dan Observasi Lingkungan Belajar',
      type: 'Lembar Kerja Observasi',
      fileUrl: '',
      context: 'LK 1 Orientasi Manajemen Sekolah dan LK 2 Observasi Lingkungan Belajar, disusun pada awal masa PPL Mandiri di SMK N 2 Depok.',
      purpose: 'Kedua lembar ini memetakan konteks tempat saya mengajar sebelum menyusun rancangan pembelajaran, agar rencana yang saya buat berpijak pada keadaan sekolah yang sebenarnya.',
      pros: [
        'Pemetaan dilakukan sebelum menyusun modul ajar, sehingga penjadwalan dan ketersediaan bahan sudah diperhitungkan sejak awal.',
        'Mencakup manajemen sekolah dan lingkungan belajar sekaligus, bukan hanya kondisi di dalam bengkel.',
        'Menjadi rujukan ketika rencana pembelajaran perlu disesuaikan di tengah siklus.'
      ],
      cons: [
        'Observasi dilakukan pada rentang waktu terbatas sehingga belum menangkap dinamika sekolah sepanjang semester.',
        'Sebagian data bersumber dari wawancara singkat yang belum diperiksa silang dengan dokumen sekolah.'
      ],
      theory: 'Berpijak pada pandangan bahwa pembelajaran selalu terikat konteks, sehingga rancangan yang baik di atas kertas belum tentu sesuai dengan keadaan sekolah tertentu.'
    },
    's2-instrumen': {
      title: 'Instrumen Penilaian Praktik Mandiri',
      type: 'Instrumen Penilaian',
      fileUrl: '',
      context: 'Kisi-kisi, soal, dan lembar penilaian yang saya rancang untuk mengukur ketercapaian tujuan pembelajaran pada praktik mengajar mandiri.',
      purpose: 'Instrumen diturunkan langsung dari tujuan pembelajaran agar tidak ada yang dinilai tanpa pernah diajarkan, dan tidak ada tujuan yang lolos tanpa diukur.',
      pros: [
        'Penilaian mencakup tiga hal terpisah: ketepatan ukuran hasil kerja, ketepatan prosedur, dan keselamatan kerja.',
        'Ketiganya dinilai sendiri-sendiri karena murid dapat menghasilkan benda kerja yang tepat melalui cara yang tidak aman.',
        'Hasil penilaian dibaca sebagai umpan balik atas pengajaran saya, bukan semata penilaian atas murid.'
      ],
      cons: [
        'Menilai tiga aspek terpisah untuk banyak murid dalam satu hari menuntut waktu yang tidak selalu tersedia.',
        'Belum ada mekanisme pemeriksaan silang dengan guru pamong untuk menguji konsistensi penilaian saya.'
      ],
      theory: 'Menerapkan prinsip keselarasan konstruktif Biggs, yaitu tujuan, kegiatan, dan asesmen yang dirancang saling menopang dalam satu garis.'
    },
    's2-rubrik': {
      title: 'Rubrik Penilaian Keterampilan Praktik',
      type: 'Rubrik Penilaian',
      fileUrl: '',
      context: 'Rubrik keterampilan pemesinan beserta patokan teramatinya, disusun dengan bahasa yang dapat dibaca murid dan bukan hanya oleh penilai.',
      purpose: 'Saya ingin murid dapat memeriksa hasil kerjanya sendiri sebelum menyerahkan, sehingga penilaian ikut berfungsi sebagai alat belajar.',
      pros: [
        'Setiap tingkatan dinyatakan dengan patokan teramati seperti batas penyimpangan ukuran, bukan dengan kata sifat yang menimbulkan tafsir berbeda.',
        'Benda kerja diperiksa dengan jangka sorong pada titik yang sudah ditentukan, sehingga hasil penilaian dapat ditelusuri kembali.',
        'Penilaian per aspek menekan pengaruh kesan umum terhadap murid yang kerap mewarnai penilaian praktik.'
      ],
      cons: [
        'Rubrik dengan banyak aspek membuat proses penilaian berjalan lebih lambat dibanding penilaian menyeluruh sekaligus.',
        'Bahasa rubrik masih perlu diuji langsung kepada murid untuk memastikan benar-benar dapat mereka pakai secara mandiri.'
      ],
      theory: 'Mengacu pada asesmen sebagai proses belajar (assessment as learning), yang menempatkan murid sebagai pembaca aktif kriteria penilaian dirinya sendiri.'
    },

    'modal-rpp1': {
      title: 'RPP Siklus 1 Deep Learning Assembly Tool Post',
      type: 'Rencana Pelaksanaan Pembelajaran (RPP)',
      fileUrl: 'https://drive.google.com/file/d/13HtahKdlZsOCvZQitf-nsfdewEUgTeHT/view?usp=sharing',
      context: 'RPP ini saya buat untuk kelas XI Teknik Pemesinan SMK Negeri 2 Klaten dengan topik perancangan gambar rakitan Tool Post di Autodesk Inventor. Pelaksanaan dirancang selama 3 pertemuan dengan total 24 JP, mengingat materi assembly memang tidak bisa diselesaikan dalam satu kali pertemuan.',
      purpose: 'Tujuannya bukan sekadar menyelesaikan administrasi, melainkan menjadi peta yang membimbing alur pembelajaran agar siswa benar-benar sampai pada produk PDF gambar kerja Tool Post yang sesuai standar industri, bukan hanya tahu teori constraint.',
      pros: [
        'Tiga pendekatan (Understanding by Design, Deep Learning, dan sistem Among Tamansiswa) saya rangkai menjadi satu alur yang nyambung, bukan ditempel terpisah.',
        'Rubrik sumatif sembilan aspek dengan total bobot 100 membuat penilaian lebih objektif sehingga siswa tahu persis apa yang dinilai.',
        'Saya siapkan jalur diferensiasi sejak awal: scaffolding tambahan untuk siswa yang lambat dan tantangan exploded view untuk siswa yang cepat selesai.'
      ],
      cons: [
        'Alokasi 8 JP per pertemuan ternyata cukup berat di lapangan, terutama Pertemuan 3 yang menuntut 3 lembar drawing sekaligus.',
        'Belum ada skenario cadangan untuk siswa yang terhambat masalah teknis di luar kontrolnya seperti laptop hang atau lisensi Inventor bermasalah.'
      ],
      theory: 'Mengacu pada Understanding by Design (Wiggins dan McTighe) dengan pola backward design, dipadu pendekatan Deep Learning Kemdikbud serta filosofi Among Ki Hadjar Dewantara: Ing Ngarsa Sung Tuladha, Ing Madya Mangun Karsa, Tut Wuri Handayani.'
    },
    'modal-materi1': {
      title: 'Handbook Siswa Siklus 1 Assembly Tool Post Autodesk Inventor',
      type: 'Bahan Ajar / Handbook Siswa',
      fileUrl: 'https://drive.google.com/file/d/17Dta9nZyABe3j9t8P9DnovuKzn75m45l/view?usp=sharing',
      context: 'Handbook ini saya susun sebagai pendamping LKM untuk siswa kelas XI Teknik Pemesinan SMK Negeri 2 Klaten. Isinya panduan lengkap alur kerja assembly Tool Post sampai ekspor PDF gambar kerja menggunakan Autodesk Inventor, jadi siswa tidak hanya bergantung pada penjelasan saya di kelas.',
      purpose: 'Saya ingin siswa punya pegangan prosedural dan konseptual ketika saya tidak sedang berdiri di samping mereka. Dengan handbook ini, mereka bisa membaca ulang langkah yang lupa, mencocokkan kesalahan dengan tabel troubleshooting, dan tetap melangkah meski saya sedang membantu siswa lain.',
      pros: [
        'Strukturnya saya buat sistematis dari pengenalan komponen sampai ekspor PDF, lengkap dengan tabel kesalahan umum beserta solusinya.',
        'Setiap pertemuan saya sediakan lembar cek mandiri dan glosarium istilah teknis CAD agar siswa tidak merasa kesulitan dengan jargon baru.',
        'Saya banyak memakai screenshot langkah demi langkah karena siswa visual-kinestetik lebih mudah mengikuti prosedur lewat gambar daripada teks panjang.'
      ],
      cons: [
        'Konten 9 bagian terasa cukup padat untuk satu handbook, sehingga sebagian siswa kesulitan menemukan bagian yang sedang relevan dengan praktiknya.',
        'Saya belum menyertakan contoh gambar kerja PDF yang sudah jadi sebagai pembanding visual, padahal itu akan sangat membantu siswa.'
      ],
      theory: 'Saya menerapkan prinsip scaffolding Vygotsky melalui panduan bertahap di Zone of Proximal Development, sekaligus Project-Based Learning karena siswa diarahkan menghasilkan produk autentik berupa PDF gambar kerja.'
    },
    'modal-asesmen1': {
      title: 'Instrumen Asesmen Siklus 1 Tool Post',
      type: 'Instrumen Asesmen (Awal, Formatif, Sumatif)',
      fileUrl: 'https://drive.google.com/file/d/1SJhusFCTSfJd1659mWUAMIJrQBfO3nmM/view?usp=sharing',
      context: 'Dokumen ini saya rancang sebagai paket asesmen lengkap untuk Siklus 1, mencakup asesmen awal, lembar observasi formatif, checklist mandiri, rubrik sumatif sembilan aspek, pedoman penskoran, dan lembar rekap nilai.',
      purpose: 'Saya butuh alat ukur yang menyeluruh: memetakan kesiapan siswa di awal, memantau proses praktik di tengah jalan, sekaligus menilai produk akhir PDF gambar kerja Tool Post secara konsisten antar siswa.',
      pros: [
        'Alur asesmennya bertahap dari awal, formatif, sampai sumatif, dengan pemisahan tegas antara asesmen yang berdampak pada nilai dan yang murni untuk pemetaan.',
        'Rubrik per aspek saya buat dengan deskriptor lima level (0 sampai 4) plus rumus konversi bobot, sehingga penilaian jadi lebih konsisten meski dilakukan beberapa hari.',
        'Saya menyertakan instrumen refleksi murid dan catatan guru, sehingga asesmen ini bisa berfungsi sebagai assessment as learning, bukan sekadar pemberi nilai.'
      ],
      cons: [
        'Sembilan aspek dikalikan lima level berarti beban penilaian lumayan berat kalau menilai banyak siswa sekaligus dalam satu hari.',
        'Asesmen awalnya masih berupa lima pertanyaan terbuka tanpa rubrik penskoran kuantitatif, jadi datanya lebih kualitatif daripada terukur.'
      ],
      theory: 'Mengacu pada Assessment for Learning, Assessment as Learning, dan Assessment of Learning (Earl), dengan rubrik analitik berbobot yang sejalan dengan prinsip authentic assessment Mueller.'
    },
    'modal-lkm1': {
      title: 'LKM Siklus 1 Pertemuan 1 Assembly Tool Post',
      type: 'Lembar Kerja Murid (LKM)',
      fileUrl: 'https://drive.google.com/file/d/1mcGkRJtcLVytwnXn7z2mykJoX9hgZZ9R/view?usp=sharing',
      context: 'LKM ini saya pakai pada Pertemuan 1 Siklus 1. Tugasnya memandu siswa membuat file assembly .iam dan menempatkan delapan komponen Tool Post di Autodesk Inventor sebelum berlanjut ke tahap constraint.',
      purpose: 'Saya ingin siswa terbiasa bekerja prosedural sejak awal: tahu cara membuat file .iam, menempatkan komponen sesuai BOM, dan menetapkan Tool Holder sebagai Grounded Component agar referensi assembly tidak goyah.',
      pros: [
        'Format checklist dengan kolom "sudah" dan "perlu bimbingan" memudahkan siswa menilai dirinya sendiri sebelum saya datangi.',
        'Tabel komponen lengkap dengan jumlah dan fungsi singkat membantu siswa memverifikasi kelengkapan rakitan tanpa harus sering bertanya.'
      ],
      cons: [
        'Saya belum menyertakan ilustrasi atau screenshot langkah kerja, sehingga siswa masih banyak bergantung pada demonstrasi langsung.',
        'Kolom catatan kendala terlalu sempit, padahal beberapa siswa ingin menulis lebih panjang ketika menemui masalah teknis yang kompleks.'
      ],
      theory: 'Saya menerapkan guided practice dari pendekatan Cognitive Apprenticeship (Collins, Brown, dan Newman), yaitu siswa mengikuti prosedur eksplisit dengan monitoring guru yang bertahap dikurangi.'
    },
    'modal-lkm1-p2': {
      title: 'LKM Siklus 1 Pertemuan 2 Constraint dan Cek DOF',
      type: 'Lembar Kerja Murid (LKM)',
      fileUrl: 'https://drive.google.com/file/d/1Z3_glCt5CahLNMVduJ6XUMTLAjnhsl6d/view?usp=sharing',
      context: 'Pada Pertemuan 2 Siklus 1, LKM ini saya pakai untuk memandu siswa menerapkan empat jenis constraint, yaitu Mate, Flush, Insert, dan Angle, pada assembly Tool Post sampai DOF (Degree of Freedom) bernilai nol.',
      purpose: 'Saya ingin siswa paham bahwa rakitan stabil bukan kebetulan: setiap komponen perlu constraint yang tepat. Target DOF nol menjadi penanda objektif bahwa rakitan siap masuk tahap drawing IDW.',
      pros: [
        'Tabel constraint dilengkapi fungsi dan contoh spesifik di Tool Post, sehingga siswa tidak bingung kapan harus pakai Mate dan kapan Flush.',
        'Target DOF nol jadi indikator keberhasilan yang gampang dicek mandiri tanpa harus menunggu penilaian guru.'
      ],
      cons: [
        'Urutan constraint masih saya buat linear, padahal di praktik nyata kadang siswa perlu pendekatan iteratif.',
        'Belum ada panduan troubleshooting jelas ketika siswa menemui over-constraint atau konflik antar constraint.'
      ],
      theory: 'Berdasar pada scaffolded practice Bruner dengan pengurangan bantuan bertahap: dari demonstrasi, lalu imitasi dengan checklist, sampai pengecekan mandiri lewat indikator DOF.'
    },
    'modal-lkm3': {
      title: 'LKM Siklus 1 Pertemuan 3 Drawing IDW dan Export PDF',
      type: 'Lembar Kerja Murid (LKM)',
      fileUrl: 'https://drive.google.com/file/d/1YuJtd6sDCAwnYJ2eVZJI71GClZ6ep8et/view?usp=sharing',
      context: 'LKM ini menjadi penutup Siklus 1 yang memandu siswa membuat drawing .idw tiga lembar lengkap dengan BOM, balloon, title block, sampai ekspor PDF sebagai produk akhir sumatif.',
      purpose: 'Tujuan akhirnya satu, yaitu PDF gambar kerja Tool Post tiga lembar yang memenuhi seluruh sembilan aspek rubrik. LKM ini saya buat agar siswa tidak kebingungan saat semua komponen drawing harus dipenuhi sekaligus.',
      pros: [
        'Checklist akhir sepuluh item sebelum mengunggah PDF berfungsi sebagai quality control mandiri agar siswa tidak menyerahkan file yang masih kurang.',
        'Saya menempelkan rubrik penilaian ringkas langsung di LKM, jadi siswa paham ekspektasi dari awal mengerjakan, bukan setelah dinilai.',
        'Kolom refleksi tiga bagian (yang dikuasai, yang sulit, yang masih perlu bantuan) membantu siswa berlatih metakognisi.'
      ],
      cons: [
        'Beban Pertemuan 3 cukup tinggi karena tiga lembar drawing plus refleksi harus selesai dalam satu sesi 8 JP.',
        'Saya belum menyertakan contoh visual hasil drawing yang benar untuk dijadikan acuan perbandingan oleh siswa.'
      ],
      theory: 'Mengacu pada Project-Based Learning (Larmer dan Mergendoller) dengan produk autentik, sekaligus menumbuhkan self-regulation lewat checklist metakognitif sebagai bentuk Assessment as Learning.'
    },
    'modal-media1': {
      title: 'Media Pembelajaran Pertemuan 1 Assembly Tool Post',
      type: 'Media Pembelajaran (Slide Presentasi)',
      fileUrl: 'https://drive.google.com/file/d/1EUubB5nRb-d2RGyJCrDbUVBlOO3ZwAxq/view?usp=sharing',
      context: 'Slide presentasi 11 halaman ini saya pakai saat Pertemuan 1 Siklus 1 di lab CAD. Fokusnya menemani saya saat menjelaskan Assembly Environment, Place Component, dan konsep Grounded Component.',
      purpose: 'Saya ingin siswa punya gambaran visual yang jelas terhadap konsep file .ipt, .iam, dan .idw, mengingat ketiganya sering tertukar di kepala siswa pemula.',
      pros: [
        'Pertanyaan pemantik kontekstual yang saya susun di awal cukup efektif menghubungkan praktik digital dengan kondisi nyata di industri.',
        'Slide referensi delapan komponen lengkap dengan nama file .ipt menjadi quick reference yang sering siswa buka ulang saat praktik.',
        'Struktur slide saya susun mengikuti alur Among (Ing Ngarsa, Ing Madya, Tut Wuri) dengan exit ticket di akhir, jadi pembelajaran terasa utuh.'
      ],
      cons: [
        'Konten masih sangat bergantung pada narasi saya, sehingga siswa yang absen kesulitan mempelajari ulang tanpa rekaman.',
        'Belum saya tambahkan animasi atau video pendek proses Place Component yang sebenarnya akan sangat membantu siswa visual.'
      ],
      theory: 'Mengacu pada Dual Coding Theory (Paivio) dan prinsip Multimedia Learning Mayer, terutama segmenting yang mendorong informasi disajikan dalam potongan kecil per slide.'
    },
    'modal-media2': {
      title: 'Media Pembelajaran Pertemuan 2 Constraint Assembly Tool Post',
      type: 'Media Pembelajaran (Slide Presentasi)',
      fileUrl: 'https://drive.google.com/file/d/1Ps_bbj5JMdrlZeTidPEPYYfbqokWq390/view?usp=sharing',
      context: 'Slide presentasi 11 halaman ini saya gunakan untuk Pertemuan 2 Siklus 1, fokus pada demonstrasi dan praktik penerapan constraint Mate, Flush, Insert, dan Angle pada assembly Tool Post.',
      purpose: 'Saya ingin siswa memahami fungsi setiap constraint, cara memilih permukaan yang tepat, dan cara membaca DOF, bukan sekadar tahu nama tombolnya.',
      pros: [
        'Setiap jenis constraint saya pisah ke slide masing-masing, lengkap dengan definisi, langkah, dan kesalahan umum yang biasa muncul.',
        'Slide troubleshooting constraint membantu saya saat menjawab pertanyaan siswa tanpa harus mengulang penjelasan dari nol.',
        'Urutan kerja praktik Pertemuan 2 saya sajikan dalam numbered steps yang mudah diikuti.'
      ],
      cons: [
        'Penjelasan perbedaan Mate dan Flush masih kurang kontrastif untuk siswa pemula, jadi sebagian masih sering tertukar.',
        'Belum ada slide perbandingan before-after assembly sebelum dan sesudah constraint diterapkan.'
      ],
      theory: 'Mengadopsi Worked Example Effect (Sweller) dari Cognitive Load Theory, yaitu demonstrasi langkah demi langkah agar beban kognitif ekstrinsik siswa berkurang.'
    },
    'modal-media3': {
      title: 'Media Pembelajaran Pertemuan 3 Drawing Tool Post',
      type: 'Media Pembelajaran (Slide Presentasi)',
      fileUrl: 'https://drive.google.com/file/d/1J66nK1Tj4dIgvm9A9u0brBtIuvxo_gRz/view?usp=sharing',
      context: 'Slide ini menemani Pertemuan 3 Siklus 1, di mana siswa membuat drawing .idw tiga lembar, BOM, balloon, title block, sampai mengekspor PDF gambar kerja Tool Post.',
      purpose: 'Saya menggunakan media ini untuk memvisualisasikan bagaimana model 3D assembly diturunkan menjadi gambar kerja 2D yang lengkap dan siap dipakai sebagai dokumen produksi.',
      pros: [
        'Slide "Komponen Drawing Wajib Ada" saya pakai sebagai mental checklist sehingga siswa tidak lupa elemen-elemen esensial drawing.',
        'Checklist sumatif sembilan aspek lengkap dengan bobot saya tampilkan langsung agar siswa memprioritaskan bagian yang nilainya paling besar.',
        'Slide troubleshooting di akhir sangat praktis ketika siswa mengalami masalah saat ekspor PDF.'
      ],
      cons: [
        'Saya belum menyertakan contoh PDF gambar kerja yang sudah memenuhi seluruh sembilan aspek rubrik sebagai pembanding.',
        'Materi drawing environment yang sebetulnya kompleks masih saya padatkan dalam 11 slide, sehingga sebagian siswa merasa terlalu cepat.'
      ],
      theory: 'Mengacu pada Goal-Free Effect (Sweller) dengan menampilkan target produk di awal, serta Signaling Principle Mayer melalui penegasan bobot terbesar pada rubrik.'
    },
    'modal-toolpost': {
      title: 'Job Sheet Tool Post',
      type: 'Jobsheet / Gambar Kerja',
      fileUrl: 'https://drive.google.com/file/d/1HGyN7VOBQYgdXj3-IszSVntb4yltAMt_/view?usp=sharing',
      context: 'File ini berupa gambar rakitan Tool Post hasil revisi yang saya gunakan sebagai referensi objek praktik Assembly di Siklus 1. Dokumen ini menjadi acuan utama untuk semua dimensi dan bentuk komponen yang akan dirakit.',
      purpose: 'Saya butuh referensi yang konsisten agar seluruh siswa berangkat dari titik yang sama saat merakit. Tanpa jobsheet ini, hasil kerja siswa rentan tidak presisi karena masing-masing menafsirkan bentuk komponen dengan caranya sendiri.',
      pros: [
        'Detail presisi pada gambar cukup jelas dan bisa langsung dijadikan acuan saat siswa merakit komponen di Inventor.'
      ],
      cons: [
        'Karena murni gambar teknik, dokumen ini tidak memberi instruksi urutan pasang, sehingga siswa tetap butuh panduan dari LKM atau guru.'
      ],
      theory: 'Berfungsi sebagai authentic material yang merepresentasikan dokumen kerja nyata di industri manufaktur, mendukung prinsip Contextual Teaching and Learning.'
    },
    'modal-rpp2': {
      title: 'RPP Siklus 2 Pembelajaran Bench Vise',
      type: 'Rencana Pelaksanaan Pembelajaran (RPP)',
      fileUrl: 'https://drive.google.com/file/d/1ZA9QdvQr6je_JHCprcPOy62WWKSISAaF/view?usp=sharing',
      context: 'RPP ini saya susun setelah melakukan refleksi atas Siklus 1. Saya pindah objek ke Bench Vise supaya siswa dapat tantangan baru, tapi tetap belajar membaca gambar teknik, memahami komponen mekanik, dan bekerja berdasarkan dokumen.',
      purpose: 'Saya ingin pembelajaran lebih terstruktur dan kontekstual, sekaligus responsif terhadap kebutuhan siswa lewat penguatan demonstrasi, praktik terbimbing, diskusi kesulitan, dan evaluasi berbasis produk kerja.',
      pros: [
        'Alur pembelajaran terasa nyambung dengan Siklus 1 karena strateginya saya perbaiki dari hasil refleksi siklus sebelumnya.',
        'Objek Bench Vise membuat aktivitas siswa lebih autentik dan dekat dengan konteks kerja manufaktur.',
        'Peran saya sebagai fasilitator menjadi lebih jelas lewat demonstrasi, pendampingan, dan umpan balik bertahap.'
      ],
      cons: [
        'Diferensiasi tugas masih perlu saya buat lebih eksplisit agar siswa dengan kecepatan belajar berbeda tetap merasa terlayani.',
        'Indikator keberhasilan akan lebih kuat kalau langsung saya kaitkan dengan rubrik produk supaya jejak penilaian mudah ditelusuri.'
      ],
      theory: 'Mengacu pada reflective practice dalam Penelitian Tindakan Kelas, scaffolding Vygotsky, dan Contextual Teaching and Learning karena pembelajaran saya perbaiki antar siklus lewat tugas praktik autentik.'
    },
    'modal-asesmen2': {
      title: 'Perangkat Asesmen Siklus 2',
      type: 'Instrumen Asesmen Siklus 2',
      fileUrl: 'https://drive.google.com/file/d/1JfYVk4iEimTrBkIMsdm8se5tzNjzwpzz/view?usp=sharing',
      context: 'Perangkat asesmen Siklus 2 saya buat untuk memotret peningkatan kemampuan siswa setelah perbaikan pembelajaran. Bukan hanya nilai akhir yang saya lihat, melainkan juga proses, kemandirian, ketelitian, dan kemampuan siswa menerapkan masukan dari siklus sebelumnya.',
      purpose: 'Saya butuh data yang lebih objektif untuk menilai apakah strategi perbaikan di Siklus 2 benar-benar berhasil meningkatkan kompetensi siswa atau hanya terasa membaik di permukaan.',
      pros: [
        'Asesmennya mendukung evaluasi berkelanjutan karena saya bisa membandingkan kondisi siswa sebelum dan sesudah perbaikan.',
        'Saya bisa mengamati proses kerja siswa, bukan hanya hasil akhir, sehingga umpan balik bisa lebih spesifik.',
        'Hasilnya menjadi dasar refleksi yang kuat untuk memutuskan apakah perlu penguatan lanjutan di siklus berikutnya.'
      ],
      cons: [
        'Rubrik perlu saya buat lebih rinci agar penilaian antar siswa konsisten dan tidak terlalu bergantung pada perasaan saya.',
        'Saya perlu menambah ruang catatan kualitatif supaya kesalahan siswa bisa dijelaskan, bukan hanya diberi skor.'
      ],
      theory: 'Bersandar pada Assessment for Learning dan authentic assessment, di mana penilaian saya pakai sebagai umpan balik perbaikan sekaligus mengukur performa siswa pada tugas praktik nyata.'
    },
    'modal-materi2': {
      title: 'Bahan Ajar Siklus 2',
      type: 'Bahan Ajar',
      fileUrl: 'https://drive.google.com/file/d/1iERRUFToo_4ckzTqBm1CKgQ7eixDdtsF/view?usp=sharing',
      context: 'Bahan ajar Siklus 2 saya rancang sebagai sumber belajar pendamping agar siswa lebih mandiri memahami materi Bench Vise. Posisinya menjadi penghubung antara penjelasan saya, jobsheet, LKM, dan praktik di lapangan.',
      purpose: 'Saya ingin pemahaman konsep siswa terbangun sebelum praktik dimulai, sehingga waktu di bengkel bisa fokus pada pengerjaan, bukan menjelaskan ulang teori dari nol.',
      pros: [
        'Membantu siswa membangun pemahaman awal sebelum mengerjakan tugas praktik, jadi praktiknya tidak diawali dari kebingungan.',
        'Bisa menjadi pegangan belajar mandiri sehingga siswa tidak perlu menunggu saya untuk maju selangkah.',
        'Memperkuat hubungan antara konsep gambar teknik dan penerapannya pada objek Bench Vise.'
      ],
      cons: [
        'Akan lebih kuat kalau saya tambah contoh kesalahan umum dan cara memperbaikinya, karena itu bagian yang paling sering ditanyakan siswa.',
        'Perlu penanda bagian penting supaya siswa cepat menemukan informasi saat praktik berlangsung.'
      ],
      theory: 'Sejalan dengan scaffolding dan Cognitive Load Theory karena bahan ajar saya pecah menjadi referensi yang bisa siswa pelajari bertahap sebelum menghadapi tugas praktik penuh.'
    },
    'modal-lkm2': {
      title: 'LKM Siklus 2',
      type: 'Lembar Kerja Murid (LKM)',
      fileUrl: 'https://drive.google.com/file/d/1u8pM1xoKZZcD-_1AL0LoqnMQY0W-JC1d/view?usp=sharing',
      context: 'LKM Siklus 2 saya pakai sebagai alat kerja siswa selama praktik Bench Vise. Fungsinya menerjemahkan materi dan instruksi saya menjadi langkah konkret yang bisa diikuti, dicatat, dan direfleksikan oleh siswa.',
      purpose: 'Saya ingin siswa bekerja sistematis, aktif mencatat hasil pengamatan, dan mampu mengevaluasi proses belajarnya selama menyelesaikan tugas Siklus 2.',
      pros: [
        'Langkah kerja membuat aktivitas praktik lebih terarah, sehingga kebingungan siswa di awal pengerjaan jauh berkurang.',
        'LKM mendorong keaktifan karena siswa tidak hanya menerima materi, tetapi juga melakukan, mencatat, dan merefleksi.',
        'Strukturnya cocok dijadikan bukti proses belajar pada Penelitian Tindakan Kelas.'
      ],
      cons: [
        'Instruksi sebaiknya saya buat bertingkat agar siswa cepat tetap tertantang dan siswa lambat tetap terbantu.',
        'Saya perlu kolom refleksi atau catatan kesulitan agar bisa membaca hambatan belajar tiap siswa secara spesifik.'
      ],
      theory: 'Memakai pendekatan guided practice dan metakognisi, karena siswa diarahkan lewat langkah kerja sambil dilatih menyadari proses, kesalahan, dan perbaikan belajarnya sendiri.'
    },
    'modal-media-s2': {
      title: 'Media Presentasi (PPT) Siklus 2',
      type: 'Media Pembelajaran (Slide Presentasi)',
      fileUrl: 'https://drive.google.com/file/d/1Vp0AWdM7qEqq1TC_zvRLVwuGaeqSxNyo/view?usp=sharing',
      context: 'Media presentasi Siklus 2 saya pakai untuk membuka pembelajaran, menjelaskan alur praktik, menampilkan visual utama Bench Vise, dan menegaskan bagian yang harus diperhatikan siswa.',
      purpose: 'Saya ingin penjelasan saya terasa ringkas, visual, dan mudah diikuti, sehingga siswa punya gambaran awal sebelum masuk ke aktivitas praktik atau pengerjaan LKM.',
      pros: [
        'Visualnya membantu siswa memahami bentuk dan komponen Bench Vise sebelum mereka mendalami dokumen kerja yang lebih detail.',
        'Slide menjaga fokus kelas karena informasi disampaikan bertahap dan mudah saya arahkan.',
        'Cocok menjadi jembatan antara apersepsi, demonstrasi, dan instruksi praktik.'
      ],
      cons: [
        'Media ini perlu didukung demonstrasi langsung agar tidak berhenti sebagai penjelasan satu arah.',
        'Akan lebih efektif kalau saya tambahkan penanda visual pada bagian rawan salah atau poin pemeriksaan kerja.'
      ],
      theory: 'Selaras dengan Multimedia Learning Mayer, terutama prinsip signaling dan segmenting, karena informasi visual saya susun bertahap agar siswa menangkap poin penting tanpa kelebihan beban kognitif.'
    },
    'modal-bench-vise2': {
      title: 'Job Sheet Bench Vise Siklus 2',
      type: 'Jobsheet / Gambar Kerja',
      fileUrl: 'https://drive.google.com/file/d/1UBkwO2ZI1SxuAzPomElc8yiNGclT3lv_/view?usp=sharing',
      context: 'Jobsheet Bench Vise menjadi artefak kunci di Siklus 2 karena ini acuan teknis yang siswa pegang. Dokumen ini menyatukan materi, LKM, dan praktik dengan produk nyata yang harus dibaca dan dikerjakan siswa.',
      purpose: 'Saya menyediakan referensi gambar kerja agar siswa dapat mengenali bentuk, komponen, ukuran, dan tuntutan teknis Bench Vise dengan lebih akurat sebelum menyelesaikan tugas praktik.',
      pros: [
        'Bench Vise relevan untuk melatih kemampuan membaca gambar teknik, memahami relasi komponen, dan berpikir spasial.',
        'Memberi konteks nyata sehingga pembelajaran tidak terjebak di teori saja.',
        'Bisa saya jadikan standar pembanding ketika siswa mengecek ketepatan hasil kerjanya.'
      ],
      cons: [
        'Siswa pemula masih butuh saya bimbing untuk membaca detail gambar dan memahami urutan pengerjaan.',
        'Akan lebih kuat kalau saya pasangkan dengan checklist pemeriksaan hasil kerja.'
      ],
      theory: 'Mendukung Contextual Teaching and Learning serta Project-Based Learning karena siswa belajar lewat dokumen kerja autentik yang berujung pada penyelesaian produk praktik.'
    },
    'modal-rpp3': {
      title: 'RPP Siklus 3 Penguatan Pembelajaran',
      type: 'Rencana Pelaksanaan Pembelajaran (RPP)',
      fileUrl: 'https://drive.google.com/file/d/1nMEvFmnToRrXgEasfwipyZYPFPAH81g7/view?usp=sharing',
      context: 'RPP Siklus 3 saya rancang sebagai puncak dari rangkaian PTK. Saya menutup celah yang muncul di Siklus 1 dan 2 dengan strategi yang lebih matang, alur tugas yang lebih ringkas, dan ekspektasi produk akhir yang lebih jelas.',
      purpose: 'Saya ingin memastikan siswa benar-benar mantap pada kompetensi inti: membaca gambar teknik, mengelola alur kerja praktik, dan menghasilkan produk kerja yang memenuhi standar industri tanpa banyak revisi.',
      pros: [
        'Strategi pembelajaran sudah saya stabilkan dari hasil refleksi dua siklus sebelumnya, jadi efisiensi waktunya lebih baik.',
        'Saya berikan ruang lebih besar untuk umpan balik personal karena alur kerja sudah dipahami siswa dari Siklus 1 dan 2.',
        'Indikator keberhasilan saya pertajam sehingga siswa tahu persis kapan tugasnya bisa dianggap selesai.'
      ],
      cons: [
        'Karena ekspektasinya naik, saya perlu menyiapkan jaring pengaman untuk siswa yang baru menyusul atau tertinggal di siklus sebelumnya.',
        'Beban dokumentasi siswa cukup banyak, sehingga saya harus memastikan format catatannya tidak menambah beban kerja yang tidak perlu.'
      ],
      theory: 'Menggunakan reflective practice Schön dan prinsip Penelitian Tindakan Kelas Kemmis dan McTaggart, di mana setiap siklus saya gunakan sebagai bahan perbaikan siklus berikutnya.'
    },
    'modal-asesmen3': {
      title: 'Perangkat Asesmen Siklus 3',
      type: 'Instrumen Asesmen Siklus 3',
      fileUrl: 'https://drive.google.com/file/d/1Q4X0hzFoL2sndthweM0Z2Zg2UMEZbAnN/view?usp=sharing',
      context: 'Asesmen Siklus 3 saya gunakan untuk memvalidasi capaian akhir setelah dua siklus perbaikan. Fokusnya tidak hanya nilai produk, tetapi juga konsistensi performa siswa selama proses kerja.',
      purpose: 'Saya ingin tahu apakah peningkatan yang muncul di Siklus 2 memang stabil, bukan kebetulan, sehingga keputusan kelulusan kompetensi bisa saya pertanggungjawabkan.',
      pros: [
        'Instrumennya sudah saya rapikan berdasar pengalaman menilai di Siklus 1 dan 2, jadi alurnya lebih efisien.',
        'Saya menyediakan bagian observasi proses agar siswa tetap dinilai dari kerja nyata, bukan hanya hasil akhir.',
        'Ada ruang umpan balik singkat yang langsung bisa saya tulis saat menilai, membantu siswa memperbaiki di sesi terakhir.'
      ],
      cons: [
        'Untuk siswa yang masih banyak revisi, instrumen ini akan terasa berat karena ekspektasi nilai akhir cukup tinggi.',
        'Saya masih perlu menambah kolom catatan kualitatif yang lebih panjang agar setiap nilai punya konteks penjelasannya.'
      ],
      theory: 'Mengacu pada Assessment of Learning sekaligus Assessment as Learning, karena di siklus akhir siswa juga saya minta mengevaluasi diri sendiri sebagai bagian dari proses penilaian.'
    },
    'modal-materi3': {
      title: 'Bahan Ajar Siklus 3',
      type: 'Bahan Ajar',
      fileUrl: 'https://drive.google.com/file/d/1IMeGEQnQ7yGPfZDlNIx9vvFvSyEFDxd5/view?usp=sharing',
      context: 'Bahan ajar Siklus 3 saya susun sebagai konsolidasi: konsep yang sudah pernah muncul di siklus sebelumnya saya rangkum ulang, lalu saya tambah bagian penguatan untuk topik yang masih sering keliru.',
      purpose: 'Saya ingin siswa punya satu sumber rujukan yang ringkas dan konsisten di siklus akhir, daripada harus membuka berkas-berkas dari siklus terdahulu.',
      pros: [
        'Konsep utama saya rangkum kembali sehingga siswa tidak kehilangan benang merah dari Siklus 1 dan 2.',
        'Bagian penguatan saya susun berdasarkan kesalahan paling sering, bukan asumsi materi yang sulit secara umum.',
        'Layoutnya saya buat lebih ringkas agar siswa mudah membaca cepat di sela-sela praktik.'
      ],
      cons: [
        'Karena ringkasannya cukup padat, siswa yang baru bergabung di Siklus 3 mungkin perlu pendampingan tambahan untuk memahami konteksnya.',
        'Saya belum menyertakan tautan ke contoh hasil kerja siswa terbaik dari siklus sebelumnya sebagai pembanding.'
      ],
      theory: 'Mengacu pada prinsip Cognitive Load Theory dengan menyajikan ulang informasi penting dalam bentuk lebih ringkas, sekaligus scaffolding karena bantuan visual saya kurangi seiring naiknya kemandirian siswa.'
    },
    'modal-lkm-s3': {
      title: 'LKM Siklus 3',
      type: 'Lembar Kerja Murid (LKM)',
      fileUrl: 'https://drive.google.com/file/d/146s-ujXpnJcaow8u1ez-d7AybWFvk6ot/view?usp=sharing',
      context: 'LKM Siklus 3 saya pakai sebagai panduan kerja akhir. Aktivitasnya saya rancang sedikit lebih terbuka dibanding siklus sebelumnya supaya siswa terbiasa mengambil keputusan teknis sendiri.',
      purpose: 'Saya ingin siswa makin mandiri: bisa merencanakan langkah, memilih constraint yang tepat, dan memutuskan kapan pekerjaannya bisa dianggap selesai.',
      pros: [
        'Instruksi yang lebih terbuka mendorong siswa berpikir, bukan hanya mengikuti urutan tombol.',
        'Saya sediakan poin refleksi yang menyatukan pengalaman siswa dari Siklus 1 sampai 3.',
        'Ada bagian self-check yang membuat siswa terbiasa melakukan kontrol kualitas terhadap hasil kerjanya.'
      ],
      cons: [
        'Untuk siswa yang masih kurang percaya diri, instruksi terbuka kadang justru bikin mereka ragu memulai.',
        'Saya perlu memantau lebih intens supaya kebebasan dalam LKM tidak berubah jadi kebingungan terselubung.'
      ],
      theory: 'Mengacu pada gradual release of responsibility (Pearson dan Gallagher), karena di siklus akhir kontrol kerja sebagian besar saya geser ke siswa.'
    },
    'modal-media-s3': {
      title: 'Media Presentasi (PPT) Siklus 3',
      type: 'Media Pembelajaran (Slide Presentasi)',
      fileUrl: 'https://drive.google.com/file/d/1WC8kfZjPYYoN2XoQecVcyjJbmqGckReo/view?usp=sharing',
      context: 'Media presentasi Siklus 3 saya gunakan untuk membuka pembelajaran, mengulang konsep penting, dan menampilkan target produk akhir agar siswa langsung punya gambaran akhir yang jelas.',
      purpose: 'Saya ingin presentasi ini menjadi pengingat sekaligus pemicu, bukan penjelasan dari nol, karena siswa sudah lewat dua siklus sebelumnya.',
      pros: [
        'Slide pembuka langsung menampilkan target produk akhir, sehingga siswa fokus ke sasaran sejak menit pertama.',
        'Saya menampilkan ringkasan kesalahan umum dari siklus sebelumnya supaya siswa tidak mengulang masalah yang sama.',
        'Format slide saya ringkas, jadi waktu praktik tidak terpotong oleh durasi paparan yang terlalu panjang.'
      ],
      cons: [
        'Karena banyak materi yang saya rangkum, siswa yang absen di siklus sebelumnya bisa kewalahan kalau hanya mengandalkan slide ini.',
        'Beberapa visual masih bersifat statis, padahal animasi pendek akan lebih membantu untuk topik tertentu.'
      ],
      theory: 'Mengacu pada Multimedia Learning Mayer, terutama prinsip coherence dan signaling, karena saya menyaring konten ke yang paling relevan dan menandai bagian penting secara eksplisit.'
    },
    'modal-jobsheet3': {
      title: 'Job Sheet Siklus 3',
      type: 'Jobsheet / Gambar Kerja',
      fileUrl: 'https://drive.google.com/file/d/1-hlj7zVWoxI7PuqmPQr5hTXQEKzxZbQ7/view?usp=sharing',
      context: 'Jobsheet Siklus 3 menjadi acuan teknis untuk tugas akhir program. Saya menyiapkan dokumen ini agar siswa terbiasa membaca gambar kerja yang lebih detail dan mendekati kondisi industri.',
      purpose: 'Saya ingin siswa keluar dari Siklus 3 dengan kepercayaan diri membaca jobsheet yang sesungguhnya, bukan hanya dokumen latihan yang sudah disederhanakan.',
      pros: [
        'Tingkat detail jobsheet sudah saya naikkan agar siswa terbiasa dengan informasi sepadat dokumen kerja nyata.',
        'Saya jadikan jobsheet ini standar pembanding untuk asesmen sumatif siklus akhir.',
        'Layout dan notasi mengikuti gaya gambar kerja umum di industri, jadi siswa terbiasa dengan format profesional.'
      ],
      cons: [
        'Tingkat detailnya cukup tinggi, sehingga siswa yang masih lemah membaca gambar perlu waktu adaptasi di awal sesi.',
        'Saya perlu menyediakan checklist pembacaan jobsheet sebagai pendamping agar siswa tidak kehilangan informasi penting.'
      ],
      theory: 'Mendukung Contextual Teaching and Learning sekaligus situated learning Lave dan Wenger, karena siswa belajar lewat dokumen yang menyerupai kondisi kerja sebenarnya.'
    }
  };

  function getEmbedUrl(url) {
    if (!url) return '';
    const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
    if (driveMatch) {
      return 'https://drive.google.com/file/d/' + driveMatch[1] + '/preview';
    }
    return url;
  }

  function highlightText(text) {
    if (!text) return '';
    // **bold** -> <strong> with color
    text = text.replace(/\*\*([^*]+)\*\*/g, '<strong style="color:#FF6B6B;">$1</strong>');
    // numbers/percentages auto-bold
    text = text.replace(/\b(\d+[\d,.]*\s?(?:%|JP|jam|aspek|level|halaman|item|komponen|lembar|menit|detik))/g, '<strong style="color:#0F5EA8;">$1</strong>');
    return text;
  }

  function getEmbedHtml(url, height) {
    var h = height || '100%';
    if (!navigator.onLine) {
      return '<div class="offline-embed-fallback" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: ' + h + '; min-height: 300px; padding: 30px; text-align: center; background: rgba(0,0,0,0.02); border: 2px dashed #DEE2E8; border-radius: 8px; font-family: sans-serif;"><i class="fa-solid fa-wifi-slash" style="font-size: 2.5rem; color: #98A2B3; margin-bottom: 16px;"></i><h4 style="margin-bottom: 8px; color: #344054; font-weight: 600;">Koneksi Offline</h4><p style="margin-bottom: 0; color: #667085; max-width: 400px; font-size: 0.9rem; line-height: 1.4;">Dokumen ini bersumber dari Google Drive dan membutuhkan koneksi internet untuk memuat preview. Silakan hubungkan ke internet.</p></div>';
    }
    return '<iframe src="' + url + '" style="width: 100%; height: ' + h + '; border: 1px solid #DEE2E8; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);" title="PDF Preview"></iframe>';
  }

  function openModal(modalId, viewMode) {
    const data = artifactData[modalId] || artifactData['modal-rpp1'];
    const fileUrl = data.fileUrl || '';
    const embedUrl = getEmbedUrl(fileUrl);
    const isDrive = /drive\.google\.com/i.test(fileUrl);
    const canPreview = Boolean(fileUrl && (isDrive || /\.pdf(?:$|[?#])/i.test(fileUrl)));

    if (viewMode === 'pdf' && canPreview) {
      modalContent.innerHTML = '<div class="modal-header" style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-start; border-bottom: none; padding-bottom: 0; gap: 15px; padding-right: 30px;"><div style="flex: 1; min-width: 250px;"><h3 style="margin-bottom: 4px; font-size: 1.3rem;">' + data.title + '</h3><p style="margin-bottom: 0;">Preview Dokumen</p></div><a href="' + fileUrl + '" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 6px; padding: 10px 18px; background: #2EC4B6; color: #FFFFFF; border-radius: 8px; font-weight: 600; text-decoration: none; font-size: 0.9rem; box-shadow: 0 4px 12px rgba(46,196,182,0.3); z-index: 5;">Buka di Tab Baru &nearr;</a></div><div class="modal-body" style="height: 75vh; padding-top: 20px;">' + getEmbedHtml(embedUrl) + '</div>';
    } else {
      var prosHtml = data.pros.map(function(p) { return '<li style="margin-bottom: 8px; padding: 6px 0;"><span style="color:#2EC4B6;font-weight:700;margin-right:8px;font-size:1.1em;">&#10003;</span>' + highlightText(p) + '</li>'; }).join('');
      var consHtml = data.cons.map(function(c) { return '<li style="margin-bottom: 8px; padding: 6px 0;"><span style="color:#FF6B6B;font-weight:700;margin-right:8px;font-size:1.1em;">&#9888;</span>' + highlightText(c) + '</li>'; }).join('');

      var filePreviewHtml = '';
      if (canPreview) {
        filePreviewHtml = '<div class="pdf-preview" style="margin-top: 30px; border-top: 2px dashed #DEE2E8; padding-top: 20px;"><div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; margin-bottom: 16px; gap: 10px;"><h4 style="margin: 0;">Preview Dokumen Full</h4><a href="' + fileUrl + '" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 6px 14px; background: #EEF0F4; color: #2EC4B6; border-radius: 6px; font-weight: 600; text-decoration: none; font-size: 0.85rem;">Buka di Tab Baru &nearr;</a></div>' + getEmbedHtml(embedUrl, '60vh') + '</div>';
      } else if (fileUrl) {
        filePreviewHtml = '<div class="modal-files" style="margin-top: 20px;"><h4>File Artefak</h4><a href="' + fileUrl + '" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 10px 20px; background: #FF6B6B; color: #FFFFFF; border-radius: 8px; font-weight: 600; text-decoration: none;">Buka File</a></div>';
      }

      modalContent.innerHTML = '<div class="modal-header"><h3 style="font-size: 1.5rem; color: #0F5EA8;">' + data.title + '</h3><p style="color: #666; font-style: italic;">' + data.type + '</p></div><div class="modal-body"><h4 style="color: #0F5EA8; border-left: 3px solid #2EC4B6; padding-left: 10px;">Konteks Pembuatan</h4><p>' + highlightText(data.context) + '</p><h4 style="color: #0F5EA8; border-left: 3px solid #F7C05B; padding-left: 10px;">Tujuan</h4><p>' + highlightText(data.purpose) + '</p><h4 style="color: #0F5EA8; border-left: 3px solid #2EC4B6; padding-left: 10px;">Kelebihan & Kekurangan</h4><ul style="list-style: none; padding-left: 0;">' + prosHtml + consHtml + '</ul><h4 style="color: #0F5EA8; border-left: 3px solid #9B72CF; padding-left: 10px;">Kajian Teori</h4><p style="font-style: italic; border-left: 2px solid #ddd; padding-left: 12px; color: #555;">' + highlightText(data.theory) + '</p>' + filePreviewHtml + '</div>';
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalTriggers.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      openModal(btn.getAttribute('data-modal'), btn.getAttribute('data-view'));
    });
  });

  document.querySelectorAll('.dossier-preview-trigger').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const title = btn.getAttribute('data-pdf-title') || 'Preview Dokumen';
      const fileUrl = btn.getAttribute('data-pdf-url') || '#';
      const previewUrl = btn.getAttribute('data-pdf-preview') || fileUrl;

      modalContent.innerHTML = '<div class="modal-header" style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-start; border-bottom: none; padding-bottom: 0; gap: 15px; padding-right: 30px;"><div style="flex: 1; min-width: 250px;"><h3 style="margin-bottom: 4px; font-size: 1.3rem;">' + title + '</h3><p style="margin-bottom: 0;">Preview Dokumen Penilaian</p></div><a href="' + fileUrl + '" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 6px; padding: 10px 18px; background: #2EC4B6; color: #FFFFFF; border-radius: 8px; font-weight: 600; text-decoration: none; font-size: 0.9rem; box-shadow: 0 4px 12px rgba(46,196,182,0.3); z-index: 5;">Buka di Tab Baru &nearr;</a></div><div class="modal-body" style="height: 75vh; padding-top: 20px;">' + getEmbedHtml(previewUrl) + '</div>';
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);

  if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

});
